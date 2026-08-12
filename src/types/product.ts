export type Product = {
  id: string;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;
  description: string;
  dateAdded: string;
  estimatedValue: number;
};

export type CollectionType =
  | 'Owned'
  | 'Wishlist'
  | 'Selling';

export type CollectionItem = Product & {
  collection: CollectionType;
};