import * as L from "./styled"
import { Item } from "../../types/Item"
import { useState } from "react"
type Props={
    item:Item
    
}
  
export const ListItem=({item}:Props)=>{
    const[isChecked,setIschecked]=useState(item.done)
    
    
    console.log(isChecked )
    return(
        <>
        <L.Container done={isChecked}>
            <h1>
                {item.name}
            </h1>
            <input
            placeholder="ckec"
            type="checkbox"
            checked={isChecked}
            onChange={(e)=>setIschecked(e.target.checked)}
            />
        </L.Container>
        </>
    )
}