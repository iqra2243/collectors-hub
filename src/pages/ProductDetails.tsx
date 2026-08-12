import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCollection } from '../context/CollectionContext';
import { toast } from 'react-toastify';

function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCollection();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="empty-state">
        <h2>Product not found</h2>
        <p>The collectible you are looking for does not exist.</p>

        <Link to="/marketplace" className="back-link">
          ← Back to Marketplace
        </Link>
      </div>
    );
  }

  const handleAddToCollection = () => {
    const added = addItem(product, 'Owned');

    if (added) {
      toast.success(`${product.title} added to collection!`);
    } else {
      toast.info(
        `${product.title} already exists in collection.`
      );
    }
  };

  const handleAddToWishlist = () => {
    const added = addItem(product, 'Wishlist');

    if (added) {
      toast.success(`${product.title} added to wishlist!`);
    } else {
      toast.info(
        `${product.title} already exists in wishlist.`
      );
    }
  };

  return (
    <div className="product-details-page">
      <Link to="/marketplace" className="back-link">
        ← Back to Marketplace
      </Link>

      <div className="product-details-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
          onError={(event) => {
            event.currentTarget.src =
              'https://placehold.co/600x400?text=Image+Unavailable';
          }}
        />

        <div className="product-details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h1 className="product-details-title">
            {product.title}
          </h1>

          <div className="product-meta-grid">
            <div className="product-meta-item">
              <h4>Condition</h4>
              <p>{product.condition}</p>
            </div>

            <div className="product-meta-item">
              <h4>Price</h4>
              <p>₹{product.price}</p>
            </div>

            <div className="product-meta-item">
              <h4>Seller</h4>
              <p>{product.seller}</p>
            </div>

            <div className="product-meta-item">
              <h4>Location</h4>
              <p>{product.location}</p>
            </div>

            <div className="product-meta-item">
              <h4>Date Added</h4>
              <p>{product.dateAdded}</p>
            </div>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-details-actions">
            <button
              type="button"
              onClick={handleAddToCollection}
            >
              + Add to Collection
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={handleAddToWishlist}
            >
              ♡ Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;