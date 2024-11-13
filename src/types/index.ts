export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
}

export interface ServiceFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
}