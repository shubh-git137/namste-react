import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <h1 className="font-bold my-6 text-2xl text-center">Cart</h1>
      <div className=" w-6/12 mx-auto">
        <ItemList items={cartItems} />
      </div>
    </>
  );
};
export default Cart;
