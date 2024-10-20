import { useEffect, useState } from "react"
import Posts from "./posts"

export default function Post(){

    const [post, setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div className="box">
            <h3>core concepts recap {post.length}</h3>
            {
                post.map(posts => <Posts posts={posts}></Posts>)
            }

        </div>
    )
}