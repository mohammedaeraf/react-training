type Rating = {
  rate: number;
  count: number;
};

type RatingProps = Rating;

const ProductRating = (props: RatingProps) => {
  // Round rating to nearest integer
  const stars = Math.round(props.rate);

  return (
    <div>
      {/* Render stars */}
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < stars ? "text-warning" : "text-muted"}>
          ★
        </span>
      ))}
      <small className="ms-2 text-muted">({props.count})</small>
    </div>
  );
};

export default ProductRating;
