import * as React from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadFieldProps {
  label?: string;
  error?: string;
  onChange?: (file: File | null) => void;
  className?: string;
}

export function FileUploadField({ label, error, onChange, className }: FileUploadFieldProps) {
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange?.(file);
    } else {
      setFileName(null);
      onChange?.(null);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="mb-2 block text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white p-8 transition-colors hover:bg-slate-50",
          error ? "border-destructive" : ""
        )}
      >
        <input
          type="file"
          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
        <div className="flex h-12 w-12 items-center justify-center text-slate-400 mb-4">
          <Upload className="h-8 w-8" />
        </div>
        <div className="mb-4 text-center text-sm text-slate-600">
          Drag & drop your avatar here or
        </div>
        <button
          type="button"
          className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 mb-2"
        >
          {fileName ? fileName : "Browse Files"}
        </button>
        <div className="text-xs text-slate-500">PNG, JPG up to 5MB</div>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
