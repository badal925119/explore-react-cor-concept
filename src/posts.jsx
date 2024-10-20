export default function Posts(posts){
    console.log(posts)
    const {title,id}=posts;
    return(
        <div className="box">
            <h2>Title:{title} </h2>
            <p>id {id}</p>

        </div>
    )
}