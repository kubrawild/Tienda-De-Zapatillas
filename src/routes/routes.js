import Cart from "../Pages/cart/Cart";
import Checkout from "../Pages/checkout/Checkout";
import ItemDetailContainer from "../Pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Pages/ItemListContainer/ItemListContainer";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/category/:name",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/cart",
    Element: Cart,
  },
  {
    id: 4,
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 5,
    path: "/checkout",
    Element: Checkout,
  },
];
