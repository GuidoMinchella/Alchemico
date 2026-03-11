import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [payment, setPayment] = useState<'cash' | 'card'>('cash');

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md animate-fade-in">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-3xl text-foreground mb-4">Ordine confermato!</h1>
          <p className="font-body text-muted-foreground mb-2">Grazie per aver ordinato da Alchemico.</p>
          <p className="font-body text-muted-foreground text-sm mb-8">
            {deliveryType === 'delivery' ? 'Il tuo ordine verrà consegnato a breve.' : 'Il tuo ordine sarà pronto per il ritiro a breve.'}
          </p>
          <Button onClick={() => navigate('/')} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase font-body">
            Torna alla home
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Il carrello è vuoto</h1>
          <Button onClick={() => navigate('/menu')} variant="outline" className="rounded-none border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm tracking-widest uppercase">
            Vai al menù
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
          <ArrowLeft className="w-4 h-4" /> Indietro
        </button>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {/* Delivery type */}
            <div>
              <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3 block">Tipo di ordine</label>
              <div className="flex gap-3">
                {(['delivery', 'pickup'] as const).map(type => (
                  <button key={type} type="button" onClick={() => setDeliveryType(type)}
                    className={`flex-1 py-3 font-body text-sm tracking-widest uppercase rounded-sm border transition-all duration-300 ${
                      deliveryType === type ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-foreground/20'
                    }`}
                  >
                    {type === 'delivery' ? 'Consegna' : 'Ritiro'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2 block">Nome *</label>
                <Input required className="bg-secondary border-border rounded-sm font-body" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2 block">Telefono *</label>
                <Input required type="tel" className="bg-secondary border-border rounded-sm font-body" placeholder="+39 ..." />
              </div>
            </div>

            {deliveryType === 'delivery' && (
              <div>
                <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2 block">Indirizzo di consegna *</label>
                <Input required className="bg-secondary border-border rounded-sm font-body" placeholder="Indirizzo completo" />
              </div>
            )}

            <div>
              <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-2 block">Note all’ordine</label>
              <textarea className="w-full bg-secondary border border-border rounded-sm p-3 font-body text-foreground text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Richieste particolari..." />
            </div>

            {/* Payment */}
            <div>
              <label className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3 block">Metodo di pagamento</label>
              <div className="flex gap-3">
                {(['cash', 'card'] as const).map(p => (
                  <button key={p} type="button" onClick={() => setPayment(p)}
                    className={`flex-1 py-3 font-body text-sm tracking-widest uppercase rounded-sm border transition-all duration-300 ${
                      payment === p ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-foreground/20'
                    }`}
                  >
                    {p === 'cash' ? 'Contanti alla consegna' : 'Carta (prossimamente)'}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-sm tracking-widest uppercase font-body mt-4">
              Conferma ordine — €{totalPrice.toFixed(2)}
            </Button>
          </form>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-sm p-6 sticky top-28">
              <h3 className="font-display text-lg text-foreground mb-6">Riepilogo ordine</h3>
              <div className="space-y-4 mb-6">
                {items.map(ci => (
                  <div key={ci.item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-xs text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">{ci.quantity}</span>
                      <span className="font-body text-sm text-foreground">{ci.item.name}</span>
                    </div>
                    <span className="font-body text-sm text-muted-foreground">€{(ci.item.price * ci.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-body text-foreground font-semibold">Totale</span>
                <span className="font-display text-xl text-primary">€{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
