function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />

      <div className="skeleton-content">
        <div className="skeleton-line skeleton-short" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-medium" />
      </div>
    </div>
  );
}

export default SkeletonCard;