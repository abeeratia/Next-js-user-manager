import Link from "next/link"
import { cn } from "@/lib/utils"

const links = [
  { name: "Design System", href: "#design-system" },
  { name: "Atoms", href: "#atoms" },
  { name: "Molecules", href: "#molecules" },
  { name: "Organisms", href: "#organisms" },
  { name: "Templates", href: "#templates" },
  { name: "Pages", href: "#pages" },
]

export function NavLinks({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <nav className={cn("hidden items-center gap-3 md:flex", className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-md hover:bg-slate-100 rounded-xl py-2 px-4 font-medium text-slate-800 transition-colors hover:text-slate-900"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
