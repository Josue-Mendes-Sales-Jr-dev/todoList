
import * as C from "./App.styled"
import { Item } from "./types/Item"
import {ListItem} from "./components/listItem"
import { useState } from "react"
import {Area} from "./components/area"

const App=()=>{
const[list, setList]=useState<Item[]>([
  {id:1,name:"Correr", done:false },
  {id:2,name:"andar a cavalo", done:false },
])
const handleAddTask=(task:string)=>{
  let newList=[...list]
  newList.push({
    id:Math.random(),
    name:task,
    done:false,
  })
  setList(newList)
 
}
const Remove=(id)=>{
  console.log(id)
  const newList=list.filter((list)=>list.id!==id)
  setList(newList)
}

  return ( 
       <C.Container>
         <C.Area>
          <C.Header>
           Title de Tarefas
          </C.Header>
          <Area onEnter={handleAddTask}/>
          {list.map((Item, index)=>(
             <>
             <ListItem key={index} item={Item} />
             <C.Button onClick={()=>Remove(Item.id)}>Remove</C.Button>
             </>
           ))}
         </C.Area>
       </C.Container>
  )
}

export default App
