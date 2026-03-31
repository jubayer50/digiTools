import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CartProducts from "./Components/CartProducts/CartProducts";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PremiumDigital from "./Components/PremiumDigital/PremiumDigital ";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import Products from "./Components/Products/Products";
import Started from "./Components/Started/Started";
import Stats from "./Components/Stats/Stats";
import Tabs from "./Components/Tabs/Tabs";
import Transform from "./Components/Transform/Transform";
import { toast, ToastContainer } from "react-toastify";

const getPricingPromise = async () => {
  const res = await fetch("/pricingCard.json");
  return res.json();
};
const pricingPromise = getPricingPromise();

const productsPromise = fetch("/products.json").then((res) => res.json());

function App() {
  const [tabsActive, setTabsActive] = useState("products");
  const [carts, setCarts] = useState([]);

  const cartsUpdate = (product) => {
    const isExisting = carts.find((item) => item.id == product.id);

    if (!isExisting) {
      setCarts([...carts, product]);
      toast.success("Item added in the cart!");
    } else {
      toast.warn("Already this item in the cart!");
    }
  };

  return (
    <>
      <NavBar carts={carts}></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <PremiumDigital></PremiumDigital>

      <Tabs setTabsActive={setTabsActive} carts={carts}></Tabs>

      {tabsActive === "products" && (
        <Products
          productsPromise={productsPromise}
          cartsUpdate={cartsUpdate}
        ></Products>
      )}

      {tabsActive === "cart" && (
        <CartProducts carts={carts} setCarts={setCarts}></CartProducts>
      )}

      <ToastContainer></ToastContainer>

      <Started></Started>

      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

      <Transform></Transform>

      <Footer></Footer>
    </>
  );
}

export default App;
