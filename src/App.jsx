import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Cart from "./Components/Cart";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  // console.log(item);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="products" element={
          <>
              <div className="card-container pt-40">
                {item.map((it) => (
                  <Card key={it.id} item={it} />
                ))}
              </div>
            </>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
