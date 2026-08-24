import { MainTemplate } from "@/components/templates/MainTemplate";
import { Hero } from "@/components/organisms/Hero";
import { ColorPalette } from "@/components/organisms/ColorPalette";
import { TypographyPalette } from "@/components/organisms/TypographyPalette";
import { SpacingPalette } from "@/components/organisms/SpacingPalette";
import { AtomsPalette } from "@/components/organisms/AtomsPalette";
import { MoleculesPalette } from "@/components/organisms/MoleculesPalette";

import { OrganismsPalette } from "@/components/organisms/OrganismsPalette";
import { ComponentFeaturesPalette } from "@/components/organisms/ComponentFeaturesPalette";
import { CustomSelectPalette } from "@/components/organisms/CustomSelectPalette";
import { PagesPalette } from "@/components/organisms/PagesPalette";
import { LiveMultiStepForm } from "@/components/organisms/LiveMultiStepForm";

export default function Home() {
  return (
    <MainTemplate>
      <Hero />
      <ColorPalette />
      <TypographyPalette />
      <SpacingPalette />
      <AtomsPalette />
      <MoleculesPalette />
      <OrganismsPalette />
      <CustomSelectPalette />
      <ComponentFeaturesPalette />
      <PagesPalette />
      <section id="live-form" className="mb-12 pt-18 pb-12 px-4 sm:px-6 lg:px-8 w-full">
        <LiveMultiStepForm />
      </section>
    </MainTemplate>
  );
}
