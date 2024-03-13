import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Voluntary from "./pages/voluntary/voluntary";
import ArtWorkshop from "./pages/artWorkshop/art-workshop";
import WellnessAndHealthWorkshop from "./pages/wellnessAndHealthWorkshop/wellness-and-health-workshop";
import ServiceWorkshops from "./pages/serviceWorkshops/service-workshops";
import LanguageWorkshops from "./pages/languageWorkshops/language-workshops";
import ContactUs from "./pages/contactUs/contact-us";
import { Home } from "./pages/home/home";
import { AboutUs } from "./pages/aboutUs/about";
import { Donation } from "./pages/donation/donation";

function RouterApp() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/doacao" element={<Donation />}></Route>
          <Route path="/voluntariado" element={<Voluntary />}></Route>
          <Route path="/sobre-nos" element={<AboutUs />}></Route>
          <Route path="/oficinaDeArtes" element={<ArtWorkshop />}></Route>
          <Route path="/oficinaBemEstareSaude" element={<WellnessAndHealthWorkshop />}></Route>
          <Route path="/oficinaServicos" element={<ServiceWorkshops />}></Route>
          <Route path="/oficinaLinguas" element={<LanguageWorkshops />}></Route> 
          <Route path="/faleconosco" element={<ContactUs />}></Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp