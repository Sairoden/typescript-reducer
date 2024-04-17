import { ReactNode } from "react";

type ShopProps = {
  children: ReactNode;
};

function Shop({ children }: ShopProps) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}

export default Shop;
