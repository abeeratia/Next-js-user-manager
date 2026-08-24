import * as React from "react";
import { Filter, Globe, Users } from "lucide-react";
import { FeatureCard } from "@/components/molecules/FeatureCard";

export function ComponentFeaturesPalette() {
  return (
    <section id="templates" className="mb-12 px-4 sm:px-4 lg:px-10">
      <div className="rounded-xl border-2 border-slate-100 bg-white p-6 shadow-sm">
        <h4 className="mb-6 text-xl font-bold text-green-800">
          Component Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Multiple Select Types"
            description="Single select, multi-select, and async select with pagination"
            icon={<Users className="h-5 w-5 text-green-600" />}
            iconContainerClassName="bg-green-100"
          />
          <FeatureCard
            title="Data Sources"
            description="Static arrays, frontend search, and backend API calls"
            icon={<Globe className="h-5 w-5 text-green-600" />}
            iconContainerClassName="bg-green-100"
          />
          <FeatureCard
            title="Advanced Features"
            description="Debounced search, infinite scroll, max selection limits"
            icon={<Filter className="h-5 w-5 text-blue-600" />}
            iconContainerClassName="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
}
