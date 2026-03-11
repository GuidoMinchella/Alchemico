import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const BrandStory = () => {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section id="brand-story" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* First block */}
        <div ref={ref1} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 transition-all duration-1000 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden rounded-sm">
            <img
              src="/bancone.jpg"
              alt="Alchemico culinary craftsmanship"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">La nostra filosofia</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              L’arte dell’<br />alchimia culinaria
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              In Alchemico crediamo nel potere trasformativo della cucina. Tasformiamo i migliori ingredienti italiani in esperienze gastronomiche straordinarie.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ogni piatto è un esperimento creativo — radicato nella tradizione romana e reinterpretato con uno stile contemporaneo. La nostra pinsa, realizzata con un impasto a fermentazione 72 ore, è la nostra tela d’autore per l’espressione culinaria.
            </p>
          </div>
        </div>

        {/* Second block */}
        <div ref={ref2} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="order-2 md:order-1">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">I nostri ingredienti</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Solo la<br />migliore selezione
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              La qualità non è un compromesso. È il fondamento di ogni creazione che esce dalla nostra cucina.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-sm">
            <img
              src="/ingredienti.jpg"
              alt="Premium Italian ingredients"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
