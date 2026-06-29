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
      <div className="max-w-5xl mx-auto flex gap-3 pl-16">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}