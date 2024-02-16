// to open a snippet command: ctrl+alt+R
// to comment a para use command: shift+alt+A

import Header from "./Header";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
    /* [
   default list
    { id: 1, checked: true, item: "Practice Coding" },
    { id: 2, checked: false, item: "Play Chess" },
    { id: 3, checked: false, item: "Draw" }, 
    ]*/
  );

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item)=>{
    const id = items.length ? items[items.length - 1].id +1 : 1;
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    //localStorage.setItem("todo_list", JSON.stringify (listItems))
  }

  // map egs
  /*  const numbers = [-2,-1,0,1,2]
  const itemss = numbers.map(n => ({number:n}))
  console.log(itemss) */

  const handleCheck =(id)=>{
    const listItems = items.map((item) => 
    item.id===id?{...item, checked:!item.checked}:item)//...item will restore all the parameters in the item in absemce of that it will save only checked and in op we will not able to see the name of the item
    setItems(listItems)
    console.log(`id: ${id}`)
    //localStorage.setItem("todo_list", JSON.stringify(listItems))//to save the latest changes in local storage using js
  }

  const handleDelete =(id)=>{
    const listItems = items.filter((item) => 
    item.id!==id)//...item will restore all the parameters in the item in absemce of that it will save only checked and in op we will not able to see the name of the item
    setItems(listItems)
    //localStorage.setItem("todo_list", JSON.stringify(listItems))//to save the latest changes in local storage using js
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem)return;//we have put required in additem.js form so this is not required but if we don't use require there means it is necessary
    console.log('submitted')
    addItem(newItem)//addItem
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Maheswari's List to do"/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}/>
      <Content 
      items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
