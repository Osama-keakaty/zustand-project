import { useCartStore } from "../store/cart-store.store";
const CartItem = ({ item }) => {
    const removeFromCart = useCartStore((state) => (state.removeFromCart))
    const { name,id } = item;
    return (
        <>
            <h3>{name}</h3>
            <button 
            onClick={() => removeFromCart(id)}
            >remove</button>
        </>
    )

}
export default CartItem; 