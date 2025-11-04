import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    { title: "Startup Tech", desc: "Gestion de 50+ projets simultanees", image: "📊" },
    { title: "Agence Creative", desc: "Collaboration d'equipe optimisee", image: "🎨" },
    { title: "Entreprise Fortune 500", desc: "Scalabilite et securite garanties", image: "🏢" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-forest shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold text-forest">EcoFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-forest hover:text-accent transition">Accueil</Link>
            <Link href="/portfolio" className="text-forest hover:text-accent transition font-bold">Portfolio</Link>
            <Link href="/testimonials" className="text-forest hover:text-accent transition">Temoignages</Link>
            <Link href="/blog" className="text-forest hover:text-accent transition">Blog</Link>
            <Link href="/contact" className="text-forest hover:text-accent transition">Contact</Link>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Demarrer</Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-12">
          <div className="container">
            <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
              <ArrowLeft className="w-4 h-4" /> Retour
            </Link>
            <h1 className="text-4xl font-bold text-forest mb-4">Notre Portfolio</h1>
            <p className="text-lg text-sage">Decouvrez comment nous aidons les entreprises a reussir</p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-forest/10 hover:shadow-forest transition">
                  <div className="bg-gradient-forest text-white p-12 text-center text-4xl">{project.image}</div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-forest mb-2">{project.title}</h3>
                    <p className="text-sage mb-4">{project.desc}</p>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">Voir le cas</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="container text-center text-white/70">
          <p>&copy; 2024 EcoFlow. Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
}
