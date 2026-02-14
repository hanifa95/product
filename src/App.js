import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/product";
import "bootstrap/dist/css/bootstrap.min.css";
import Getproduct from "./pages/getproduct";
import Detail from "./pages/detail";
import Addproduct from "./pages/addproduct";
import Newproduct from "./pages/newproduct";
import Detailproduct from "./pages/detailproduct";
import User from "./pages/user";
import Detailuser from "./pages/detailuser";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>}></Route>
          <Route path="/getproduct" element={<Getproduct/>}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
          <Route path="/addproduct" element={<Addproduct/>}></Route>
          <Route path="/newproduct" element={<Newproduct/>}></Route>
          <Route path="/detailproduct/:id" element={<Detailproduct/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/detailuser/:id" element={<Detailuser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
