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
    question: "Do you ship everywhere?",
    answer: "Yeah, we ship all over Pakistan and internationally. Free express shipping drops on all orders over Rs. 5,000. Domestic hits your door in 3-5 days, international takes around 7-14."
  },
  {
    id: "faq-2",
    category: "Shipping",
    question: "When does it arrive in PK?",
    answer: "Standard is 3-5 days. Need it fast? Express is 1-2 days. Order before 1 PM PKT and we dispatch the same day. We cover all major hubs: KHI, LHE, ISB, RWP, and more."
  },
  {
    id: "faq-3",
    category: "Returns",
    question: "What's the return policy?",
    answer: "You've got 30 days from delivery. Keep it unworn with the tags on, and we're good. Domestic returns get complimentary return labels—no stress."
  },
  {
    id: "faq-4",
    category: "Sizing",
    question: "How do the fits run?",
    answer: "Everything is designed for that oversized, relaxed street fit. Go true to size for the intended drape, or size down if you want it more tailored."
  },
  {
    id: "faq-5",
    category: "Care",
    question: "How do I wash my pieces?",
    answer: "Cold wash inside out. Hang dry to keep the print and fabric fresh. Don't iron directly on the graphics or block prints."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Desi Streetwear: Fusing Tradition with Modernity",
    slug: "desi-streetwear-fusion",
    excerpt: "How we're bringing block prints and raw silk into the elegant era of contemporary streetwear.",
    date: "June 15, 2026",
    readTime: "4 min read",
    image: "/images/hero_pakistani_models.png",
    content: `It's not just about wearing clothes; it's about heritage. In this drop, we sit down with the creators at Shahroze Studio to talk about merging traditional embroidery with relaxed contemporary silhouettes and refined earth tones.\n\nTraditionally, a Kurta is formal. We're refining the rules. By dropping the shoulders, using premium heavyweight fabrics, and introducing sophisticated terracotta and emerald accents, we're making pieces that transition seamlessly from a modern dholki to a gallery exhibition.`
  },
  {
    id: "blog-2",
    title: "Refined Street Lookbook: The Heritage Bazaar",
    slug: "heritage-bazaar-lookbook",
    excerpt: "Behind the scenes of our campaign shoot in Lahore's historic streets.",
    date: "June 08, 2026",
    readTime: "3 min read",
    image: "/images/model_instagram_2.png",
    content: `Capturing the contrast between high-fashion streetwear and traditional Pakistani craftsmanship. Our Heritage Bazaar lookbook features structured Shalwar Kameez sets styled with clean, minimalist sneakers and custom metallic frames.\n\nEvery fabric in this collection speaks to luxury, longevity, and heritage. The block-printed kurtas paired with tailored denim outerwear create a modern energy that is clean, refined, and uniquely desi.`
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Emerald Block-Printed Kurta",
    slug: "emerald-block-printed-kurta",
    price: 6500,
    compareAtPrice: 8500,
    description: "An oversized traditional kurta refined for modern luxury. Features hand-stamped block prints in deep emerald green over heavy obsidian cotton canvas. Dropped shoulders, wide sleeves, and finished side slits.",
    images: [
      "/images/model_block_printed_kurta.png"
    ],
    category: "Kurtas",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian Black", hex: "#0B100E" },
      { name: "Midnight Emerald", hex: "#0F2E25" }
    ],
    stock: 25,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    details: [
      "100% Heavyweight Organic Cotton",
      "Hand-stamped block print motifs",
      "Refined relaxed silhouette",
      "Subtle contrast stitching"
    ],
    reviews: [
      {
        id: "rev-1",
        userName: "Zainab A.",
        rating: 5,
        date: "May 12, 2026",
        comment: "The deep emerald print looks incredibly sophisticated. Beautiful drape. Wearing it styled with raw trousers everywhere."
      },
      {
        id: "rev-2",
        userName: "Hamza K.",
        rating: 4,
        date: "May 29, 2026",
        comment: "Obsessed with the drape. Runs relaxed, definitely size down if you aren't used to the oversized look."
      }
    ]
  },
  {
    id: "prod-2",
    name: "Terracotta Accent Shalwar Set",
    slug: "terracotta-accent-shalwar-set",
    price: 12000,
    description: "The ultimate fusion piece. A tailored two-piece Shalwar Kameez set cut from premium raw silk and cotton blends. Features subtle terracotta piping down the seams and a relaxed, structured traditional drape.",
    images: [
      "/images/model_shalwar_set.png"
    ],
    category: "Shalwar Kameez",
    gender: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal Slate", hex: "#151C19" },
      { name: "Terracotta Rust", hex: "#C2593E" }
    ],
    stock: 15,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    details: [
      "Premium Silk-Cotton Blend",
      "Structured tailored collar",
      "Subtle terracotta seam detailing",
      "Hidden zipper pockets"
    ],
    reviews: [
      {
        id: "rev-3",
        userName: "Raza T.",
        rating: 5,
        date: "June 02, 2026",
        comment: "Got stopped so many times. The modern structure and subtle terracotta highlights are incredibly tasteful."
      }
    ]
  },
  {
    id: "prod-3",
    name: "Heritage Silk Dupatta",
    slug: "heritage-silk-dupatta",
    price: 4500,
    description: "A 2.5-meter long pure silk dupatta featuring a refined digital glitch pattern mixed with traditional heritage motifs. Designed to be styled as an elegant wrap, a scarf, or a statement piece.",
    images: [
      "/images/model_silk_dupatta.png"
    ],
    category: "Dupattas",
    gender: "women",
    sizes: ["O/S"],
    colors: [
      { name: "Terracotta Rust", hex: "#C2593E" },
      { name: "Soft Sage", hex: "#8DA89F" }
    ],
    stock: 30,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    details: [
      "100% Pure Silk",
      "Heritage digital pattern print",
      "2.5 meters length",
      "Hand-finished rolled edges"
    ],
    reviews: [
      {
        id: "rev-4",
        userName: "Aisha M.",
        rating: 4.5,
        date: "April 18, 2026",
        comment: "The colors are incredibly rich and professional. Beautiful silk sheen that elevates any ensemble."
      }
    ]
  },
  {
    id: "prod-4",
    name: "Indigo Denim Kurti",
    slug: "indigo-denim-kurti",
    price: 7500,
    compareAtPrice: 9000,
    description: "A contemporary short, boxy kurti made from vintage washed indigo denim. Features custom silver hardware, dual cargo pockets, and raw clean-cut edges.",
    images: [
      "/images/model_denim_kurti.png"
    ],
    category: "Streetwear Fusion",
    gender: "women",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Washed Indigo", hex: "#5C768D" }
    ],
    stock: 12,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    details: [
      "12oz Premium Washed Denim",
      "Clean raw edges",
      "Chunky matte-silver hardware",
      "Structured boxy silhouette"
    ],
    reviews: []
  },
  {
    id: "prod-5",
    name: "Urdu Calligraphy Hoodie",
    slug: "urdu-calligraphy-hoodie",
    price: 8500,
    description: "A luxury heavyweight hoodie featuring fine gold embroidered Urdu calligraphy across the back. Dropped shoulders, clean seams, and a double-lined structure.",
    images: [
      "/images/model_urdu_hoodie.png"
    ],
    category: "Streetwear Fusion",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight Emerald", hex: "#0F2E25" },
      { name: "Antique Gold", hex: "#D4AF37" }
    ],
    stock: 40,
    featured: false,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    details: [
      "500gsm Luxury Organic Cotton Fleece",
      "Embroidered Urdu calligraphy detailing",
      "Polished relaxed silhouette",
      "Double-layered lined hood"
    ],
    reviews: [
      {
        id: "rev-5",
        userName: "Bilal J.",
        rating: 5,
        date: "May 22, 2026",
        comment: "The embroidery quality is impeccable. Clean lettering, heavy cotton. A beautiful tribute to heritage."
      }
    ]
  }
];

export const CATEGORIES = [
  "Kurtas",
  "Shalwar Kameez",
  "Streetwear Fusion",
  "Dupattas",
  "Accessories"
];
