import { ColorSwatch } from "@/components/molecules/ColorSwatch";
import {
  primaryColors,
  secondaryColors,
  accentColors,
  neutralColors,
} from "@/constants/colors";

export function ColorPalette() {
  return (
    <section id="design-system" className="mx-auto w-full max-w-7xl px-8 py-16 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Design System</h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-900">Colors</h3>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-primary-500" />
                <span className="text-lg font-medium text-slate-900">
                  Primary Colors (Green)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                {primaryColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    hex={color.hex}
                    label={color.label}
                    colorClassName={color.className}
                    lightText={color.lightText}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium text-slate-900">
                Secondary Colors (Purple/Blue)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {secondaryColors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                  label={color.label}
                  colorClassName={color.className}
                  lightText={(color as any).lightText}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-accent2-500 mr-2" />
              <span className="text-lg font-medium text-slate-900">
                Accent Colors (Orange)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {accentColors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                  label={color.label}
                  colorClassName={color.className}
                  lightText={(color as any).lightText}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-slate-500" />
              <span className="text-lg font-medium text-slate-900">
                Neutral Colors (Slate)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {neutralColors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                  label={color.label}
                  colorClassName={color.className}
                  lightText={(color as any).lightText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
