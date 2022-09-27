import burgermenu from "../images/burgermenu_white.png";
import logo from '../images/kmersh_hvid.svg';
import linkedin from '../images/linkedin.svg';
import facebook from '../images/facebook.svg';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import NavHeader from '../components/NavHeader';
import portrait from '../images/portrait.jpeg'
import Nav from "../components/Nav";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


export default function MobileMenu () {
    const [burgerMenuIsShown, setIsShown] = useState(false);

    let location = useLocation()
    
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      console.log(burgerMenuIsShown);
    };

    useEffect(() => { setIsShown(current => false)}, [location])
    
    return (
      <>
      
      <header className="app-header_mobile">
          <a href="/">
            <img className="nav_logo" src={logo} alt="logo" />
          </a>
            <button onClick={handleClick}><img className="burgermenu" src={burgermenu} alt="Menubar for mobile devices" /></button>
        
      </header>
   

        <div>
          {burgerMenuIsShown && <BurgerMenu />}

          <Routes>
              <Route path="/" element={<HomePage />}  />
              <Route path="/about" element={<AboutPage />}   />
              <Route path="/contact" element={<ContactPage />}   />
              <Route path="*" element={<Navigate to="/" />}   />
          </Routes>
        </div>
      </>
    );
}

function BurgerMenu() {
  return <>
    <div className="burger">
      <Nav />
    </div>
  </>
}

export function Footer() {
  return(
    <>
    
<div class="footer">
  <div class="contain">
    <div class="col">
      <a href="/">
       <h1>Home</h1> 
      </a>
    </div>

    <div class="col">
      <a href="/about">
        <h1>About</h1>
      </a>
    </div>

    <div class="col">
      <a href="/contact">
        <h1>Contact</h1>
      </a>
        <ul>
          <li>
            +45 31 22 54 09
          </li>
          <li>
            kalle.mersh@live.dk
          </li>
        </ul>
    </div>
  <div class="col_img">
    <a href="https://www.linkedin.com/in/kalle-mersh-96333821b/">
      <img src={linkedin} alt="linkedin"></img>
    </a>
    <a href="https://www.facebook.com/kalle.mersh">
    <img src={facebook} alt="facebook"></img>
    </a>
  </div>
<div class="clearfix"></div>
</div>
</div>

    </>
  );
}

export function HomePageContent () {
  return(
    <>
<div class="bg-img">
  <div class="nav_container">
    <div class="topnav">
      <NavHeader className="nav_logo" />
      <div className="nav">
        <Nav />
      </div>
    </div>
  </div>
  <section className='home_title_desktop'>
    <div className='portrait'>
      <img src={portrait} alt="Portrait of Kalle Mersh"></img>
    </div>
    <div className='title'> 
      <h3> Kalle Mersh | <br></br> Multimediadesigner</h3>
    </div>
  </section>
</div>
</>
  );
}





