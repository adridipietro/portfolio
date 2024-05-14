import React, { useEffect, useState } from 'react'

function Blog(){
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=am20dipi")
            .then(response => response.json())
            .then(response => {
                setBlogs(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="container" id="blog-container">
            <p className="b-text"><span style={{fontWeight: '300'}}>Here are some of my most recent blog posts.</span> Click to read the full articles.</p> 
            <div className="b">
                <div className="card-columns" id="blog">
                    {blogs.slice(0,6).map((blog, index) => {
                        return (
                            <div className="card" id="blog"  key={index} onClick={() => window.open(blog.canonical_url)}>
                                <img class="card-img-top" src={blog.cover_image} alt={`image-${index}`}></img>
                                <div className="card-body">
                                    <h5 className="card-title" style={{textAlign: 'center', fontWeight: 'bold'}}>{blog.title}</h5>
                                    <br/>
                                    <p className="text-muted"><i className="fa-regular fa-heart"></i> {blog.positive_reactions_count}</p>
                                    <p className="text-muted"><small>{blog.tags}</small></p>
                
                                </div>
                                <div className="card-footer">
                                    <p className="card-text bg-light" style={{borderRadius: '8px'}}><small className="text-muted">Posted on {blog.readable_publish_date}</small></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog