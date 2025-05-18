import { useContext } from "react";
import "./CartItem.css";
import { IoCartOutline } from "react-icons/io5";
import { ThemeContext } from "@/contexts/ThemeContext";

const CartItem = ({
  id,
  thumbnail,
  title,
  category,
  price,
  discountPercentage,
}) => {
  const { isDark } = useContext(ThemeContext);
  const newPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className={isDark ? "cart-item dark" : "cart-item"}>
      <div className="image-place">
        <img src={thumbnail} />
      </div>
      <div className="textures">
        <span className="category">{category}</span>
        <p className="title">{title}</p>
        <div className="price-and-cart">
          <div className="price-place">
            <p className="new-price"> ${newPrice}</p>
            <p>
              <span className="old-price">${price}</span>
              <span className="percentage">-{discountPercentage}%</span>
            </p>
          </div>
          <button className="add-to-cart-btn">
            <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
