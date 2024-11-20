import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const isExist = state.cart.find((item) => product.id === item.id)

        if (!isExist) {
            return ({ cart: [...state.cart, product] })

        } else {
            return ({ cart: [...state.cart] })
                }

    }),
    clearCart: () => set({ cart: [] }),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => productId !== item.id) }),

    ),
})
);
