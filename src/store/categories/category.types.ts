

export enum CATEGORIES_ACTION_TYPE {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCES = "category/FETCH_CATEGORIES_SUCCES",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
};


export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};