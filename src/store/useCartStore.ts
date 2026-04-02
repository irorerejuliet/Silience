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
  isDrawerOpen: boolean; // New: tracks if the side menu is visible
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  toggleDrawer: (open: boolean) => void; // New: function to open/close
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isDrawerOpen: false, // Default to closed

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
            isDrawerOpen: true, // Automatically open the drawer when an item is added
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





