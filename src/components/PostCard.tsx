import { Link } from 'react-router-dom';
import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}

function PostCard({
  post,
  onLike,
  onSave,
}: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-header">
        <img
          src={post.avatar}
          alt={post.username}
          className="post-avatar"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              'https://placehold.co/100x100?text=User';
          }}
        />

        <div>
          <h4>{post.username}</h4>
          <p>{post.datePosted}</p>
        </div>
      </div>

      <Link to={`/community/${post.id}`}>
        <img
          src={post.productImage}
          alt={post.productTitle}
          className="post-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              'https://placehold.co/600x400?text=Image+Unavailable';
          }}
        />
      </Link>

      <div className="post-content">
        <span className="post-category">
          {post.category}
        </span>

        <Link
          to={`/community/${post.id}`}
          className="post-title"
        >
          {post.productTitle}
        </Link>

        <p className="post-caption">
          {post.caption}
        </p>

        <div className="post-stats">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
        </div>

        <div className="post-actions">
          <button
            type="button"
            className={post.liked ? 'active' : ''}
            onClick={() => onLike(post.id)}
          >
            {post.liked ? 'Liked' : 'Like'}
          </button>

          <button
            type="button"
            className={post.saved ? 'active' : ''}
            onClick={() => onSave(post.id)}
          >
            {post.saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default PostCard;