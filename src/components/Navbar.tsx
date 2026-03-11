import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, isCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Chi siamo', href: '#brand-story' },
    { label: 'Contatti', href: '#contact' },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden animate-fade-in" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isCartOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'} ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" onClick={handleLogoClick} className="font-display text-2xl tracking-wider text-foreground">
          ALCHEMICO
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            link.href.startsWith('#') ? (
              <a key={link.label} href={link.href} className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            )
          ))}
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-foreground hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-body font-semibold animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-foreground">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-body font-semibold">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-foreground">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              link.href.startsWith('#') ? (
                <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
