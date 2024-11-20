import { useShallow } from 'zustand/shallow';
import { SHOP_DATA } from '../shop-data.js'
import { useCartStore } from "../store/cart-store.store";


const CategoriesList = () => {
    const  addToCart = useCartStore(useShallow((state) => state.addToCart))
    

    return (
       <>
       <h1 className='title'>Categories</h1>
         <div className='categories-container'>
            {SHOP_DATA.map((item) => {
                return (
                    <div key={item.id} className='category-container' >
                        <h1>{item.name}</h1>
                        <button onClick={() => addToCart(item)}>add to cart</button>
                    </div>
                )

            })}
        </div>

       </>

    );
}

export default CategoriesList;