import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import Started from "./Components/Started/Started";
import Stats from "./Components/Stats/Stats";
import Transform from "./Components/Transform/Transform";

const getPricingPromise = async () => {
  const res = await fetch("/pricingCard.json");
  return res.json();
};
const pricingPromise = getPricingPromise();

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Started></Started>

      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

      <Transform></Transform>

      <Footer></Footer>
    </>
  );
}

export default App;
