import React from "react";
import Footer from "./Foot";
import Counter2 from "./Hoc Counters/Counter2";
import Counter from "./Hoc Counters/counter";
function App() {
  // let productList = [
  //   { id: 1929, title: "Awesome Widget", price: 9.99 ,stock:28},
  //   { id: 9257, title: "Gadget X", price: 99.99,stock:67},
  //   { id: 4991, title: "Tech Marvel", price: 129.99,stock:92 },
  //   { id: 2719, title: "Super Gizmo", price: 69.99 ,stock:21},
  // ];
  return (
    <div>
      <Counter/>
      <br/>
      <br/>\
      <Counter2/>
      <Footer />
    </div>
  );
}

export default App;
