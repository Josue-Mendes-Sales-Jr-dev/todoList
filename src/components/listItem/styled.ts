import styled from "styled-components";
 
type ContainerProps={
    done:boolean;
}
export const Container=styled.div(({done}:ContainerProps)=>(
    `
background-color:#Fff;
color:#0dF;
max-width:35rem;
min-height: 1.5rem;
border:2px solid #0df;
border-radius:1rem;
text-align: center;
padding:0;
margin:1rem auto;
display:flex;
justify-content:center;
align-items:center;



input{
    width:40px;
    height:35px;

}
h1{
    text-transform:capitalize;
    display:flex;
    flex-basis:20rem;
    min-height:4.8rem;
    justify-content:center;
    align-items:center;
    word-break: break-all; 
    text-decoration: ${done ? "line-through":"initial"}
}


@media screen and (max-width: 800px) {
    max-width:20rem;
    min-height:12rem;
    border-top:15px solid #0dF;
   

    h1{
        word-break: break-all; 
        flex-basis:15rem;
        padding-bottom: 1rem;
    }
    
  }
`
))

