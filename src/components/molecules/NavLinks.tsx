import Link from "next/link"

const links = [
  { name: "Design System", href: "#" },
  { name: "Atoms", href: "#" },
  { name: "Molecules", href: "#" },
  { name: "Organisms", href: "#" },
  { name: "Templates", href: "#" },
  { name: "Pages", href: "#" },
]

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-3 md:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-md hover:bg-slate-100 rounded-xl py-2 px-4 font-medium text-slate-800 transition-colors hover:text-slate-900"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
