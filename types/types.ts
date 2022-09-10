export type TypoPropType = {
  title?: string;
  color?: string;
  content?: string;
};

export interface Product {
  name: string;
  price: number; 
  image: string;
  description: string;
  numStar: number;
}
