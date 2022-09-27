import image from '../images/coding.jpg';
import { HomePageContent } from '../components/components';
import portrait from '../images/portrait.jpeg'
import PostItem from '../components/PostItem';
import {useState, useEffect} from 'react';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
        useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.kallemersh.dk/wp-json/wp/v2/posts?_embed&v=9999");
            const data = await response.json();
                        console.log(data);
            setPosts(data);
        }
        getData();
    }, []); 

    return (
        <>

        <HomePageContent />


        <section className="page_mobile">
        </section>

        <section className='homepage_img_section'>
            <img className='homepage_img' src={image} alt="React"></img>
        </section>

        <section className='home_title'>
            <div className='portrait'>
                <img src={portrait} alt="Portrait of Kalle Mersh"></img>
            </div>
            <div className='title'> 
                <h3>Kalle Mersh | Multimediadesigner </h3>
            </div>
        </section>

            <div className='line'></div>
            <div className='title_projects'>
                <h4>Previous projects</h4>
            </div>

            <section className="grid-container">
                {posts.map(post => (
		        <PostItem key={post.id} post={post} />
             ))}
            </section>


        </>
    );
}

