import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Education", href: "/education/" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-center px-6 py-8 text-base">
      <div className="absolute right-6">
        <ThemeToggle />
      </div>
      <div className="max-w-5xl mx-auto flex gap-8 pl-26">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}