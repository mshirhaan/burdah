import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import BurdaContainer from "./components/Burda/BurdaContainer/BurdaContainerBeta";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { useLayoutEffect, useState } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./components/ThemeContext";
import Credits from "./components/Credits/Credits";

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location, navigate]);

  return null;
};

function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const showBackDropHandler = (show: any) => {
    setShowBackdrop(show);
  };

  return (
    <div className={`${theme == "dark" ? "dark" : ""}`}>
      <ScrollToTop />
      <Header
        showBackdrop={showBackdrop}
        setShowBackdrop={showBackDropHandler}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/credits" element={<Credits />}></Route>
        <Route path="chapters/:chapterId" element={<BurdaContainer />}></Route>
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
