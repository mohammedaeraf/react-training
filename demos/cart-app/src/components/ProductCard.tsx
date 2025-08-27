import { useCart } from "../contexts/CartContext";

// Props type for the ProductCard component
type ProductCardProps = {
  name: string; // Name of the product
  price: number; // Price of the product
  id: number; // Unique identifier for the product (optional)
};

const ProductCard = (props: ProductCardProps) => {
  // Access the addToCart function from the CartContext
  let cartContext = useCart();

  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* Display product name */}
        <h5 className="card-title">{props.name}</h5>
        {/* Display product price */}
        <p className="card-text">${props.price}</p>
        {/* Show Add to Cart button only if id is defined */}
        {props.id !== undefined && (
          <button
            className="btn btn-success"
            onClick={() => cartContext.addToCart(props)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
