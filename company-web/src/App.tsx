
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='team' element={<Team/>} />
          <Route path='contact' element={<Contact />} />
        </Routes>
          
        
      </BrowserRouter>
    </div>
  )
}

export default App