import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
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
        <Route path="/blogs" element={<Blogs/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
