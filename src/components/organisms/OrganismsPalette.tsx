"use client";

import * as React from "react"
import { useQuery } from "@tanstack/react-query"
import { Stepper } from "./Stepper"
import { DataTable } from "./DataTable"
import { Pagination } from "@/components/molecules/Pagination"
import { STEPS } from "@/types/constants"

export function OrganismsPalette() {
  const { data: currentStep } = useQuery({
    queryKey: ["currentStep"],
    initialData: 1,
  })

  return (
    <section className="mb-12 pb-12 px-4 sm:px-4 lg:px-5">
      <div className="mx-auto max-w-7xl pt-18 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <h3 className="mb-8 text-3xl font-bold text-slate-900">Organisms</h3>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6 text-slate-900">Multi-step Progress Bar</h4>
          <Stepper steps={STEPS} currentStep={currentStep as number} />
        </div>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6 text-slate-900">Table</h4>
          <DataTable />
        </div>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6 text-slate-900">Pagination</h4>
          <Pagination
            currentPage={1}
            totalPages={5}
            totalResults={50}
            resultsPerPage={10}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
