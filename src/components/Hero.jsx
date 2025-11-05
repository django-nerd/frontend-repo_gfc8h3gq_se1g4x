import Spline from "@splinetool/react-spline";
import { ArrowRight, Code2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay for contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 items-center gap-10">
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-black/5 p-6 shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            <Rocket size={14} />
            Modern • Interactive • Playful
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Full‑Stack Java Developer
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I craft robust Java backends and delightful React frontends. I love building scalable APIs,
            real‑time features, and cloud‑ready systems with clean code and great UX.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md shadow-sm transition"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition"
            >
              <Code2 size={18} /> Hire Me
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-gray-600">
            <li className="px-3 py-1 rounded-full bg-gray-100">Java • Spring Boot</li>
            <li className="px-3 py-1 rounded-full bg-gray-100">REST • GraphQL</li>
            <li className="px-3 py-1 rounded-full bg-gray-100">React • TypeScript</li>
            <li className="px-3 py-1 rounded-full bg-gray-100">Docker • CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
