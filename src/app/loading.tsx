import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
      <Loader2 className="h-10 w-10 animate-spin text-green-600" />
      <p className="text-slate-500 font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
