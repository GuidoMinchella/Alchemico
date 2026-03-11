import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50" onClick={() => setIsCartOpen(false)} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl text-foreground">Il tuo ordine</h2>
            <span className="text-xs font-body text-muted-foreground">({totalItems} articoli)</span>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="font-body text-muted-foreground">Il carrello è vuoto</p>
              <p className="font-body text-muted-foreground/60 text-sm mt-1">Aggiungi articoli dal nostro menù</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map(ci => (
                <div key={ci.item.id} className="flex gap-4 p-3 bg-secondary/30 rounded-sm">
                  <img src={ci.item.image} alt={ci.item.name} className="w-16 h-16 object-cover rounded-sm shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm text-foreground truncate">{ci.item.name}</h4>
                    <p className="font-body text-primary text-sm">€{(ci.item.price * ci.quantity).toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)} className="p-1 border border-border hover:border-primary rounded-sm text-muted-foreground hover:text-primary transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body text-sm text-foreground w-6 text-center">{ci.quantity}</span>
                      <button onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)} className="p-1 border border-border hover:border-primary rounded-sm text-muted-foreground hover:text-primary transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(ci.item.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex justify-between mb-4">
              <span className="font-body text-muted-foreground">Totale</span>
              <span className="font-display text-xl text-foreground">€{totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-sm tracking-widest uppercase font-body">
                Procedi al checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
