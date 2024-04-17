// LIBRARIES
import { Provider } from "react-redux";

// COMPONENTS
import { Header, Shop, Product } from "./components";

// DATA
import { DUMMY_PRODUCTS } from "./assets/data/dummy-products";

// STORE
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;

// 91
