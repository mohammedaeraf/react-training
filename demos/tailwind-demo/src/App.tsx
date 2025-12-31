import "./App.css";
import Card2 from "./Card2";
import Card from "./Card";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* <div>
        <Card2></Card2>
      </div> */}
      <div className="font-sans">
        <Navbar></Navbar>
        <Hero></Hero>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
