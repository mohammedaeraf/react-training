import { useCart } from "../contexts/CartContext";

type Rating = {
  rate: number;
  count: number;
};

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
        <p className="card-text small flex-grow-1 ">{product.description}</p>
        <h6 className="fw-bold">${product.price}</h6>

        <button
          type="button"
          className="btn btn-primary mt-auto"
          aria-label="Add to cart"
          onClick={() =>
            cartContext.addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
            })
          }
        >
          <i className="bi bi-cart-plus me-2" aria-hidden="true"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
