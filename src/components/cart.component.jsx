import { useShallow } from "zustand/shallow";
import { useCartStore } from "../store/cart-store.store";
const Cart = () => {
    const { cart, clearCart,removeFromCart } = useCartStore(useShallow((state) => ({
        cart: state.cart,
        clearCart: state.clearCart,
        removeFromCart: state.removeFromCart,
    })))
    console.log("rendering")
    return (
        <>
                {cart.length > 0 && <h1 className="title">Cart</h1>}
        <div className="carts-container">
            {cart.map((item) => (
                <div key={item.id} className="cart-item-container">
                    <h2>{item.name}</h2>
                    <button onClick={() => removeFromCart(item.id)}>remove from cart</button>
                </div>
            ))}

        </div>
            {cart.length > 0 && <button onClick={clearCart} className="clear">Clear cart</button>}
        </>
        
    );

}
export default Cart;