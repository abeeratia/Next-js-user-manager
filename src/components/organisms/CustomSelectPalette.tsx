"use client"

import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Filter, Globe, User, Tag, Users } from "lucide-react"

import { SelectField } from "@/components/molecules/SelectField"
import { MultiSelectField } from "@/components/molecules/MultiSelectField"
import { ComboboxField } from "@/components/molecules/ComboboxField"
import { AsyncComboboxField } from "@/components/molecules/AsyncComboboxField"
import { InfiniteScrollSelectField } from "@/components/molecules/InfiniteScrollSelectField"
import { FeatureCard } from "@/components/molecules/FeatureCard"
import { GENDERS, INTERESTS, CATEGORIES, TAGS } from "@/constants/select"
import { selectFormSchema, SelectFormValues } from "@/schemas/select.schema"

export function CustomSelectPalette() {
  const form = useForm<SelectFormValues>({
    resolver: zodResolver(selectFormSchema),
    defaultValues: {
      gender: "",
      interests: [],
      category: "",
      country: "",
      assignee: "",
      tags: [],
    },
    mode: "onChange",
  })

  React.useEffect(() => {
    // Trigger validation for gender immediately so it starts with a red border and error message
    form.trigger("gender")
  }, [form])

  // Watch values to display "Selected: ..." below inputs as in the design
  const formValues = form.watch()

  return (
    <section className="mb-12 px-4 sm:px-4 lg:px-10 ">
      <div className="mx-auto border-2 rounded-xl border-slate-200 max-w-7xl pt-18 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <h3 className="mb-8 text-3xl font-bold text-slate-900">
          Custom Select Components
        </h3>

        <div className="rounded-xl border border-primary-300 bg-white p-6 shadow-sm">
          <div className="mb-8 flex items-center gap-2 text-green-700">
            <Filter className="h-5 w-5" />
            <h4 className="text-xl font-bold">Select Component Examples</h4>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gender */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="gender"
                render={({ field, fieldState }) => (
                  <SelectField
                    id="gender-select"
                    label={
                      <span>
                        Gender <span className="text-destructive">*</span>{" "}
                        <span className="text-slate-400 font-normal text-sm ml-1">
                          (Static List)
                        </span>
                      </span>
                    }
                    placeholder="Select gender"
                    options={GENDERS}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <span className="text-xs text-slate-500 mt-1">
                Selected:{" "}
                {formValues.gender
                  ? GENDERS.find((g) => g.value === formValues.gender)?.label
                  : "None"}
              </span>
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="country"
                render={({ field, fieldState }) => (
                  <InfiniteScrollSelectField
                    id="country-select"
                    label={
                      <span className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-slate-700" />
                        Country{" "}
                        <span className="text-slate-400 font-normal text-sm ml-2">
                          (Async API with Pagination)
                        </span>
                      </span>
                    }
                    placeholder="Search countries..."
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <span className="text-xs text-slate-500 mt-1">
                Scroll to load more countries
              </span>
            </div>

            {/* Interests */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="interests"
                render={({ field, fieldState }) => (
                  <MultiSelectField
                    id="interests-select"
                    label={
                      <span>
                        Interests{" "}
                        <span className="text-slate-400 font-normal text-sm ml-1">
                          (Multi-select with max 3)
                        </span>
                      </span>
                    }
                    placeholder="Select interests..."
                    options={INTERESTS}
                    selected={field.value}
                    onChange={field.onChange}
                    maxItems={3}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <span className="text-xs text-slate-500 mt-1">
                Selected: {formValues.interests.length} of {INTERESTS.length}
              </span>
            </div>

            {/* Assign to User */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="assignee"
                render={({ field, fieldState }) => (
                  <AsyncComboboxField
                    id="assignee-select"
                    label={
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-slate-700" />
                        Assign to User{" "}
                        <span className="text-slate-400 font-normal text-sm ml-2">
                          (Async with Email Search)
                        </span>
                      </span>
                    }
                    placeholder="Search users by name or email..."
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <span className="text-xs text-slate-500 mt-1">
                Selected: {formValues.assignee || "None"}
              </span>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="category"
                render={({ field, fieldState }) => (
                  <ComboboxField
                    id="category-select"
                    label={
                      <span>
                        Category{" "}
                        <span className="text-slate-400 font-normal text-sm ml-1">
                          (Frontend Search)
                        </span>
                      </span>
                    }
                    placeholder="Search category..."
                    options={CATEGORIES}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-1">
              <Controller
                control={form.control}
                name="tags"
                render={({ field, fieldState }) => (
                  <MultiSelectField
                    id="tags-select"
                    label={
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-slate-700" />
                        Tags{" "}
                        <span className="text-slate-400 font-normal text-sm ml-2">
                          (Multi-select with Search)
                        </span>
                      </span>
                    }
                    placeholder="Select tags"
                    searchPlaceholder="Search tags..."
                    options={TAGS}
                    selected={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </form>
        </div>

        {/* Usage in Form Example */}
        <div className="mt-8 rounded-xl bg-slate-50 p-6 border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-6">
            Usage in Form Example
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Controller
              control={form.control}
              name="gender"
              render={({ field }) => (
                <SelectField
                  id="form-gender"
                  label="Gender"
                  placeholder="Select gender"
                  options={GENDERS}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              control={form.control}
              name="country"
              render={({ field }) => (
                <InfiniteScrollSelectField
                  id="form-country"
                  label="Country"
                  placeholder="Select country"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
