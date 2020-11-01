import { useSelector } from "react-redux";
import ProductCard from "../reusable/ProductCard";

const ShopPage = (props) => {
  const { products } = useSelector((state) => state.shop);

  return (
    <div className="shop-page-container">
      <h1>shop</h1>
      <div className="product-list-container">
        {!!products ? (
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })
        ) : (
          <div>No items in Shop</div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
