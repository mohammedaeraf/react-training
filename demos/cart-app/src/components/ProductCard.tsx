import { useCart } from "../contexts/CartContext";

type Rating = {
  rate: number;
  count: number;
};

type RatingProps = Rating;

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type ProductCardProps = Product;

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

const ProductCard = (product: ProductCardProps) => {
  let cartContext = useCart();
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
        <p className="card-text small flex-grow-1">{product.description}</p>
        <h6 className="fw-bold">${product.price}</h6>
        <ProductRating
          rate={product.rating.rate}
          count={product.rating.count}
        />
        <button
          className="btn btn-primary mt-auto"
          onClick={() => cartContext.addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
