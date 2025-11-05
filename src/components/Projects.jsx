import { ExternalLink, Github, Server, Globe } from "lucide-react";

const projects = [
  {
    title: "Realtime Task Board",
    description:
      "Kanban board with websockets, built with Spring Boot, WebFlux, and React.",
    tags: ["Java", "Spring", "WebSocket", "React"],
    links: { github: "https://github.com/", demo: "#" },
    icon: <Server size={18} />,
  },
  {
    title: "E‑commerce API",
    description:
      "Modular microservice API with Spring Cloud, OAuth2, and MongoDB.",
    tags: ["Spring Cloud", "OAuth2", "MongoDB", "Docker"],
    links: { github: "https://github.com/", demo: "#" },
    icon: <Globe size={18} />,
  },
  {
    title: "Portfolio Frontend",
    description:
      "Responsive React + Vite site with Spline integration and framer‑motion.",
    tags: ["React", "Vite", "Spline", "Tailwind"],
    links: { github: "https://github.com/", demo: "#" },
    icon: <Globe size={18} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of things I’ve engineered recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 text-blue-600">
                {p.icon}
                <span className="text-xs font-medium uppercase tracking-wide">{p.tags[0]}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href={p.links.github}
                  className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
