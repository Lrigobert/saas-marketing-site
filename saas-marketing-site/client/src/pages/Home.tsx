import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Zap, MessageSquare, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
            <Link href="/testimonials" className="text-forest hover:text-accent transition">Temoignages</Link>
            <Link href="/blog" className="text-forest hover:text-accent transition">Blog</Link>
            <Link href="/contact" className="text-forest hover:text-accent transition">Contact</Link>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Demarrer</Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-forest text-white py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Transformez votre gestion de projet</h1>
                <p className="text-lg mb-8 text-white/90">Une plateforme SaaS complete pour collaborer, planifier et reussir vos projets ensemble.</p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-accent hover:bg-white/90">Essai gratuit</Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">En savoir plus</Button>
                </div>
              </div>
              <div className="animate-slide-in-right hidden md:block">
                <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
                  <div className="space-y-4">
                    <div className="h-3 bg-white/20 rounded w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded"></div>
                    <div className="h-3 bg-white/20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Fonctionnalites puissantes</h2>
              <p className="text-lg text-sage max-w-2xl mx-auto">Tout ce dont vous avez besoin pour gerer vos projets efficacement</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-forest/10 hover:shadow-forest transition">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">Rapide</h3>
                <p className="text-sage">Interface intuitive et performante</p>
              </div>
              <div className="p-8 rounded-lg border border-forest/10 hover:shadow-forest transition">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">Collaboratif</h3>
                <p className="text-sage">Travaillez en equipe en temps reel</p>
              </div>
              <div className="p-8 rounded-lg border border-forest/10 hover:shadow-forest transition">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">Fiable</h3>
                <p className="text-sage">Securite et stabilite garanties</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">Pret a commencer ?</h2>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">Creer un compte gratuit <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">EcoFlow</h4>
              <p className="text-white/70">Votre plateforme de gestion de projet</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produit</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/">Fonctionnalites</Link></li>
                <li><Link href="/">Tarifs</Link></li>
                <li><Link href="/">Securite</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/">A propos</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/">Confidentialite</Link></li>
                <li><Link href="/">Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 EcoFlow. Tous droits reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
