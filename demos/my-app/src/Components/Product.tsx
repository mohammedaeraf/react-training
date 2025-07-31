import { useParams } from "react-router-dom";
const params = useParams();
function Product() {
  return (
    <div className="container">
      <h2 className="text-primary">View Product</h2>
      <h3 className="text-danger">Product ID {params.id}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum
        repellendus neque eaque. Non porro nesciunt, voluptatem incidunt tempore
        quam quisquam unde blanditiis similique pariatur! Veritatis explicabo
        animi nam corrupti?
      </p>
    </div>
  );
}
export default Product;
