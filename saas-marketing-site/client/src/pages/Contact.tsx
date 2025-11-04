import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous repondrons bientot.");
    setFormData({ name: "", email: "", message: "" });
  };

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
            <Link href="/contact" className="text-forest hover:text-accent transition font-bold">Contact</Link>
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
            <h1 className="text-4xl font-bold text-forest mb-4">Nous contacter</h1>
            <p className="text-lg text-sage">Vous avez des questions ? Nous sommes la pour vous aider</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-forest mb-8">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest mb-1">Email</h3>
                      <p className="text-sage">contact@ecoflow.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest mb-1">Telephone</h3>
                      <p className="text-sage">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest mb-1">Adresse</h3>
                      <p className="text-sage">123 Rue de la Paix<br/>75000 Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-forest mb-8">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Nom</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-forest/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-forest/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-forest/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">Envoyer le message</Button>
                </form>
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
