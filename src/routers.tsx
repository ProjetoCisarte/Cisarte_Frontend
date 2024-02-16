import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Voluntary from "./pages/voluntary/voluntary";

function RouterApp() {

    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}>Home</Route> */}
          <Route path="/voluntariado" element={<Voluntary />}></Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp