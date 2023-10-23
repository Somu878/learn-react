import React from "react";
import Footer from "./Foot";
import Box from "./box";

function App() {
  let productList = [
    { id: 1929, title: "Awesome Widget", price: 9.99 ,stock:28},
    { id: 9257, title: "Gadget X", price: 99.99,stock:67},
    { id: 4991, title: "Tech Marvel", price: 129.99,stock:92 },
    { id: 2719, title: "Super Gizmo", price: 69.99 ,stock:21},
    { id: 8979, title: "Incredible Device", price: 149.99,stock:4 },
  ];
  return (
    <div>

      {productList.map((item) => {
        return <Box key={item.id} title={item.title} price={item.price}stock={item.stock}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
