const navLinks = [
  { label: "about", href: "#about" },
  { label: "research", href: "#research" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "achievements", href: "#achievements" },
  { label: "news", href: "#news" },
];
export default function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto px-6 py-6 flex gap-5 text-sm">
      {navLinks.map((link) => (
        
          key={link.href}
          href={link.href}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}