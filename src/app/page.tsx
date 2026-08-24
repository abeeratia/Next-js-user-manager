import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { ColorPalette } from "@/components/organisms/ColorPalette";
import { TypographyPalette } from "@/components/organisms/TypographyPalette";
import { SpacingPalette } from "@/components/organisms/SpacingPalette";
import { AtomsPalette } from "@/components/organisms/AtomsPalette";
import { MoleculesPalette } from "@/components/organisms/MoleculesPalette";

import { OrganismsPalette } from "@/components/organisms/OrganismsPalette";
import { ComponentFeaturesPalette } from "@/components/organisms/ComponentFeaturesPalette";
import { CustomSelectPalette } from "@/components/organisms/CustomSelectPalette";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ColorPalette />
        <TypographyPalette />
        <SpacingPalette />
        <AtomsPalette />
        <MoleculesPalette />
        <OrganismsPalette />
        <CustomSelectPalette />
        <ComponentFeaturesPalette />
      </main>
    </div>
  );
}
