export function FieldPretty({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <label className="block text-[13px]">
      {label}
      <input
        type={type}
        className="
          mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-[14px]
          shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]
          focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-300
          dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100
        "
      />
    </label>
  );
}
