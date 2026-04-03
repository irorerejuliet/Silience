import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  isDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  toggleDrawer: (open: boolean) => void; 
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isDrawerOpen: false, 

      toggleDrawer: (open) => set({ isDrawerOpen: open }),

      addToCart: (newItem) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === newItem.id);

          // Logic for updating items
          const updatedCart = existingItem
            ? state.cart.map((i) =>
                i.id === newItem.id
                  ? { ...i, quantity: i.quantity + newItem.quantity }
                  : i,
              )
            : [...state.cart, newItem];

          return {
            cart: updatedCart,
            isDrawerOpen: true, 
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),
    }),
    { name: "cart-storage" },
  ),
);





