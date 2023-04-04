import './App.scss';
import { useState } from "react";
import Products from './Components/products/Products';

const apiUrl = process.env.REACT_APP_JSON_SERVER_PORT;

function App() {
  const [products, setProducts] = useState([])
  async function getProducts() {
    try {
      const response = await fetch(`http://localhost:${apiUrl}/products`);
      const responseData = await response.json()
      // console.log({ response, responseData });
      setProducts(responseData)
    }
    catch (err) {
      console.log(err);
    }
  }


  return <div className="App">
    {
      Array.isArray(products) && products.length ?
        <Products products={products} setProducts={setProducts} />
        :
        <button className="get-products-btn" data-testid="get-btn" onClick={getProducts}>
          Get Products
        </button>
    }
  </div>;
}

export default App;
