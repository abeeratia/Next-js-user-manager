"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setPage } from "@/store/slices/paginationSlice"
import { Stepper } from "./Stepper"
import { DataTable } from "./DataTable"
import { Pagination } from "@/components/molecules/Pagination"
import { STEPS } from "@/types/constants"

export function OrganismsPalette() {
  const currentStep = useAppSelector((state) => state.stepper.currentStep)
  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const dispatch = useAppDispatch()

  return (
    <section id="organisms" className="mb-12 pb-12 px-4 sm:px-4 lg:px-5">
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
            currentPage={currentPage}
            totalPages={5}
            totalResults={50}
            resultsPerPage={10}
            onPageChange={(page) => dispatch(setPage(page))}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
