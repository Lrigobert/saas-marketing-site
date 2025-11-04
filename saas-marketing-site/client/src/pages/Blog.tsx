import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const articles = [
    {
      title: "10 conseils pour optimiser votre gestion de projet",
      excerpt: "Decouvrez les meilleures pratiques pour ameliorer la productivite de votre equipe.",
      date: "15 Nov 2024",
      category: "Productivite"
    },
    {
      title: "La collaboration a distance : defis et solutions",
      excerpt: "Comment maintenir une equipe engagee et productive en travail distribue.",
      date: "12 Nov 2024",
      category: "Collaboration"
    },
    {
      title: "Securite des donnees : ce que vous devez savoir",
      excerpt: "Guide complet sur la protection de vos donnees sensibles en ligne.",
      date: "10 Nov 2024",
      category: "Securite"
    },
    {
      title: "Automatisation : gagner du temps sur les taches repetitives",
      excerpt: "Comment utiliser l'automatisation pour liberer du temps pour l'essentiel.",
      date: "8 Nov 2024",
      category: "Automatisation"
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
            <Link href="/testimonials" className="text-forest hover:text-accent transition">Temoignages</Link>
            <Link href="/blog" className="text-forest hover:text-accent transition font-bold">Blog</Link>
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
            <h1 className="text-4xl font-bold text-forest mb-4">Notre Blog</h1>
            <p className="text-lg text-sage">Conseils, actualites et tendances du monde du project management</p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, i) => (
                <article key={i} className="p-6 rounded-lg border border-forest/10 hover:shadow-forest transition">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">{article.category}</span>
                    <div className="flex items-center gap-2 text-sage text-sm">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-forest mb-3">{article.title}</h3>
                  <p className="text-sage mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">Lire l'article</Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-muted">
          <div className="container max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-forest mb-4">Recevez nos articles</h2>
              <p className="text-sage">Abonnez-vous a notre newsletter pour ne rien manquer</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-forest/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90">S'abonner</Button>
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
