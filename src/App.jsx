import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Started from "./Components/Started/Started";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Started></Started>
    </>
  );
}

export default App;
