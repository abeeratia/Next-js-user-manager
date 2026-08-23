import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { ColorPalette } from "@/components/organisms/ColorPalette";
import { TypographyPalette } from "@/components/organisms/TypographyPalette";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ColorPalette />
        <TypographyPalette />
      </main>
    </div>
  );
}
