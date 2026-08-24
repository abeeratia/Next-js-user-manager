import { StepCircle } from "@/components/atoms/StepCircle";
import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";
import {
  Users, UserPlus, Mail, ChevronRight, ChevronLeft, Check, X, Upload,
  Download, Eye, Edit, Trash2, Search, Filter, CheckCircle, Menu,
  XCircle, AlertCircle
} from "lucide-react";

const ICONS = [
  { name: "Users", icon: Users },
  { name: "UserPlus", icon: UserPlus },
  { name: "Mail", icon: Mail },
  { name: "ChevronRight", icon: ChevronRight },
  { name: "ChevronLeft", icon: ChevronLeft },
  { name: "Check", icon: Check },
  { name: "X", icon: X },
  { name: "Upload", icon: Upload },
  { name: "Download", icon: Download },
  { name: "Eye", icon: Eye },
  { name: "Edit", icon: Edit },
  { name: "Trash2", icon: Trash2 },
  { name: "Search", icon: Search },
  { name: "Filter", icon: Filter },
  { name: "CheckCircle", icon: CheckCircle },
  { name: "Menu", icon: Menu },
  { name: "XCircle", icon: XCircle },
  { name: "AlertCircle", icon: AlertCircle },
];

export function AtomsPalette() {
  return (
    <section className=" pt-18 pb-12 px-4 sm:px-4 lg:px-5  ">
      <div className="pt-18 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Atoms</h3>

          <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
            <h4 className="text-2xl font-semibold mb-6 text-slate-900">
              Step Circle Atom
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center ">
                <StepCircle state="default" stepNumber={1} />
                <span className="mt-2 text-md font-medium text-slate-600">
                  Default
                </span>
              </div>

              <div className="flex flex-col items-center ">
                <StepCircle state="active" stepNumber={2} />
                <span className="text-md mt-2 font-medium text-primary-600">
                  Active
                </span>
              </div>

              <div className="flex flex-col items-center ">
                <StepCircle state="completed" />
                <span className="mt-2 text-md font-medium text-slate-600">
                  Completed
                </span>
              </div>

              <div className="flex flex-col items-center ">
                <StepCircle state="default" size="sm" stepNumber={1} />
                <span className="mt-2 text-md font-medium text-slate-600">
                  Small
                </span>
              </div>

              <div className="flex flex-col items-center ">
                <StepCircle state="default" size="lg" stepNumber={1} />
                <span className="mt-2 text-md font-medium text-slate-600">
                  Large
                </span>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4 sm:p-6 lg:p-8">
            <h4 className="mb-6 text-2xl font-semibold text-slate-900">
              Icons
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {ICONS.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex h-[88px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 "
                >
                  <Icon className="text-primary-600" size={24} />
                  <span className="text-md font-medium text-slate-900">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
            <h4 className="text-2xl font-semibold mb-6 ">Buttons</h4>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary" size="xl">
                Primary Button
              </Button>
              <Button variant="secondary" size="lg">
                Secondary Button
              </Button>
              <Button variant="ghost" size="lg">
                Ghost Button
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white/90 hover:bg-white/10"
                icon={UserPlus}
              >
                With Icon
              </Button>
              <Button variant="accent" size="lg">
                Accent Button
              </Button>
              <Button variant="primary" size="lg" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
            <h4 className="text-2xl font-semibold mb-6 text-slate-900">
              Inputs
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" placeholder="Enter text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email-input">Email Input</Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="select-input">Select</Label>
                <Select>
                  <SelectTrigger id="select-input">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="textarea-input">Textarea</Label>
                <Textarea id="textarea-input" placeholder="Enter description" />
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
            <h4 className="text-2xl font-semibold mb-4">Checkbox & Radio</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <Label>Checkbox</Label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Checkbox id="c1" />
                    <label
                      htmlFor="c1"
                      className="text-md text-slate-900 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Unchecked
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="c2" checked={true} />
                    <label
                      htmlFor="c2"
                      className="text-md text-slate-900 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Checked
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="c3" disabled />
                    <label
                      htmlFor="c3"
                      className="text-md text-slate-900 cursor-not-allowed opacity-50"
                    >
                      Disabled
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ">
                <Label>Radio Buttons</Label>
                <RadioGroup defaultValue="r2">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="r1" id="r1" />
                      <label
                        htmlFor="r1"
                        className="text-md text-slate-900 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Option 1
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="r2" id="r2" />
                      <label
                        htmlFor="r2"
                        className="text-md text-slate-900 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                      >
                        Option 2 (Selected)
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="r3" id="r3" disabled />
                      <label
                        htmlFor="r3"
                        className="text-md text-slate-900 cursor-not-allowed opacity-50"
                      >
                        Disabled
                      </label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
