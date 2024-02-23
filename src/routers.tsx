import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Voluntary from "./pages/voluntary/voluntary";
import ArtWorkshop from "./pages/artWorkshop/art-workshop";
import WellnessAndHealthWorkshop from "./pages/wellnessAndHealthWorkshop/wellness-and-health-workshop";
import ServiceWorkshops from "./pages/serviceWorkshops/service-workshops";
import LanguageWorkshops from "./pages/languageWorkshops/language-workshops";

function RouterApp() {

    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}>Home</Route> */}
          <Route path="/voluntariado" element={<Voluntary />}></Route>
          <Route path="/oficinaDeArtes" element={<ArtWorkshop />}></Route>
          <Route path="/oficinaBemEstareSaude" element={<WellnessAndHealthWorkshop />}></Route>
          <Route path="/oficinaServicos" element={<ServiceWorkshops />}></Route>
          <Route path="/oficinaLinguas" element={<LanguageWorkshops />}></Route> 
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp