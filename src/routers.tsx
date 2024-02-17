import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Voluntary from "./pages/voluntary/voluntary";
import ArtWorkshop from "./pages/artWorkshop/art-workshop";

function RouterApp() {

    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}>Home</Route> */}
          <Route path="/voluntariado" element={<Voluntary />}></Route>
          <Route path="/oficinaDeArtes" element={<ArtWorkshop />}></Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp