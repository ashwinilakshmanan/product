import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import CategoryFiltering from "./component/CategoryFiltering";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex ">
          <div className="col-lg-3 ">
          <CategoryFiltering/>
          </div>
          <div className="col-lg-9 div-container ">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
