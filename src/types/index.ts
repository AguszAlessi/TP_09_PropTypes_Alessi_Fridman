// Interfaces TypeScript basadas en los PropTypes shapes
export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number | string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail: string;
  images?: string[];
}

export interface Category {
  slug: string;
  name: string;
}

// Props interfaces para componentes
export interface CardProductoProps {
  producto: Product;
}

export interface NavbarProps {
  // Navbar no recibe props externas, pero definimos para consistencia
}

