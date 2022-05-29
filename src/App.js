import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Booking from './Pages/Home/Products/Booking/Booking';
import Home from './Pages/Home/Shared/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import PrivateRouter from './Pages/Login/PrivateRoute/PrivateRouter';
import DashBoardHome from './Pages/DashBoard/DashBoardHome/DashBoardHome';
import UserOrders from './Pages/DashBoard/UserOrder/UserOrders';
import AllOrders from './Pages/DashBoard/AllOrders/AllOrders';
import Admin from './Pages/DashBoard/MakeAdmin/Admin';
import AdminRoute from './Pages/Login/Admin/AdminRoute';
import Profile from './Pages/DashBoard/Profile/Profile';
import UserReview from './Pages/DashBoard/UserReview/UserReview';
import MangeProducts from './Pages/DashBoard/MangeProduct/MangeProducts';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Subscribers from './Pages/DashBoard/Susbcribers/Subscribers';
import AllProducts from './Pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/AllProducts' element={<AllProducts />} />
            <Route path='/DashBoard' element={<DashBoardHome/> }/>
            <Route
              path='/order/:productId'
              element={
                <PrivateRouter>
                  <Booking />
                </PrivateRouter>
              }
            />
            <Route path='/DashBoard' element={<PrivateRouter><DashBoardHome/></PrivateRouter>}>
              <Route exact path='/DashBoard' element={<Profile/>}/>
              <Route path='/DashBoard/userOrder' element={<UserOrders/>}/>
              <Route path='/DashBoard/userReview' element={<UserReview />} />
              <Route path='/DashBoard/allOrders' element={<AdminRoute><AllOrders /></AdminRoute>}/>
              <Route path='/DashBoard/addProducts' element={<AdminRoute><AddProduct /></AdminRoute>}/>
              <Route path='/DashBoard/mangeProduct' element={<AdminRoute><MangeProducts /></AdminRoute>}/>
              <Route path='/DashBoard/makeAdmin' element={<Admin/>} />
              <Route path='/DashBoard/subscribers' element={<Subscribers/>} />
              <Route path='/DashBoard/makeAdmin' element={<AdminRoute><Admin /></AdminRoute>}/>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/reset' element={<ResetPassword />}></Route>
          </Routes>
        </BrowserRouter>,
      </AuthProvider>
    </div>
  );
}

export default App;
