import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">{ "<" }</span>
          Abhishek • Full‑Stack Java
          <span className="text-blue-600">{ "/>" }</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            <Mail size={18} /> Contact
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
