import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];

export default function Navbar() {
  return (
    <nav className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-base">
      <div className="flex gap-8">
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
      <ThemeToggle />
    </nav>
  );
}