import { menuItems } from '@/data/menu';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const SignaturePinsa = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { addItem } = useCart();
  const featured = menuItems.filter(i => i.featured);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">La nostra specialità</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">Pinsa d’autore</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Impasto a fermentazione 72 ore, steso a mano e cotto alla perfezione. Più leggera, croccante e digeribile della pizza tradizionale.
          </p>
        </div>

        <div ref={ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {featured.map((item, i) => (
            <div key={item.id} className="group cursor-pointer" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="overflow-hidden rounded-sm mb-6 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button onClick={() => addItem(item)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-xs tracking-widest uppercase font-body w-full">
                    <Plus className="w-4 h-4 mr-2" /> Aggiungi all’ordine — €{item.price.toFixed(2)}
                  </Button>
                </div>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{item.name}</h3>
              <p className="font-body text-muted-foreground text-sm mb-3">{item.description}</p>
              {item.ingredients && (
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map(ing => (
                    <span key={ing} className="text-xs font-body tracking-wider uppercase text-primary/80 border border-primary/20 px-2 py-1 rounded-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignaturePinsa;
