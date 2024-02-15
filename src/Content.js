import React from "react";
import ItemsList from "./ItemsList";

/* switch words when clicked using usestate and functional
function Content() {
  const [name, setName]=useState("Nice")

    function handleNameChange(){
        const names=["Good","Wonderfull","Blissfull"];
        const int = Math.floor(Math.random()*3);
        setName (names[int])
      } */

/*  const handleClick = (e) =>{
      console.log(e.target.innerText)
    }
    const handleClick1 = (name) =>{
      console.log(`Thanks ${name}`)
    } */

/*     const [count, setCount]=useState(0)

    function incrementFunction(){
      setCount(count => count+1)
    }
    function decrementFunction(){
      setCount(count => count-1)
    } */
/*   return (
    <main>
      <p onDoubleClick={()=> handleClick1('Mahi')}>Let's have a {handleNameChange()} day</p>
      <button onClick={(e)=>handleClick(e)}>Submit</button>//to pass a value in onclick we need to use an anonymous function as on this line {there we don't meed curly braces}
      <button onClick={incrementFunction}>+</button>
      <span>{count}</span>
      <button onClick={decrementFunction} >-</button> 
      <p>Let's have a {name} day</p>
      <button onClick={handleNameChange}>Change the above line</button>
    </main>
    
  ) */

//}

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
