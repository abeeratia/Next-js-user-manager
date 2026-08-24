import { TypographyRow } from "@/components/molecules/TypographyRow";
import { typographyData } from "@/constants/typography";

export function TypographyPalette() {
  return (
    <section className="mx-auto py-8">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-slate-900">
          Typography (Inter)
        </h3>
        <div className="flex flex-col gap-8 mt-2">
          {typographyData.map((item) => (
            <TypographyRow key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
