import React, { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
import Cartcards from "./Cartcards";
import Total from "./Total";

function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  //   console.log(cart);
  return (
    <>
      <h1 className="mb-10 pt-40 text-center text-2xl font-bold">Cart Items</h1>
      {cart.items.map((items) => (
        <Cartcards key={items.id} item={items} />
      ))}
      {cart.items.length ? <Total total={total}/> : <h1 className="text-center">! OOPS Cart is empty !</h1>}  
    </>
  );
}

export default Cart;
