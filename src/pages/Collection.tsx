import { useMemo, useState } from 'react';
import { useCollection } from '../context/CollectionContext';
import type { CollectionType } from '../types/product';

function Collection() {
  const { items, removeItem, moveItem } = useCollection();

  const [loading] = useState(false);
  const [activeTab, setActiveTab] =
    useState<CollectionType>('Owned');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredItems = useMemo(() => {
    let result = items.filter(
      (item) => item.collection === activeTab
    );

    result = result.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== 'All') {
      result = result.filter(
        (item) => item.category === category
      );
    }

    switch (sortBy) {
      case 'value-high':
        result.sort(
          (a, b) => b.estimatedValue - a.estimatedValue
        );
        break;

      case 'value-low':
        result.sort(
          (a, b) => a.estimatedValue - b.estimatedValue
        );
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
  }, [items, activeTab, search, category, sortBy]);

  const tabs: CollectionType[] = [
    'Owned',
    'Wishlist',
    'Selling',
  ];

  if (loading) {
    return (
      <div className="empty-state">
        <p>Loading collection...</p>
      </div>
    );
  }

  return (
    <div className="collection-page">
      <div className="page-header">
        <div>
          <h1>My Collection</h1>
          <p>Manage your collectibles in one place.</p>
        </div>

        <span className="result-count">
          {filteredItems.length} items
        </span>
      </div>

      <div className="collection-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? 'collection-tab active'
                : 'collection-tab'
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search collection..."
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
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="newest">Newest</option>
          <option value="value-high">
            Value: High to Low
          </option>
          <option value="value-low">
            Value: Low to High
          </option>
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <h3>No items in {activeTab}</h3>
          <p>Add collectibles from the Marketplace.</p>
        </div>
      ) : (
        <div className="collection-grid">
          {filteredItems.map((item) => (
            <article
              key={`${item.id}-${item.collection}`}
              className="collection-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="collection-image"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src =
                    'https://placehold.co/600x400?text=Image+Unavailable';
                }}
              />

              <div className="collection-content">
                <span className="product-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>Added: {item.dateAdded}</p>

                <p className="collection-value">
                  Estimated: ₹{item.estimatedValue}
                </p>

                <div className="collection-actions">
                  <button
                    onClick={() =>
                      removeItem(item.id, item.collection)
                    }
                  >
                    Remove
                  </button>

                  {item.collection !== 'Owned' && (
                    <button
                      onClick={() =>
                        moveItem(
                          item.id,
                          item.collection,
                          'Owned'
                        )
                      }
                    >
                      Move to Owned
                    </button>
                  )}

                  {item.collection !== 'Wishlist' && (
                    <button
                      onClick={() =>
                        moveItem(
                          item.id,
                          item.collection,
                          'Wishlist'
                        )
                      }
                    >
                      Move to Wishlist
                    </button>
                  )}

                  {item.collection !== 'Selling' && (
                    <button
                      onClick={() =>
                        moveItem(
                          item.id,
                          item.collection,
                          'Selling'
                        )
                      }
                    >
                      Move to Selling
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;