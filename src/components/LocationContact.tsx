import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationContact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Vieni a trovarci</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">Dove siamo & orari</h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Map placeholder */}
          <div className="bg-card border border-border rounded-sm h-[400px] flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-xl text-foreground mb-2">Ci trovi a Roma</p>
              <p className="font-body text-muted-foreground text-sm">Via Fiamma Calpurnio 83</p>
              <p className="font-body text-muted-foreground text-sm">00175 Roma, Italia</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Indirizzo</h3>
                <p className="font-body text-muted-foreground">Via Fiamma Calpurnio 83<br />00175 Roma, Italia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Prenotazioni</h3>
                <p className="font-body text-muted-foreground">+39 351 221 4750</p>
                <p className="font-body text-muted-foreground text-sm">info@alchemico.it</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Orari di apertura</h3>
                <p className="font-body text-muted-foreground">Mar – Dom: 18:30 – 23:45</p>
                <p className="font-body text-muted-foreground text-sm">Lunedì: Chiuso</p>
              </div>
            </div>

            <a href="tel:+393512214750">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase font-body w-full md:w-auto">
                Prenota un tavolo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
