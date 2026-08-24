import * as React from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/atoms/Input"
import { Checkbox } from "@/components/atoms/Checkbox"
import { Label } from "@/components/atoms/Label"
import Link from "next/link";

export function PagesPalette() {
  return (
    <section id="pages" className="mb-12 pt-18 pb-12">
      <div className="pt-18 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <h3 className="mb-8 text-3xl font-bold text-slate-900">Pages</h3>

        {/* Success Modal Section */}
        <div className="mb-8 rounded-xl border border-green-100 bg-[#f4fcf7] p-4 sm:p-6 shadow-sm">
          <h4 className="mb-6 text-lg font-bold text-slate-900">
            Success Modal
          </h4>
          <div className="flex justify-center p-4 sm:p-8">
            <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
              <h5 className="mb-2 text-xl font-bold text-slate-900">
                User Added Successfully!
              </h5>
              <p className="mb-8 text-sm text-slate-500 leading-relaxed">
                The user has been added to the system. You can now view their
                profile or continue adding more users.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button variant="outline" className="w-full sm:w-auto px-6 border-slate-200">
                  Close
                </Button>
                <Link href="/users" passHref className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-6 bg-green-700 hover:bg-green-800 text-white">
                    View Users
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Component Examples Section */}
        <div className="rounded-xl border border-green-100 bg-[#f4fcf7] p-4 sm:p-6 shadow-sm">
          <h4 className="mb-6 text-lg font-bold text-slate-900">
            Component Examples
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example Card */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h5 className="font-bold text-slate-900">Example Card</h5>
                <div className="h-4 w-4 rounded-full bg-green-700"></div>
              </div>

              <div className="mb-6 rounded-lg border border-slate-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">
                    Sample Card
                  </span>
                  <span className="text-xs text-slate-500">Example</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This shows how components look with a white background.
                </p>
              </div>

              <Button className="mb-4 bg-green-700 hover:bg-green-800 text-white">
                Primary Button
              </Button>
              <Input placeholder="Input field" className="w-full bg-white" />
            </div>

            {/* Form Example */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h5 className="font-bold text-slate-900">Form Example</h5>
                <div className="h-4 w-4 rounded-full bg-green-700"></div>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block text-xs font-semibold text-slate-900">
                  Email Address
                </Label>
                <Input
                  placeholder="user@example.com"
                  className="w-full bg-white"
                />
              </div>

              <div className="mb-6">
                <Label className="mb-2 block text-xs font-semibold text-slate-900">
                  Password
                </Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white"
                />
              </div>

              <div className="mb-6 flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label
                  htmlFor="remember-me"
                  className="text-xs text-slate-600 font-normal cursor-pointer"
                >
                  Remember me
                </Label>
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
