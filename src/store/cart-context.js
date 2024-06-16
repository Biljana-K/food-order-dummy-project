import React from "react";

const CartContext = React.createContext({
  //note:items in this object will not be used, but are here for better autocompletion.
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
