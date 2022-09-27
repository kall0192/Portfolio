import { Routes, Route, Navigate, } from "react-router-dom";
import NavHeader from './components/NavHeader';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import MobileMenu from "./components/components";
import { Footer } from "./components/components";
import './App.css';

function App () {
  return (
    <>

      


    {/*Desktop header*/}
    <header className="app-header">
    <div className="flex_parent">

      <div className="flex_child">
          <NavHeader className="nav_logo" />
      </div>

      <div className="flex_child2">
        <Nav />
            <div className="routes_mobile">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
      </div>
    </div>

    </header>

    {/*Mobile header*/}

    <div>
      <MobileMenu />
    </div>
    
    {/*Footer*/}
    <Footer />
    </>
  );
}

export default App;
