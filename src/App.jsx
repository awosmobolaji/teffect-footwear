
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import CraftSection from "./components/CraftSection";
import ContactSection from "./components/ContactSection";
import Admin from "./components/Admin";

function App() {

  const currentPath = window.location.pathname;

  if (currentPath === "/admin") {
    return <Admin />;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <CategorySection />

      <ProductSection />

      <CraftSection />

      <ContactSection />
    </>
  );
}

export default App;
