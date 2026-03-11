import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const images = [
  { src: '/atmosfera.jpg', alt: 'Fine dining ambiance' },
  { src: '/atmosfera1.jpg', alt: 'Restaurant interior' },
  { src: '/atmosfera2.jpg', alt: 'Elegant table setting' },
  { src: '/atmosfera3.jpg', alt: 'Cocktail bar' },
  { src: '/atmosfera4.jpg', alt: 'Chef at work' },
  { src: '/atmosfera5.jpg', alt: 'Dining experience' },
];

const Atmosphere = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Esperienza</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">L’atmosfera</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Un ambiente intimo dove l’eleganza moderna incontra il calore romano.
          </p>
        </div>

        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-sm ${i === 1 || i === 4 ? 'row-span-2' : ''}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
