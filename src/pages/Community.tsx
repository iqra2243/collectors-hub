import { useMemo, useState } from 'react';
import PostCard from '../components/PostCard';
import { posts as initialPosts } from '../data/posts';

function Community() {
  const [posts, setPosts] = useState(initialPosts);
  const [loading] = useState(false);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Search by title or caption
    result = result.filter(
      (post) =>
        post.productTitle
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        post.caption
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    // Category filter
    if (category !== 'All') {
      result = result.filter(
        (post) => post.category === category
      );
    }

    return result;
  }, [posts, search, category]);

  const handleLike = (id: string) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleSave = (id: string) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? { ...post, saved: !post.saved }
          : post
      )
    );
  };

  if (loading) {
    return (
      <div className="empty-state">
        <p>Loading community feed...</p>
      </div>
    );
  }

  return (
    <div className="community-page">
      <div className="page-header">
        <div>
          <h1>Community Feed</h1>
          <p>
            Discover collectibles shared by collectors
            around the world.
          </p>
        </div>

        <span className="result-count">
          {filteredPosts.length} posts
        </span>
      </div>

      <div className="community-filters">
        <input
          type="text"
          placeholder="Search posts..."
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
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="empty-state">
          <h3>No posts found</h3>
          <p>
            Try a different search term or category.
          </p>
        </div>
      ) : (
        <div className="post-grid">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onSave={handleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Community;