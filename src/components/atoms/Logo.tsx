import { Users } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex rounded-xl h-8 w-8 items-center justify-center bg-primary-700">
        <Users className="h-5 w-5 text-white" />
      </div>
      <span className="text-lg font-semibold text-slate-900">User Manager</span>
    </div>
  );
}
