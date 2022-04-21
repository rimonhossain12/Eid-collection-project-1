import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './Pages/Shared/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home />}></Route>
       <Route path='AddProduct' element={<AddProduct/>}></Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
