import { useCart } from "../Contexts/CartContext";

// Props type for the ProductCard component
type ProductCardProps = {
  name: string; // Name of the product
  price: number; // Price of the product
  id?: number; // Unique identifier for the product (optional)
};

const ProductCard = ({ name, price, id }: ProductCardProps) => {
  // Access the addToCart function from the CartContext
  const { addToCart } = useCart();

  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* Display product name */}
    
        <h5 className="card-title">{name}</h5>
        {/* Display product price */}
        <p className="card-text">${price}</p>
        {/* Show Add to Cart button only if id is defined */}
        {id !== undefined && (
          <button
            className="btn btn-success"
            onClick={() => addToCart({ id, name, price })} // Add product to cart on click
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
