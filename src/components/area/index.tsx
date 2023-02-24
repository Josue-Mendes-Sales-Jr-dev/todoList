import * as A from "./styled"
import { KeyboardEvent,useState} from "react"


type Props={
     onEnter:(task:string)=>void;
}
export const Area=({onEnter}:Props)=>{
    const[todo, setTodo]=useState('')
    
    const handleKeyUp=(e:KeyboardEvent)=>{
        console.log(e.code)
        if(e.code=="Enter"&&todo!==""){
            onEnter(todo)
            setTodo("")
        }
       
    }

    return(
        <>
           <A.Container>
            <div >+</div>
            <input type="text" 
            placeholder="Digite uma tarefa"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            onKeyUp={handleKeyUp}
            />
           </A.Container>
        </>
    )
}