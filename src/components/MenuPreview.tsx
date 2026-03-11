import { useState } from 'react';
import { menuItems, categoryLabels, MenuCategory } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const categories: MenuCategory[] = ['pinsa', 'antipasti', 'cucina', 'dolci', 'bevande'];

const MenuPreview = () => {
  const [active, setActive] = useState<MenuCategory>('pinsa');
  const { addItem } = useCart();
  const { ref, isVisible } = useScrollAnimation();
  const filtered = menuItems.filter(i => i.category === active);

  return (
    <section id="menu-preview" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Esplora</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">Il nostro menù</h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 md:gap-6 mb-16 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-xs md:text-sm tracking-widest uppercase px-4 py-2 transition-all duration-300 border-b-2 ${
                active === cat ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground hover:border-foreground/20'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filtered.map(item => (
            <div key={item.id} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                  <span className="font-body text-primary font-semibold">€{item.price.toFixed(2)}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                <Button onClick={() => addItem(item)} variant="outline" className="w-full rounded-none border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-widest uppercase font-body transition-all duration-300">
                  <Plus className="w-4 h-4 mr-1" /> Aggiungi al carrello
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
