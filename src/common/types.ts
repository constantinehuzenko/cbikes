export interface Bike {
  id: string;
  name: string;
  category: keyof typeof Category;
  price: number;
  imgSrc: string;
}

export enum Category {
  all = "all",
  road = "road",
  mountain = "mountain",
  bmx = "bmx",
}

export interface FilterState {
  currentCategory: string;
  maxPrice: number;
}
