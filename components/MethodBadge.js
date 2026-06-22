const STYLES = {
  GET: "bg-cyan-50 text-cyan-700",
  POST: "bg-flame-50 text-flame-600"
};

export default function MethodBadge({ method }) {
  return (
    <span className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide ${STYLES[method] || "bg-ink/5 text-ink/60"}`}>
      {method}
    </span>
  );
}
