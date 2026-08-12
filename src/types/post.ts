export interface Post {
  id: string;
  username: string;
  avatar: string;
  productTitle: string;
  productImage: string;
  category: string;
  caption: string;
  likes: number;
  comments: number;
  liked: boolean;
  saved: boolean;
  datePosted: string;
}