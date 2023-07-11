import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        
          <Home />
          <About />
          <Team />
          <Contact />
        
      </BrowserRouter>
    </div>
  )
}

export default App