import { useEffect, useState } from 'react'
import './Frinds.css'
import Frind from './frind'

export default function Frinds(){
    const [friends, setFriends]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
           <div className='box'>
            <h2>Frinds:{friends.length}</h2>
            {
                friends.map(frind => <Frind frind={frind}></Frind>)
            }
           </div>
    )
}