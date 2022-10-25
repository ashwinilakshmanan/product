import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import ProductList from './component/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='products/:productId' element={<ProductDetail/>}/>
    </Routes>
    
    </>
  );
}

export default App;
