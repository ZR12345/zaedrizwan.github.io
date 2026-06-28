import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400">
        <a href="mailto:zaedrizwan002@gmail.com" aria-label="Email" className="hover:text-gray-900 dark:hover:text-gray-100">
          <FaEnvelope size={20} />
        </a>
        <a href="https://github.com/ZR12345" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-gray-100">
          <FaGithub size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-gray-100">
          <FaLinkedin size={20} />
        </a>
      </div>
      <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">
        © 2026 Zaed Rizwan
      </p>
    </footer>
  );
}