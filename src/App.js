import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a tu prózimo vuelo"} />
      <ProductCard
        title={"Dji Avata FPV combo"}
        price={650000}
        hayStock={true}
      />
      <ProductCard title={"Dji FPV combo"} price={580000} hayStock={true} />
      <ProductCard title={"Dji Helices"} price={10000} hayStock={true} />
      <ProductCard title={"Dji Bolso"} price={85000} hayStock={false} />
      <Footer />
    </div>
  );
}

export default App;
