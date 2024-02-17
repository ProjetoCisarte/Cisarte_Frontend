import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Voluntary from "./pages/voluntary/voluntary";
import ContactUs from "./pages/contactUs/contact-us";

function RouterApp() {

    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}>Home</Route> */}
          <Route path="/voluntariado" element={<Voluntary />}></Route>
          <Route path="/faleconosco" element={<ContactUs />}></Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp