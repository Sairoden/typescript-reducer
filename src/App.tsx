// COMPONENTS
import { Header, Shop, Product } from "./components";

// DATA
import { DUMMY_PRODUCTS } from "./assets/data/dummy-products";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;

// 91
