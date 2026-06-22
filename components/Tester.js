"use client";

import { useState } from "react";
import { IconPlay } from "./Icons";
import CodeBlock from "./CodeBlock";

export default function Tester({ endpoint }) {
  const isUpload = endpoint.method === "POST";
  const fields = endpoint.params || endpoint.body || [];

  const [values, setValues] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = field.type === "file" ? null : field.example || "";
      return acc;
    }, {})
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resultIsImage, setResultIsImage] = useState(false);
  const [errorText, setErrorText] = useState(null);

  function updateValue(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function runRequest() {
    setLoading(true);
    setErrorText(null);
    setResult(null);
    setResultIsImage(false);

    try {
      let response;

      if (isUpload) {
        const form = new FormData();
        fields.forEach((field) => {
          if (values[field.name]) form.append(field.name, values[field.name]);
        });
        response = await fetch(endpoint.path, { method: "POST", body: form });
      } else {
        const query = new URLSearchParams();
        fields.forEach((field) => {
          if (values[field.name]) query.set(field.name, values[field.name]);
        });
        response = await fetch(`${endpoint.path}?${query.toString()}`);
      }

      const contentType = response.headers.get("content-type") || "";

      if (contentType.startsWith("image/")) {
        const blob = await response.blob();
        setResultIsImage(true);
        setResult(URL.createObjectURL(blob));
      } else {
        const json = await response.json();
        setResult(JSON.stringify(json, null, 2));
        if (!response.ok) setErrorText(json.message || "Permintaan gagal");
      }
    } catch (error) {
      setErrorText(error.message || "Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-cyan-900/5 bg-cyan-50/40 p-5">
      <p className="font-display text-sm font-semibold text-ink">Coba langsung</p>

      <div className="mt-3 space-y-3">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="mb-1 flex items-center gap-1.5 font-mono text-[11px] text-ink/50">
              {field.name}
              {field.required && <span className="text-flame-500">*</span>}
            </span>
            {field.type === "file" ? (
              <input
                type="file"
                onChange={(event) => updateValue(field.name, event.target.files?.[0] || null)}
                className="block w-full rounded-xl border border-cyan-900/10 bg-white px-3 py-2 text-sm text-ink file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-100 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-cyan-700"
              />
            ) : (
              <input
                type="text"
                value={values[field.name]}
                placeholder={field.example}
                onChange={(event) => updateValue(field.name, event.target.value)}
                className="w-full rounded-xl border border-cyan-900/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-cyan-400"
              />
            )}
          </label>
        ))}

        <button
          type="button"
          onClick={runRequest}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <IconPlay size={15} />
          {loading ? "Memproses..." : "Kirim permintaan"}
        </button>
      </div>

      {(result || errorText) && (
        <div className="mt-4">
          {resultIsImage ? (
            <div className="overflow-hidden rounded-2xl bg-ink p-3 shadow-clay">
              <img src={result} alt="Hasil" className="mx-auto max-h-72 rounded-lg" />
            </div>
          ) : (
            <CodeBlock code={result || errorText} language="response" />
          )}
        </div>
      )}
    </div>
  );
}
