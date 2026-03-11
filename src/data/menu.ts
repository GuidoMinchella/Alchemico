export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  featured?: boolean;
  ingredients?: string[];
}

export type MenuCategory = 'pinsa' | 'antipasti' | 'cucina' | 'dolci' | 'bevande';

export const categoryLabels: Record<MenuCategory, string> = {
  pinsa: 'Pinsa Romana',
  antipasti: 'Antipasti',
  cucina: 'Cucina',
  dolci: 'Dolci',
  bevande: 'Bevande',
};

export const menuItems: MenuItem[] = [
  // Pinsa Romana
  {
    id: 'p1',
    name: 'Margherita Classica',
    description: 'Fior di latte, pomodoro San Marzano, basilico fresco, olio extravergine d’oliva',
    price: 12.00,
    category: 'pinsa',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    featured: true,
    ingredients: ['Fior di latte', 'San Marzano', 'Basilico', 'Olio EVO'],
  },
  {
    id: 'p2',
    name: 'Truffle & Burrata',
    description: 'Crema di tartufo nero, burrata cremosa, funghi selvatici, filo di olio al tartufo',
    price: 18.00,
    category: 'pinsa',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
    featured: true,
    ingredients: ['Tartufo nero', 'Burrata', 'Funghi selvatici', 'Olio al tartufo'],
  },
  {
    id: 'p3',
    name: 'Prosciutto & Figs',
    description: 'Prosciutto di Parma 24 mesi, fichi freschi, gorgonzola, glassa di miele',
    price: 16.00,
    category: 'pinsa',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    featured: true,
    ingredients: ['Prosciutto di Parma', 'Fichi freschi', 'Gorgonzola', 'Miele'],
  },
  {
    id: 'p4',
    name: 'Mortadella & Pistachio',
    description: 'Mortadella di Bologna, stracciatella, pistacchi in granella, pesto di basilico',
    price: 15.00,
    category: 'pinsa',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop',
    ingredients: ['Mortadella', 'Stracciatella', 'Pistacchi', 'Pesto di basilico'],
  },
  {
    id: 'p5',
    name: 'Diavola Piccante',
    description: 'Nduja piccante, mozzarella di bufala, peperoncino calabrese, origano fresco',
    price: 14.00,
    category: 'pinsa',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop',
    ingredients: ['Nduja', 'Mozzarella di bufala', 'Peperoncino calabrese', 'Origano'],
  },

  // Antipasti
  {
    id: 'a1',
    name: 'Burrata e Pomodorini',
    description: 'Burrata cremosa, pomodorini, basilico, riduzione di aceto balsamico invecchiato',
    price: 14.00,
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&h=400&fit=crop',
  },
  {
    id: 'a2',
    name: 'Tagliere Alchemico',
    description: 'Selezione di salumi artigianali, formaggi stagionati, miele, mostarda',
    price: 22.00,
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&h=400&fit=crop',
  },
  {
    id: 'a3',
    name: 'Polpo alla Griglia',
    description: 'Polpo alla griglia, crema di patate, paprika affumicata, capperi',
    price: 16.00,
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop',
  },

  // Cucina
  {
    id: 'c1',
    name: 'Cacio e Pepe',
    description: 'Tonnarelli, Pecorino Romano DOP, pepe nero di Tellicherry',
    price: 16.00,
    category: 'cucina',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop',
  },
  {
    id: 'c2',
    name: 'Filetto di Manzo',
    description: 'Filetto di manzo, riduzione al vino rosso, verdure arrosto, jus al tartufo',
    price: 28.00,
    category: 'cucina',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop',
  },
  {
    id: 'c3',
    name: 'Risotto allo Zafferano',
    description: 'Riso Carnaroli, pistilli di zafferano, midollo, Parmigiano 36 mesi',
    price: 18.00,
    category: 'cucina',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop',
  },

  // Dolci
  {
    id: 'd1',
    name: 'Tiramisù Alchemico',
    description: 'Il nostro tiramisù della casa con espresso, mascarpone, spolverata di cacao',
    price: 10.00,
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
  },
  {
    id: 'd2',
    name: 'Panna Cotta',
    description: 'Panna cotta alla vaniglia, coulis di frutti di bosco, menta',
    price: 9.00,
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
  },

  // Bevande
  {
    id: 'b1',
    name: 'Cocktail Alchemico',
    description: 'Il nostro cocktail della casa con gin, fiori di sambuco, prosecco, agrumi',
    price: 12.00,
    category: 'bevande',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
  },
  {
    id: 'b2',
    name: 'Vino della Casa',
    description: 'Vino italiano selezionato, rosso o bianco, al calice',
    price: 8.00,
    category: 'bevande',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
  },
  {
    id: 'b3',
    name: 'Acqua & Soft Drinks',
    description: 'Acqua naturale o frizzante, bibite artigianali, succhi freschi',
    price: 4.00,
    category: 'bevande',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop',
  },
];
