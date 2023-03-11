import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Nosotros from "./Components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        {/* <Route path="/navBar" element={} /> */}
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="*" element={<h1>error 404: Not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
