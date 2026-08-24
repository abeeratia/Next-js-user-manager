import { InputField } from "@/components/molecules/InputField";
import { CheckboxGroup } from "@/components/molecules/CheckboxGroup";
import { RadioGroupField } from "@/components/molecules/RadioGroupField";
import { Button } from "@/components/atoms/Button";
import { Mail, UserPlus, Download, Check } from "lucide-react";

export function MoleculesPalette() {
  const checkboxOptions = [
    { id: "tech", label: "Technology" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
    { id: "other", label: "Other" },
  ];

  const radioOptions = [
    { id: "male", value: "male", label: "Male" },
    { id: "female", value: "female", label: "Female" },
  ];

  return (
    <section id="molecules" className="mb-12 pb-12 px-4 sm:px-4 lg:px-5">
      <div className="mx-auto max-w-7xl pt-18 pb-12 px-4 sm:px-6 lg:px-8 ">
        <h3 className="mb-8 text-3xl font-bold text-slate-900">Molecules</h3>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6">
            Input Field with Label & Error
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              id="email"
              label="Email Address"
              placeholder="you@example.com"
              icon={<Mail className="h-5 w-5" />}
              helperText="We'll never share your email."
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              placeholder="••••••••"
              error="Password must be at least 8 characters."
            />
          </div>
        </div>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6">Checkbox Group</h4>
          <CheckboxGroup
            label="Select your interests"
            options={checkboxOptions}
          />
        </div>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6">Radio Group</h4>
          <RadioGroupField label="Select your gender" options={radioOptions} />
        </div>

        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <h4 className="text-2xl font-semibold mb-6">Button with Icon</h4>
          <div className="flex flex-wrap items-center gap-4">
            <Button icon={UserPlus} variant="primary" size="lg">
              Add New
            </Button>
            <Button
              icon={Download}
              variant="outline"
              size="lg"
              className="text-slate-800"
            >
              Download
            </Button>
            <Button
              icon={Check}
              size="lg"
              className="bg-primary-500 text-white hover:bg-primary-600"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
