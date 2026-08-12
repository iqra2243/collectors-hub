import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { useCollection } from '../context/CollectionContext';
import { toast } from 'react-toastify';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCollection();

  const handleAddToCollection = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const added = addItem(product, 'Owned');

    if (added) {
      toast.success(
        `${product.title} added to Owned collection!`
      );
    } else {
      toast.info(
        `${product.title} already exists in Owned collection.`
      );
    }
  };

  const handleAddToWishlist = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const added = addItem(product, 'Wishlist');

    if (added) {
      toast.success(
        `${product.title} added to Wishlist!`
      );
    } else {
      toast.info(
        `${product.title} already exists in Wishlist.`
      );
    }
  };

  return (
    <article className="product-card">
      <Link
        to={`/marketplace/${product.id}`}
        className="product-image-link"
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              'https://placehold.co/600x400?text=Image+Unavailable';
          }}
        />
      </Link>

      <div className="product-card-content">
        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/marketplace/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-info">
          <span>{product.condition}</span>
          <strong>₹{product.price}</strong>
        </div>

        <div className="product-seller">
          <span>Seller: {product.seller}</span>
          <span>{product.location}</span>
        </div>

        <div className="product-actions">
          <button
            type="button"
            onClick={handleAddToCollection}
          >
            + Collection
          </button>

          <button
            type="button"
            onClick={handleAddToWishlist}
          >
            ♡ Wishlist
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;