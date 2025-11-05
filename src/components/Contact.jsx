import { Mail, Send, User, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Let’s build something</h2>
          <p className="mt-2 text-gray-600">I’m available for full‑time roles or select freelance projects.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! I will get back to you shortly.");
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 border border-gray-200">
                  <User size={18} className="text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-transparent outline-none text-sm"
                    required
                  />
                </label>
                <label className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 border border-gray-200">
                  <Mail size={18} className="text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-transparent outline-none text-sm"
                    required
                  />
                </label>
              </div>
              <label className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 border border-gray-200">
                <Phone size={18} className="text-gray-500" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or role..."
                className="w-full min-h-[120px] px-3 py-2 rounded-md bg-gray-50 border border-gray-200 outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md shadow-sm transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-blue-50 to-purple-50 p-6">
            <h3 className="font-semibold text-gray-900">What I work with</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">Java, Spring Boot</li>
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">REST, GraphQL</li>
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">PostgreSQL, MongoDB</li>
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">Docker, Kubernetes</li>
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">AWS, CI/CD</li>
              <li className="px-3 py-2 bg-white rounded-md border border-gray-200">React, TypeScript</li>
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Based in Bangalore • Open to remote
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
