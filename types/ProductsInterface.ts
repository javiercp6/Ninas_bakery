export interface Product {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    inStock: boolean;
    picture: string;
  }

  export interface Category {
    _id: string;
    name: string;
    products: Product[]
    picture: string;
  }
