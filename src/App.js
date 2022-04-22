import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Pages/Shared/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import Products from './Pages/Products/Products/Products';
import Booking from './Pages/Products/Booking/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='product' element={<Products/>}>
            <Route path=':/productId' element={<Booking/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
