export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  collection: string;
  variants?: Variant[];
}

export interface Variant {
  id: string;
  name: string;
  price?: number;
}
