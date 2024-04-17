// REACT
import { createPortal } from "react-dom";

// COMPONENTS
import { CartItems } from "./index";

type CartProps = {
  onCloseCartClick: () => void;
};

function Cart({ onCloseCartClick }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />

        <p id="cart-actions">
          <button onClick={onCloseCartClick}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}

export default Cart;
