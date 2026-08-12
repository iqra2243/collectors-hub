import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { toast } from 'react-toastify';

function PostDetails() {
  const { id } = useParams();

  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="empty-state">
        <h2>Post not found</h2>
        <p>The community post you are looking for does not exist.</p>

        <Link to="/community" className="back-link">
          ← Back to Community
        </Link>
      </div>
    );
  }

  return (
    <div className="post-details-page">
      <Link to="/community" className="back-link">
        ← Back to Community
      </Link>

      <article className="post-details-card">
        <div className="post-details-header">
          <img
            src={post.avatar}
            alt={post.username}
            className="post-details-avatar"
            onError={(event) => {
              event.currentTarget.src =
                'https://placehold.co/100x100?text=User';
            }}
          />

          <div>
            <h3>{post.username}</h3>
            <p>Posted on {post.datePosted}</p>
          </div>
        </div>

        <img
          src={post.productImage}
          alt={post.productTitle}
          className="post-details-image"
          onError={(event) => {
            event.currentTarget.src =
              'https://placehold.co/600x400?text=Image+Unavailable';
          }}
        />

        <div className="post-details-content">
          <span className="post-category">{post.category}</span>

          <h1 className="post-details-title">
            {post.productTitle}
          </h1>

          <p className="post-details-caption">{post.caption}</p>

          <div className="post-details-stats">
            <span>❤️ {post.likes} likes</span>
            <span>💬 {post.comments} comments</span>
          </div>

          <div className="post-details-actions">
            <button
              type="button"
              onClick={() => toast.success('Post liked!')}
            >
              ❤️ Like
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => toast.success('Post saved!')}
            >
              🔖 Save
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostDetails;