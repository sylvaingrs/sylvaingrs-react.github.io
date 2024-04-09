import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";

import { Routes, Route } from "react-router-dom";

import { Flowbite } from "flowbite-react";

function App() {
  return (
    <>
      <Flowbite>
        <NavbarApp />
        <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
        </Routes>
        <FooterApp />
      </Flowbite>
    </>
  );
}
export default App;
