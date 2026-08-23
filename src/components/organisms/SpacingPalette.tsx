import { SpacingRow } from "@/components/molecules/SpacingRow";
import { spacingData } from "@/constants/spacing";

export function SpacingPalette() {
  return (
    <section className="mx-auto w-full max-w-7xl px-8 py-8 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-slate-900">
          Spacing Scale (8px base)
        </h3>
        <div className="flex flex-col gap-6 mt-2">
          {spacingData.map((item) => (
            <SpacingRow key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
