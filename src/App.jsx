import './App.css'
import Counter from './counter'
import Team from './Team'
import Frinds from './frinds'
import Post from './post'
import Posts from './posts'


function App() {
function handleClick (){
   alert('Button clik')
}

const handleclick2 = ()=>{
  alert('button clik 2')
}

 const addFive = (num)=>{
  alert(num+7) 
 }

  return (
    <>
    <Posts></Posts>
    <Post></Post>
      <h1>React Core consept 2</h1>
      <Frinds></Frinds>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Handle</button>
      <button onClick={handleclick2}>clik2</button>
      <button onClick={()=>{
        addFive(456)
      }}>add five</button>

      
    </>
  )
}
export default App
