import MethodBadge from "./MethodBadge";
import CodeBlock from "./CodeBlock";
import Tester from "./Tester";
import { SITE } from "@/lib/apiCatalog";

function buildCurl(endpoint) {
  const fullUrl = `${SITE.baseUrl}${endpoint.path}`;

  if (endpoint.method === "POST") {
    const fieldName = endpoint.body?.[0]?.name || "file";
    const fileName = endpoint.body?.[0]?.example || "file";
    return `curl -X POST "${fullUrl}" \\\n  -F "${fieldName}=@${fileName}"`;
  }

  const query = (endpoint.params || [])
    .map((field) => `${field.name}=${encodeURIComponent(field.example)}`)
    .join("&");

  return `curl "${fullUrl}?${query}"`;
}

function buildSampleResponse(endpoint) {
  if (endpoint.responseType === "image") {
    return "// Endpoint ini mengembalikan berkas gambar (image/png) secara langsung,\n// bukan JSON.";
  }

  return JSON.stringify(
    {
      status: 200,
      success: true,
      creator: "RAFZ API",
      result: endpoint.sampleResult
    },
    null,
    2
  );
}

export default function EndpointDoc({ endpoint }) {
  const fields = endpoint.params || endpoint.body || [];

  return (
    <div id={`${endpoint.category}-${endpoint.slug}`} className="scroll-mt-28 rounded-3xl border border-cyan-900/5 bg-white p-6 shadow-clay-sm sm:p-7">
      <div className="flex flex-wrap items-center gap-2.5">
        <MethodBadge method={endpoint.method} />
        <code className="font-mono text-sm text-ink/70">{endpoint.path}</code>
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-ink">{endpoint.name}</h3>
      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink/55">{endpoint.description}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {fields.length > 0 && (
            <div>
              <p className="font-display text-sm font-semibold text-ink">
                {endpoint.method === "POST" ? "Form Data" : "Parameter"}
              </p>
              <div className="mt-2 overflow-hidden rounded-xl border border-cyan-900/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-cyan-50/70 text-xs uppercase tracking-wide text-ink/45">
                    <tr>
                      <th className="px-3 py-2 font-medium">Nama</th>
                      <th className="px-3 py-2 font-medium">Tipe</th>
                      <th className="px-3 py-2 font-medium">Wajib</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cyan-900/5">
                    {fields.map((field) => (
                      <tr key={field.name}>
                        <td className="px-3 py-2 font-mono text-[13px] text-ink">{field.name}</td>
                        <td className="px-3 py-2 text-ink/60">{field.type}</td>
                        <td className="px-3 py-2">
                          {field.required ? (
                            <span className="text-flame-600">Ya</span>
                          ) : (
                            <span className="text-ink/40">Opsional</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <p className="font-display text-sm font-semibold text-ink">Contoh Permintaan</p>
            <div className="mt-2">
              <CodeBlock code={buildCurl(endpoint)} language="bash" />
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink">Contoh Respons</p>
            <div className="mt-2">
              <CodeBlock code={buildSampleResponse(endpoint)} language="json" />
            </div>
          </div>
        </div>

        <Tester endpoint={endpoint} />
      </div>
    </div>
  );
}
