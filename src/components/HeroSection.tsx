import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/homesfondo.jpg"
          alt="Alchemico restaurant interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Pinseria Creativa & Cucina
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          ALCHEMICO
        </h1>
        <p className="font-display text-xl md:text-2xl text-foreground/80 italic mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Pinsa romana creativa & cucina contemporanea
        </p>
        <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Dove la tradizione incontra l’innovazione — trasformiamo ingredienti eccellenti in esperienze gastronomiche straordinarie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Link to="/menu">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase font-body rounded-none">
              Ordina online
            </Button>
          </Link>
          <a href="#menu-preview">
            <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 px-10 py-6 text-sm tracking-widest uppercase font-body rounded-none">
              Vedi il menu
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
