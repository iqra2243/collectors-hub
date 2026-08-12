import type { Post } from '../types/post';

export const posts: Post[] = [
  {
    id: '1',
    username: 'CardCollector',
    avatar: 'https://i.pravatar.cc/100?img=12',
    productTitle: 'My Charizard Collection',
    productImage:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    category: 'Trading Cards',
    caption:
      'Finally completed one of my favorite Charizard cards! This has been on my wishlist for years.',
    likes: 128,
    comments: 24,
    liked: false,
    saved: false,
    datePosted: '2026-08-10',
  },
  {
    id: '2',
    username: 'RetroVault',
    avatar: 'https://i.pravatar.cc/100?img=32',
    productTitle: 'Vintage Comic Find',
    productImage:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    category: 'Comics',
    caption:
      'Found this amazing vintage comic at a local collector market. The condition is much better than expected!',
    likes: 94,
    comments: 15,
    liked: false,
    saved: false,
    datePosted: '2026-08-09',
  },
  {
    id: '3',
    username: 'CoinVault',
    avatar: 'https://i.pravatar.cc/100?img=45',
    productTitle: '1965 Coin',
    productImage:
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
    category: 'Coins',
    caption:
      'Adding another beautiful piece to my vintage coin collection. Love the details on this one.',
    likes: 76,
    comments: 11,
    liked: false,
    saved: false,
    datePosted: '2026-08-08',
  },
  {
    id: '4',
    username: 'ToyHunter',
    avatar: 'https://i.pravatar.cc/100?img=15',
    productTitle: 'Die-Cast Collection',
    productImage:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    category: 'Figures',
    caption:
      'Some of my favorite die-cast racing cars from my collection. Which one would you pick?',
    likes: 63,
    comments: 8,
    liked: false,
    saved: false,
    datePosted: '2026-08-07',
  },
];