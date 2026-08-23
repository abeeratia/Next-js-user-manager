import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
