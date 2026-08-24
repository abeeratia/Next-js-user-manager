"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { userFormSchema, UserFormValues } from "@/schemas/user.schema";
import { apiService } from "@/services/api";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { nextStep, prevStep, resetStep } from "@/store/slices/stepperSlice";
import { Stepper } from "@/components/organisms/Stepper";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { SelectField } from "@/components/molecules/SelectField";
import { MultiSelectField } from "@/components/molecules/MultiSelectField";
import { AsyncComboboxField } from "@/components/molecules/AsyncComboboxField";
import { FileUploadField } from "@/components/molecules/FileUploadField";
import { InfiniteScrollSelectField } from "@/components/molecules/InfiniteScrollSelectField";
import { STEPS, GENDERS, CATEGORIES, INTERESTS } from "@/types/constants";

export function LiveMultiStepForm() {
  const queryClient = useQueryClient();
  const currentStep = useAppSelector((state) => state.stepper.currentStep);
  const dispatch = useAppDispatch();
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      gender: "",
      country: "",
      age: "" as any,
      category: "",
      interests: [],
      avatar: undefined,
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState,
    trigger,
    watch,
    reset,
    getValues,
    setValue,
    setError,
    clearErrors,
    register,
    unregister,
    setFocus,
    resetField,
  } = form;

  const {
    errors,
    isValid,
    isDirty,
    dirtyFields,
    touchedFields,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    submitCount,
    isValidating,
    isLoading: isFormLoading,
    disabled,
  } = formState;

  const formValues = watch();

  const {
    data: mutationData,
    error: mutationError,
    isError: isMutationError,
    isIdle: isMutationIdle,
    isPending: isMutationPending,
    isSuccess: isMutationSuccess,
    status: mutationStatus,
    mutate,
    mutateAsync,
    reset: resetMutation,
    variables: mutationVariables,
  } = useMutation({
    mutationFn: async (data: UserFormValues) => {
      return await apiService.createUser(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setShowSuccessModal(true);
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["fullName", "email", "gender", "country", "age"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["category", "interests"];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid && currentStep < 3) {
      dispatch(nextStep());
    }
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  const resetForm = () => {
    reset();
    dispatch(resetStep());
    setShowSuccessModal(false);
  };

  if (showSuccessModal) {
    return (
      <div className="flex justify-center p-4 sm:p-8">
        <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 text-center shadow-sm mx-auto">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100/50">
            <CheckCircle2 className="h-8 w-8 text-green-600" strokeWidth={2.5} />
          </div>
          <h5 className="mb-4 text-2xl font-bold text-slate-900">User Added Successfully!</h5>
          <p className="mb-8 text-base text-slate-600 leading-relaxed px-2">
            The user has been added to the system. You can now view their profile or continue adding more users.
          </p>
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-3 sm:gap-4">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-3 text-base font-semibold border-slate-200 text-slate-900 rounded-xl" 
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </Button>
            <Button 
              className="w-full sm:w-auto px-8 py-3 text-base font-semibold bg-green-700 hover:bg-green-800 text-white rounded-xl" 
              onClick={resetForm}
            >
              Add Another User
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-amber-400 text-md font-bold uppercase tracking-wider mb-1">
          Challenge
        </h2>
        <h1 className="text-3xl font-bold text-slate-900">
          Live Multi-Step Form
        </h1>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
          <Stepper steps={STEPS} currentStep={currentStep} />
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Personal Information */}
          <div className={cn(currentStep === 1 ? "block" : "hidden")}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Personal Information
            </h3>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                {...form.register("fullName")}
                placeholder="Maged Yaseen"
                className={cn(
                  errors.fullName
                    ? "border-destructive focus:ring-destructive"
                    : ""
                )}
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.fullName.message}
                </p>
              )}
              {!errors.fullName && (
                <p className="mt-2 text-sm text-slate-500">
                  Must be 2-50 characters
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Email Address <span className="text-destructive">*</span>
              </label>
              <Input
                {...form.register("email")}
                placeholder="maged.yaseen@mwjb.net"
                className={cn(
                  errors.email
                    ? "border-destructive focus:ring-destructive"
                    : ""
                )}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <Controller
                control={control}
                name="gender"
                render={({ field, fieldState }) => (
                  <SelectField
                    id="gender"
                    label={
                      <span className="mb-0 text-sm font-semibold text-slate-900">
                        Gender{" "}
                        <span className="text-sm text-destructive">*</span>
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
            </div>

            <div className="mb-6">
              <Controller
                control={control}
                name="country"
                render={({ field, fieldState }) => (
                  <InfiniteScrollSelectField
                    id="country"
                    label={
                      <span className="  text-sm font-semibold text-slate-900">
                        Country{" "}
                        <span className="text-slate-500 font-normal text-xs ml-1">
                          (Optional)
                        </span>
                      </span>
                    }
                    placeholder="Select country"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Age <span className="text-destructive">*</span>
              </label>
              <Input
                type="number"
                {...form.register("age")}
                placeholder="30"
                className={cn(
                  errors.age ? "border-destructive focus:ring-destructive" : ""
                )}
              />
              {errors.age && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.age.message}
                </p>
              )}
              {!errors.age && (
                <p className="mt-2 text-sm text-slate-500">
                  Must be between 18-100
                </p>
              )}
            </div>
          </div>

          {/* Step 2: Preferences */}
          <div className={cn(currentStep === 2 ? "block" : "hidden")}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Preferences
            </h3>

            <div className="mb-6">
              <Controller
                control={control}
                name="category"
                render={({ field, fieldState }) => (
                  <SelectField
                    id="category"
                    label={
                      <>
                        Category <span className="text-destructive">*</span>
                      </>
                    }
                    placeholder="Select a category"
                    options={CATEGORIES}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="mb-6">
              <Controller
                control={control}
                name="interests"
                render={({ field, fieldState }) => (
                  <>
                    <MultiSelectField
                      id="interests"
                      label={
                        <>
                          Interests <span className="text-destructive">*</span>{" "}
                          <span className="text-slate-500 font-normal text-xs ml-1">
                            (Select up to 5 interests)
                          </span>
                        </>
                      }
                      placeholder="Select interests"
                      searchPlaceholder="Search interests..."
                      options={INTERESTS}
                      selected={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      maxItems={5}
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Selected: {field.value.length} of 10(Max: 5)
                    </p>
                  </>
                )}
              />
            </div>

            <div className="mb-8">
              <Controller
                control={control}
                name="avatar"
                render={({ field }) => (
                  <FileUploadField
                    label="Avatar Upload (Optional)"
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          {/* Step 3: Review */}
          <div className={cn(currentStep === 3 ? "block" : "hidden")}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Review & Submit
            </h3>

            <div className="rounded-xl bg-slate-50 p-6 mb-6">
              <h4 className="font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                User Summary
              </h4>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">Name:</dt>
                  <dd className="text-sm text-slate-900">
                    {formValues.fullName || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">Email:</dt>
                  <dd className="text-sm text-slate-900">
                    {formValues.email || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">
                    Gender:
                  </dt>
                  <dd className="text-sm text-slate-900 capitalize">
                    {formValues.gender || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">
                    Country:
                  </dt>
                  <dd className="text-sm text-slate-900">
                    {formValues.country || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">Age:</dt>
                  <dd className="text-sm text-slate-900">
                    {formValues.age || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-sm font-medium text-slate-500">
                    Category:
                  </dt>
                  <dd className="text-sm text-slate-900">
                    {formValues.category || "-"}
                  </dd>
                </div>
                <div className="flex justify-between py-2 items-center">
                  <dt className="text-sm font-medium text-slate-500">
                    Interests:
                  </dt>
                  <dd className="flex gap-2 flex-wrap justify-end">
                    {formValues.interests && formValues.interests.length > 0
                      ? formValues.interests.map((i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {i}
                          </span>
                        ))
                      : "-"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-green-50 p-4 border border-green-200 flex items-start gap-3 mb-8">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-green-800 mb-1">
                  Ready to submit
                </h4>
                <p className="text-sm text-green-700">
                  Review all information carefully before submitting. You can go
                  back to make changes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between border-t border-slate-100 pt-6 mt-6">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="px-6 flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 && (
              <Button
                key="next-button"
                type="button"
                onClick={handleNext}
                className="px-6 bg-green-700 hover:bg-green-800 flex items-center gap-2 text-white"
              >
                Next Step <ChevronRight className="h-4 w-4" />
              </Button>
            )}
            {currentStep === 3 && (
              <Button
                key="submit-button"
                type="submit"
                disabled={isMutationPending}
                className="px-6 bg-green-700 hover:bg-green-800 flex items-center gap-2 text-white"
              >
                {isMutationPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit <Check className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
