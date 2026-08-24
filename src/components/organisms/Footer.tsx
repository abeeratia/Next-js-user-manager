import * as React from "react";
import { Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full pb-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-2">
        <div className="bg-[#1e293b] flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-0 px-6 py-8 md:px-8">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">
                User Manager
              </span>
            </div>
            <p className="mt-3 text-sm text-[#94a3b8]">
              A complete Users Management System Design
            </p>
          </div>

          <div className="flex flex-col text-left md:text-right">
            <p className="text-sm text-[#94a3b8]">
              &copy; 2024 User Manager. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-[#94a3b8]">
              Built with Atomic Design Principles &amp; TailwindCSS
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
