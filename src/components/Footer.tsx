import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-2">ALCHEMICO</h3>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Pinseria Creativa & Cucina</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Dove l’alchimia culinaria trasforma ingredienti eccellenti in esperienze straordinarie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-foreground mb-4">Naviga</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/menu" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">Menù completo</Link>
              <a href="#brand-story" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">La nostra storia</a>
              <a href="#contact" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">Contatti</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-foreground mb-4">Seguici</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors rounded-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors rounded-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} Alchemico — Pinseria Creativa & Cucina. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
