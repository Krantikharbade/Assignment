import React, { useState } from "react";
import Todo from "./Todo";
import List from "./List";
const App =() =>{

const [inputList, setInputList] = useState( "");
const[Items,setItems]= useState([]);
const itemEvent=(event)=>{
  setInputList(event.target.value)
};
const listofItem=()=>{
  setItems((oldItems)=>{
    return[...oldItems, inputList];
  });
  setInputList("");
};
const deleteitem=(id)=>{
  console.log("deleted");
  setItems((oldItems)=>{
    return oldItems.filter((arrele,index)=>{
      return index !==id;
    })
  })
};

    return(
      <>
      
        <div className="main_div">
        <div className="center_div">
        <br  />
        <h1>Things to do</h1>
        <br />
        <input type="text"  placeholder ="Add a items" 
        value={inputList}
        onChange={itemEvent} />
        <button onClick={listofItem}> +
</button>
        <ol>{/*
          <li>
            { inputList}
          </li>*/}
{Items.map( (itemval,index)=> {
  return <Todo key={index} id={index}
    text={itemval}
    onSelect={deleteitem}
  />;
})}



        </ol>
        </div>

        </div>
    </>
    );
};

export default App;