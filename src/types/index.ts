export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}