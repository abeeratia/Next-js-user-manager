import * as React from "react";
import { Header } from "@/components/organisms/Header";
import { UsersTable } from "@/components/organisms/UsersTable";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { ArrowLeft } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Users</h1>
              <p className="mt-2 text-sm text-slate-500">
                A list of all users in your account including their name, email, and preferences.
              </p>
            </div>
            <Link href="/" passHref>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
          
          <UsersTable />
        </div>
      </main>
    </div>
  );
}
