// REACT
import { useState } from "react";

// COMPONENTS
import { Cart } from "./index";

// STORE
import { useCartSelector } from "../store/hooks";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartQuantity = useCartSelector(state =>
    state.items.reduce((acc, curr) => acc + curr.quantity, 0)
  );

  const handleOpenCartClick = () => {
    setCartIsVisible(true);
  };

  const handleCloseCartClick = () => {
    setCartIsVisible(false);
  };

  return (
    <>
      {cartIsVisible && <Cart onCloseCartClick={handleCloseCartClick} />}

      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>

        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

export default Header;
