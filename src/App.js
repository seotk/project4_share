import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import "./css/App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Detail from "./pages/Detail";
import About from "./pages/About";
import data from "./data";
import items from "./tour";

function App() {
  let [products] = useState(data);
  // let [tourList] = useState(items);
  // console.log(tourList);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main list={products} />}></Route>
        <Route path="/Shop" element={<Shop list={products} />}></Route>
        <Route path="/ESSENTIALS" element={<div>ESSENTIALS</div>}></Route>
        <Route path="/BESTSELLERS" element={<div>BESTSELLERS</div>}></Route>
        <Route path="/ABOUT" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail list={products} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
