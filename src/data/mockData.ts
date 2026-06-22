export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  images: string[];
  category: string;
  gender: 'men' | 'women' | 'unisex';
  sizes: string[];
  colors: { name: string; hex: string }[];
  stock: number;
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  rating: number;
  reviews: Review[];
  details: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Shipping",
    question: "Do you ship internationally?",
    answer: "Yes, Shahroze Studio ships across Pakistan and internationally. Free express shipping is automatically applied to orders over Rs. 5,000. Domestic orders typically arrive in 3–5 business days, international orders in 7–14 business days."
  },
  {
    id: "faq-2",
    category: "Shipping",
    question: "How long does shipping take within Pakistan?",
    answer: "Standard shipping takes 3–5 business days, while Express shipping takes 1–2 business days. Orders placed before 1:00 PM PKT are dispatched the same day. We deliver to all major cities including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and more."
  },
  {
    id: "faq-3",
    category: "Returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day return window from the delivery date. Items must be unworn, unwashed, and in their original packaging with tags attached. Return labels are complimentary for domestic customers."
  },
  {
    id: "faq-4",
    category: "Sizing",
    question: "How does the sizing run?",
    answer: "Our designs generally feature a relaxed, modern fit inspired by luxury streetwear. We recommend ordering your true size for the intended drape, or sizing down if you prefer a more tailored fit. Detailed measurements are on each product page."
  },
  {
    id: "faq-5",
    category: "Care",
    question: "How should I wash my premium cotton pieces?",
    answer: "To preserve the premium fibers, we recommend cold washing garments inside out with like colors. Hang dry or tumble dry on low. Do not bleach or iron directly onto graphics/embellishments."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Architecture of Minimalist Dressing",
    slug: "architecture-minimalist-dressing",
    excerpt: "Exploring the fundamentals of building a high-fashion capsule wardrobe based on neutral tones, clean lines, and luxury draping.",
    date: "June 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
    content: `A wardrobe built on minimalism is not about lack, but about curation. In this editorial, we sit down with the design directors at Shahroze Studio to talk about fabric weights, structured shoulders, and the importance of a perfect black, white, and oatmeal palette.\n\nHistorically, minimalism has been linked to architectural frameworks—the idea that space and structure dictate utility. Similarly, in modern luxury wear, a garment must balance dynamic movement with structural integrity. We focus on heavy-weight organic loops, dropped shoulders, and tailoring that looks effortlessly polished whether you are working, travelling, or in a creative session.`
  },
  {
    id: "blog-2",
    title: "Summer/Pre-Fall 2026 Editorial: Desert Warmth",
    slug: "summer-pre-fall-editorial-desert-warmth",
    excerpt: "Behind the scenes of our campaign shoot in the dunes, showcasing beige accents, premium knitwear, and lightweight tracksuits.",
    date: "June 08, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800",
    content: `Capturing the contrast between high-end streetwear and raw natural landscapes. Our Desert Warmth editorial emphasizes relaxed, comfortable aesthetics with premium structures. Combining oatmeal tracksuits with tailored wool coats creates an editorial look that is highly responsive to variable climates.\n\nEvery fabric in this collection has been selected for thermal regulation and textural contrast. The organic knit blends drape elegantly, offering a silhouette that feels luxurious yet grounded.`
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Oversized Heavyweight Hoodie",
    slug: "oversized-heavyweight-hoodie",
    price: 8500,
    compareAtPrice: 11000,
    description: "Constructed from 480gsm organic cotton loopback French terry. Featuring a double-lined hood without drawstrings for a clean look, kangaroo pocket, dropped shoulders, and ribbed cuffs. Pre-shrunk for the ultimate comfort and relaxed luxury silhouette.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800"
    ],
    category: "Hoodies",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#E3DFD5" },
      { name: "Off-Black", hex: "#1A1A1A" },
      { name: "Charcoal", hex: "#4A4A4A" }
    ],
    stock: 25,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    details: [
      "100% Organic Cotton French Terry",
      "480gsm Heavyweight knit",
      "Premium imported fabric",
      "Kangaroo pocket and double-layered hood",
      "Ribbed side panels for comfort"
    ],
    reviews: [
      {
        id: "rev-1",
        userName: "Marcus V.",
        rating: 5,
        date: "May 12, 2026",
        comment: "Outstanding fabric density. The hood sits perfectly structured on my neck, similar to FOG Essentials but with a slightly cleaner drape."
      },
      {
        id: "rev-2",
        userName: "Elena R.",
        rating: 4,
        date: "May 29, 2026",
        comment: "Super comfy and heavy. I got an S for an oversized look, it fits beautifully. Warm enough for chilly Islamabad evenings."
      }
    ]
  },
  {
    id: "prod-2",
    name: "Luxury Minimalist Tee",
    slug: "luxury-minimalist-tee",
    price: 3500,
    description: "A premium everyday essential. Crafted from 260gsm long-staple combed cotton. Features a bound collar, thick crew neck, relaxed shoulders, and straight hem. Retains its shape and soft texture wash after wash.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800"
    ],
    category: "T-Shirts",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F3EFE0" },
      { name: "Charcoal", hex: "#4A4A4A" },
      { name: "Off-Black", hex: "#1A1A1A" }
    ],
    stock: 40,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    details: [
      "100% Combed Organic Cotton",
      "260gsm Mid-heavyweight knit",
      "Thick rib-knit collar (1.2 inches)",
      "Reinforced shoulders and neck binding",
      "Silky soft finish"
    ],
    reviews: [
      {
        id: "rev-3",
        userName: "Harrison T.",
        rating: 5,
        date: "June 02, 2026",
        comment: "This is the best t-shirt I own. The neck doesn't stretch out and the weight is exactly what you want for a modern, boxy look."
      }
    ]
  },
  {
    id: "prod-3",
    name: "Tailored Lounge Trackpants",
    slug: "tailored-lounge-trackpants",
    price: 6500,
    description: "Designed for seamless transitions. Featuring a relaxed straight-leg fit, pin-tuck pleats down the front, elasticated waistband with drawstrings, side zip pockets, and single back pocket. High-comfort fleece fabrication.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800"
    ],
    category: "Tracksuits",
    gender: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#E3DFD5" },
      { name: "Off-Black", hex: "#1A1A1A" }
    ],
    stock: 18,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    details: [
      "80% Organic Cotton, 20% Polyester fleece",
      "380gsm weight",
      "Front pin-tuck crease styling",
      "Elasticated hem options with hidden zippers",
      "YKK zip pockets"
    ],
    reviews: [
      {
        id: "rev-4",
        userName: "Liam K.",
        rating: 4.5,
        date: "April 18, 2026",
        comment: "Very clean trackpants. The center seam makes them look smart enough to wear out with an overcoat. Extremely comfortable."
      }
    ]
  },
  {
    id: "prod-4",
    name: "Minimalist Utility Bomber",
    slug: "minimalist-utility-bomber",
    price: 12000,
    compareAtPrice: 15000,
    description: "A water-resistant, matte nylon bomber jacket with clean minimalist lines. Finished with silver-tone metal zippers, dual side cargo pockets, zippered sleeve compartment, and heavy ribbed mock neck and hem.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800"
    ],
    category: "Jackets",
    gender: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Off-Black", hex: "#1A1A1A" },
      { name: "Charcoal", hex: "#4A4A4A" }
    ],
    stock: 12,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    details: [
      "Water-repellent nylon shell",
      "Satin twill lining with inner pockets",
      "Lightweight synthetic insulation",
      "Custom gunmetal zippers",
      "Relaxed chest with fitted waist"
    ],
    reviews: []
  },
  {
    id: "prod-5",
    name: "Knitted Oversized Cardigan",
    slug: "knitted-oversized-cardigan",
    price: 8000,
    description: "Constructed from a premium wool-mohair blend. Features a ribbed V-neck collar, large horn-style buttons, dropped shoulder seams, and relaxed wide sleeves. The perfect cozy layering layer with a luxurious texture.",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800"
    ],
    category: "Women's Wear",
    gender: "women",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Oatmeal", hex: "#E3DFD5" },
      { name: "Cream", hex: "#F3EFE0" }
    ],
    stock: 15,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 5.0,
    details: [
      "30% Mohair, 30% Wool, 40% Premium Acrylic",
      "Chunky knit construction",
      "Real horn-effect button closures",
      "Rib-knit cuffs and hemline",
      "Dry clean recommended"
    ],
    reviews: [
      {
        id: "rev-5",
        userName: "Chloe D.",
        rating: 5,
        date: "May 22, 2026",
        comment: "Absolutely stunning. Feels and looks like a designer piece costing three times as much. The knit is thick, fuzzy, and warm."
      }
    ]
  },
  {
    id: "prod-6",
    name: "Premium Linen Trench Coat",
    slug: "premium-linen-trench-coat",
    price: 14500,
    description: "Designed for a fluid drape. Made from double-weight premium flax linen. Includes an adjustable belt, double-breasted button closures, storm flap overlays, and deep side welt pockets. Unlined for clean movement.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800"
    ],
    category: "Jackets",
    gender: "women",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#F3EFE0" },
      { name: "Off-Black", hex: "#1A1A1A" }
    ],
    stock: 8,
    featured: true,
    bestSeller: false,
    newArrival: false,
    rating: 4.8,
    details: [
      "100% Belgian Flax Linen",
      "Relaxed double-breasted silhouette",
      "Detachable self-tie waist belt",
      "Adjustable button tab cuffs",
      "Vent back flap"
    ],
    reviews: []
  },
  {
    id: "prod-7",
    name: "Studio Canvas Tote Bag",
    slug: "studio-canvas-tote-bag",
    price: 4000,
    description: "A structured, heavy cotton duck canvas tote with premium full-grain black leather handles. Features internal brass snaps, dual internal pockets, printed minimalist studio lettering, and reinforced base board.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
      "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800"
    ],
    category: "Accessories",
    gender: "unisex",
    sizes: ["O/S"],
    colors: [
      { name: "Cream", hex: "#F3EFE0" },
      { name: "Off-Black", hex: "#1A1A1A" }
    ],
    stock: 35,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.5,
    details: [
      "24oz Organic Cotton Canvas",
      "100% Full-grain leather straps",
      "Interior zip pocket and tech slip",
      "Metal snap-closure top",
      "Dimensions: 16in x 14in x 6in"
    ],
    reviews: [
      {
        id: "rev-6",
        userName: "Sasha P.",
        rating: 4.5,
        date: "May 05, 2026",
        comment: "Excellent daily workbag. Holds my 16-inch laptop with room to spare, and the leather straps are very sturdy."
      }
    ]
  },
  {
    id: "prod-8",
    name: "Organic Waffle Beanie",
    slug: "organic-waffle-beanie",
    price: 2000,
    description: "Knit from premium thick organic cotton threads in a structural waffle pattern. Features a thick adjustable fold-over cuff and discreet brand tag. Snug fit that shapes to your head over time.",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800"
    ],
    category: "Accessories",
    gender: "unisex",
    sizes: ["O/S"],
    colors: [
      { name: "Oatmeal", hex: "#E3DFD5" },
      { name: "Charcoal", hex: "#4A4A4A" },
      { name: "Off-Black", hex: "#1A1A1A" }
    ],
    stock: 50,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    details: [
      "100% GOTS Certified Organic Cotton",
      "Heavy four-gauge waffle knit",
      "Double-layered fold cuff",
      "Breathable and warm structure",
      "Machine washable"
    ],
    reviews: []
  }
];

export const CATEGORIES = [
  "Men's Wear",
  "Women's Wear",
  "Hoodies",
  "T-Shirts",
  "Tracksuits",
  "Jackets",
  "Accessories"
];
