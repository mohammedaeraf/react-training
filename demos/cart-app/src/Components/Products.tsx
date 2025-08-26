import ProductCard from "./ProductCard";
// Static list of products available in the store
const productList = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 199 },
];

const Products = () => {
  return (
    <div>
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {/* Render a ProductCard for each product */}
        {productList.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
