import { Logo } from "@/components/atoms/Logo"
import { Button } from "@/components/atoms/Button"
import { NavLinks } from "@/components/molecules/NavLinks"

export function Header() {
  return (
    <header className="shadow-[0_1px_8px_rgb(0,0,0,0.12)] sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-8">
          <NavLinks />
          <Button variant="buttonLogo">Live Form</Button>
        </div>
      </div>
    </header>
  );
}
