import "./App.css";
import AboutUs from "./components/AboutUs";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageTextLayout from "./components/ImageTextLayout";

function App() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <AboutUs />
      <ImageTextLayout />
      <Footer />
    </div>
  );
}

export default App;
