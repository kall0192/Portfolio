import Nav from "../components/Nav";
import NavHeader from '../components/NavHeader';
import linkedin_black from '../images/linkedin_black.svg';
import facebook_black from '../images/facebook_black.svg';

export default function ContactPage() {
    return (
        <>
       
        <div class="nav_container2">
        <div class="topnav">
          <NavHeader className="nav_logo" />
          <div className="nav">
            <Nav />
          </div>
        </div>
        </div>
        <section className="contact_page">
          <div className="contact_bg">
            <div className="contact_text">
                <h1>CONTACT</h1>
                <div className="contact_line"></div>
                <p>Kalle Holmgaard Mersh </p> 
                <p>+45 31 22 54 09</p>
                <p>kalle.mersh@live.dk</p>
                <p>Århus, Denmark</p>
                <h4>Lets get in touch</h4>
                <div className="contact_line"></div>
                <div className="contact_icons">
                   <a href="https://www.linkedin.com/in/kalle-mersh-96333821b/">
                        <img src={linkedin_black} alt="linkedin"></img>
                   </a>
                   <a href="https://www.facebook.com/kalle.mersh">
                        <img src={facebook_black} alt="facebook"></img>
                   </a>
                </div>
            </div>
          </div>

          {/*Desktop format*/}

          <div className="contact_bg_desktop">
            <div className="contact_text">
                <h1>CONTACT</h1>
                <div className="contact_line"></div>
                <p>Kalle Holmgaard Mersh </p> 
                <p>+45 31 22 54 09</p>
                <p>kalle.mersh@live.dk</p>
                <p>Århus, Denmark</p>
                <h4>Lets get in touch</h4>
                <div className="contact_line"></div>
                <div className="contact_icons">
                   <a href="https://www.linkedin.com/in/kalle-mersh-96333821b/">
                        <img src={linkedin_black} alt="linkedin"></img>
                   </a>
                   <a href="https://www.facebook.com/kalle.mersh">
                        <img src={facebook_black} alt="facebook"></img>
                   </a>
                </div>
            </div>
          </div>

        </section>
    
    </> 
    );
}