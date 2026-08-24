import * as React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export interface MainTemplateProps {
  children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
