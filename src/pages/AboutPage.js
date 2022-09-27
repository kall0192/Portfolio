import Nav from "../components/Nav";
import NavHeader from '../components/NavHeader';
import portrait from '../images/portrait.jpeg'


export default function AboutPage() {
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
        <section className="page">
        <div className="about_page">
            <br></br>
            <h1>Who am I?</h1>
            <p>My name is Kalle Mersh and I'm currently a 3rd. semester student at Aarhus Erhvervsakademi as a Multimedia designer. Here we learn the processes and the skills to go from a problem to a final product. At the school we do everything from project management, idea generation, understanding the user, development methods to also design and develop digital user interfaces.</p>
            <img src={portrait} alt="Portrait og Kalle Mersh"></img>
            <p>For our 3rd. semester I've chosen to take the Frontend Developer course, which means I work primarily with programming in languages such as HTML, CSS, JavaScript and React. I chose this specific course because there is nothing more satisfying than when your code suddenly works and because I can use hours sitting with code not realizing how fast the time goes by. Another thing I like is entering a dynamic website or app that is interesting to look at and fun to interact with. This makes you really appreciate some websites and inspires you to go even further with your coding abilities. 
            <br></br><br></br>
            Being able to code is also important in a world that only is becoming more digitalized. Not because everyone should be able to code, but just having a general idea of what is going on behind the websites and apps we use so many hours at every day.
            </p>
            <p>Since I started on the multimedia designer course, I've touched programs such as Visual Studio Code, Illustrator, Photoshop, Adobe XD and Premiere Pro. </p>
            <h4>Future dreams</h4>
            <p>In the future I hope to work at a company where I primarily can focus on the programming part but maybe also touch just a little bit of UX and UI. Working with pictures and videos is something that I also could see myself doing a bit of.</p>
            <h4>Hobbies</h4>
            <p>In my spare time I like to do sports that include kicking a leather ball such as playing football. I also try working out at the fitness center as often as possible, but I’m not always to good at getting out of the door. In some rare occasions I can also be catched playing guitar and since I started as a multimedia student, I gained a new hobby which is coding. Of course, I also enjoy a beer here and there and to spend time with my friends and family.</p>
            <br></br><br></br>
          </div>

        </section>
    
    </> 
    );
}
