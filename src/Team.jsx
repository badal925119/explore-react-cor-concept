import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd=()=>{
        setTeam(team+1)
    }

    const handleRemove=()=>{
        setTeam(team-1)
    }

    const sytleTeam={
        border:'2px solid purple',
        margin:'10px',
        padding:'10px',
        borderRadius:'22px'
    }

    return(
        <div style={sytleTeam}>
            <h2>Plyers: {team} </h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )

}