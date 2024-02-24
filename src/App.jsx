import { Home } from "./page/home/home.jsx";
import { Cart } from "./page/cart/cart.jsx";
import { Article4Copy } from "./carousel/carousel.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Product } from "./page/product/product.jsx";
import { useState, useRef } from "react";
import { article2 } from "./article2.json";
import { ErrorPage } from "./page/Error/errorPage.jsx";
import Forum from "./page/forum/forum.jsx";
import { Crazyrush } from "./page/crazyrush/crazyrush.jsx";
function App() {
  const [contador, setcontador] = useState(0);
  const [allProduct, setallProduct] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [precio, setPrecio] = useState(0);
  const addToCart = (product) => {
    const productExists = allProduct.find((item) => item.id === product.id);
    if (productExists) {
      setallProduct(
        allProduct.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setallProduct([...allProduct, { ...product, qty: 1 }]);
    }
  };
  localStorage.setItem("cartItems", JSON.stringify(allProduct));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                contadorPro={contador}
                setcontadorPro={setcontador}
                precio={precio}
                setPrecio={setPrecio}
              />
            }
          />
          <Route
            path="/originals-forum"
            element={
              <Forum
                addToCart={addToCart}
                contadorPro={contador}
                setcontadorPro={setcontador}
                precio={precio}
                setPrecio={setPrecio}
              />
            }
          />
          <Route
            path="/botines_pack"
            element={
              <Crazyrush
                addToCart={addToCart}
                contadorPro={contador}
                setcontadorPro={setcontador}
                precio={precio}
                setPrecio={setPrecio}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                allProduct={allProduct}
                ProductCart={article2}
                contadorPro={contador}
                addToCart={addToCart}
                precio={precio}
                setPrecio={setPrecio}
                setallProduct={setallProduct}
              />
            }
          />
          <Route
            path="/product/:id/:nombre"
            element={
              <Product
                product={article2}
                addToCart={addToCart}
                contadorPro={contador}
                setcontadorPro={setcontador}
                precio={precio}
                setPrecio={setPrecio}
                allProduct={allProduct}
                setallProduct={setallProduct}
                
              />
            }
          />
          <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage contadorPro={contador}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
