// REACT
import { useState } from "react";

// COMPONENTS
import { Cart } from "./index";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

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
          <button onClick={handleOpenCartClick}>Cart (0)</button>
        </p>
      </header>
    </>
  );
}

export default Header;
