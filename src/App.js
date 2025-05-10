import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home/homepage'
import HomeProduct from './pages/homeProducts/homeProducts'
import Product from './pages/product/product';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
