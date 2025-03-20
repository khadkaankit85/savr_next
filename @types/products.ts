export type Product = {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  retailer: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
};

export type Retailer = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  inStock: boolean;
  deliveryDays: string;
};

export type SimilarProduct = {
  name: string;
  price: number;
  originalPrice: number;
  image: string;
};
