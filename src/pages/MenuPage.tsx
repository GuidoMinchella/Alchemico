import { useState } from 'react';
import { menuItems, categoryLabels, MenuCategory } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories: MenuCategory[] = ['pinsa', 'antipasti', 'cucina', 'dolci', 'bevande'];

const MenuPage = () => {
  const [active, setActive] = useState<MenuCategory | 'all'>('all');
  const { addItem } = useCart();
  const filtered = active === 'all' ? menuItems : menuItems.filter(i => i.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 px-6 text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Esplora</p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">Menù completo</h1>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Scopri la nostra selezione completa di pinse creative, antipasti, cucina, dolci e bevande.
        </p>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex justify-center gap-2 md:gap-4 px-4 py-4 flex-wrap max-w-5xl mx-auto">
          <button onClick={() => setActive('all')}
            className={`font-body text-xs md:text-sm tracking-widest uppercase px-3 py-2 transition-all duration-300 border-b-2 ${active === 'all' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}>
            Tutto
          </button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`font-body text-xs md:text-sm tracking-widest uppercase px-3 py-2 transition-all duration-300 border-b-2 ${active === cat ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}>
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                  <span className="font-body text-primary font-semibold text-lg">€{item.price.toFixed(2)}</span>
                </div>
                <p className="font-body text-xs tracking-widest uppercase text-primary/60 mb-2">{categoryLabels[item.category]}</p>
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                <Button onClick={() => addItem(item)} variant="outline" className="w-full rounded-none border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-widest uppercase font-body">
                  <Plus className="w-4 h-4 mr-1" /> Aggiungi al carrello
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
