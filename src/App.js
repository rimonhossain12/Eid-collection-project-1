import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Booking from './Pages/Home/Products/Booking/Booking';
import Home from './Pages/Home/Shared/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import Products from './Pages/Home/Products/Products/Products';
import PrivateRouter from './Pages/Login/PrivateRoute/PrivateRouter';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/products/' element={<Products />}></Route>

            <Route
              path='/order/:productId'
              element={
                <PrivateRouter>
                  <Booking />
                </PrivateRouter>
              }
            />

            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>,
      </AuthProvider>
    </div>
  );
}

export default App;
