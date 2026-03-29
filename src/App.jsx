import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Started from "./Components/Started/Started";
import Stats from "./Components/Stats/Stats";
import Transform from "./Components/Transform/Transform";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Started></Started>

      <Transform></Transform>

      <Footer></Footer>
    </>
  );
}

export default App;
