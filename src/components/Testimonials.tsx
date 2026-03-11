import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  { name: 'Marco R.', text: 'La pinsa al tartufo e burrata è semplicemente divina. La migliore esperienza gastronomica a Roma di quest’anno.', rating: 5 },
  { name: 'Sofia L.', text: 'Alchemico ha ridefinito cosa può essere la pinsa. Creativa, deliziosa e con un’atmosfera incredibile.', rating: 5 },
  { name: 'James T.', text: 'Da turista, è stato il momento clou del nostro viaggio. Il cocktail della casa si abbinava perfettamente alla pinsa al prosciutto.', rating: 5 },
  { name: 'Giulia M.', text: 'Finalmente un posto che unisce tradizione e innovazione. L’impasto a 72 ore fa davvero la differenza.', rating: 5 },
  { name: 'Alessandro B.', text: 'Ordinare online è stato semplicissimo. Il cibo è arrivato perfetto — proprio come mangiarlo in sala. Bravo!', rating: 5 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(c => (c + 1) % reviews.length);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonianze</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-16">Dicono di noi</h2>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: reviews[current].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="font-display text-2xl md:text-3xl text-foreground/90 italic mb-8 leading-relaxed min-h-[100px]">
            "{reviews[current].text}"
          </blockquote>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary">
            — {reviews[current].name}
          </p>

          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prev} className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors rounded-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors rounded-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
