import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/services" element={<Services/>}> </Route>
        <Route path="/service/:serviceId" element={<ServiceDetail/>}></Route>
        <Route path="/blogs" element={<Blogs/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/register" element={<Register/>}> </Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}> </Route>
        
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
