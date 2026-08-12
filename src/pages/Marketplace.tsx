import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import { products } from '../data/products';

function Marketplace() {
  const [loading] = useState(false);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] =
    useState('');

  const [category, setCategory] = useState('All');
  const [condition, setCondition] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    result = result.filter((product) =>
      product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );

    if (category !== 'All') {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (condition !== 'All') {
      result = result.filter(
        (product) => product.condition === condition
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'newest':
      default:
        result.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() -
            new Date(a.dateAdded).getTime()
        );
    }

    return result;
  }, [
    debouncedSearch,
    category,
    condition,
    sortBy,
  ]);

  if (loading) {
    return (
      <div className="product-grid">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="marketplace-page">
      <div className="page-header">
        <div>
          <h1>Marketplace</h1>
          <p>
            Discover collectible treasures from the
            community.
          </p>
        </div>

        <span className="result-count">
          {filteredProducts.length} items
        </span>
      </div>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search collectibles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Trading Cards">
            Trading Cards
          </option>
          <option value="Coins">Coins</option>
          <option value="Figures">Figures</option>
          <option value="Comics">Comics</option>
          <option value="Vintage">Vintage</option>
        </select>

        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Conditions</option>
          <option value="Mint">Mint</option>
          <option value="Excellent">
            Excellent
          </option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="newest">Newest</option>
          <option value="price-low">
            Price: Low to High
          </option>
          <option value="price-high">
            Price: High to Low
          </option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h3>No collectibles found</h3>
          <p>
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Marketplace;