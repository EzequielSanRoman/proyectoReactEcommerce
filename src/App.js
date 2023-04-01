import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <CustomNavbar />
        <Routes>
          {/* <Route path="/navBar" element={} /> */}
          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/formulario" element={<Form />} />

          <Route path="*" element={<h1>error 404: Not found</h1>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
