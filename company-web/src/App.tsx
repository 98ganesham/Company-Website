import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#000",
      helper: "#8490ff",
      darkgreen: "#006400",
      darkpink: "#aa3364a",
      bg: "rgba(249 249 255 0.2)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(132 123 29 )0%, rgb(29 29 24)100%)",
      shadow:
        "rgba(0,0,0,0.2) 0px 1px 3px 0px ,rgba(27, 31, 35, 0.15) 0px 0px 0px 10px",
      shadowSupport: "rgba(0 0 0 0.16) 0px 1px 4px",
    },
    media: { mobile: "720px", tap: "1024px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
