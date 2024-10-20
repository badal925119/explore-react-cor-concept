export default function Frind({frind}){
    const {name, email}=frind
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}