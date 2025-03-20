export interface PricePoint {
  date: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  lowestPrice: number;
  highestPrice: number;
  discount: number;
  retailer: string;
  image: string;
  priceHistory: PricePoint[];
}
