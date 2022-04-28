import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Booking from './Pages/Home/Products/Booking/Booking';
import Home from './Pages/Home/Shared/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import Products from './Pages/Home/Products/Products/Products';


function App() {
  return (
  <div className="App">
      <AuthProvider>
        <Router>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path='/home' element={<Home />} />
            <Route path='/addProduct' element={<AddProduct />} /> */}
            <Route path='/products/' element={<Products />}></Route>
            <Route  path='/order/:productId' element={<Booking />} />
            <Route  path='/login' element={<Login />}></Route>
            <Route  path='/register' element={<Register />}></Route>
          </Routes>
        </Router>,
      </AuthProvider>
    </div>
  );
}

export default App;
