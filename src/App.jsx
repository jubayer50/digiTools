import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PremiumDigital from "./Components/PremiumDigital/PremiumDigital ";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import Products from "./Components/Products/Products";
import Started from "./Components/Started/Started";
import Stats from "./Components/Stats/Stats";
import Tabs from "./Components/Tabs/Tabs";
import Transform from "./Components/Transform/Transform";

const getPricingPromise = async () => {
  const res = await fetch("/pricingCard.json");
  return res.json();
};
const pricingPromise = getPricingPromise();

const productsPromise = fetch("/products.json").then((res) => res.json());

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <PremiumDigital></PremiumDigital>

      <Tabs></Tabs>

      <Products productsPromise={productsPromise}></Products>

      <Started></Started>

      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

      <Transform></Transform>

      <Footer></Footer>
    </>
  );
}

export default App;
