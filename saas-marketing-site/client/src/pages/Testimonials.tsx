import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "CEO, TechStart",
      content: "EcoFlow a transforme notre facon de travailler. Nos equipes sont plus productives que jamais.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Jean Martin",
      role: "Project Manager, Design Co",
      content: "Interface intuitive et support excellent. Je recommande EcoFlow a tous mes collegues.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Sophie Bernard",
      role: "Founder, Creative Agency",
      content: "Les fonctionnalites collaboratives sont exceptionnelles. Nos clients adorent aussi.",
      rating: 5,
      image: "👩‍🎨"
    },
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
            <Link href="/portfolio" className="text-forest hover:text-accent transition">Portfolio</Link>
            <Link href="/testimonials" className="text-forest hover:text-accent transition font-bold">Temoignages</Link>
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
            <h1 className="text-4xl font-bold text-forest mb-4">Ce que disent nos clients</h1>
            <p className="text-lg text-sage">Des temoignages authentiques de nos utilisateurs satisfaits</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="p-8 rounded-lg border border-forest/10 hover:shadow-forest transition bg-white">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sage mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-bold text-forest">{testimonial.name}</p>
                      <p className="text-sm text-sage">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">5000+</p>
                <p className="text-forest">Utilisateurs actifs</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">98%</p>
                <p className="text-forest">Satisfaction client</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-forest">Entreprises partenaires</p>
              </div>
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
