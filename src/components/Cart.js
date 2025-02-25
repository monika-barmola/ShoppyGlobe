import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2 className="cart-empty">Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="cart-image" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 50)}...</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
