import parse from "html-react-parser";
export default function PostItem ({post}) {

    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <h4>{parse(post.title.rendered)}</h4>
            {parse(post.content.rendered)}
            
            <img src={post.acf.image ? post.acf.image.url : image} alt={post.acf.image ? post.acf.image.alt : "Default billede" }/>
            <p>{post.acf.website ? <a href={post.acf.website}>Check it out here</a> : <p>Intet link</p>}</p>
        </article>
    );
}

