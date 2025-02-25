import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};

export default Cart;

