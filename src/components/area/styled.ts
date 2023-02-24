
import styled from "styled-components";

export const Container=styled.div`
background-color:#Fff;
color:#0dF;
min-width:30rem;
min-height: 1.5rem;
border:2px solid #0df;
border-radius:1rem;
text-align: center;
padding:0;
margin:1rem auto;
word-break;
display:flex;
justify-content:center;
align-items:center;

input{
    outline:none;
    background:transparent;
    margin-left:10px;
    height:4rem;
    min-width:30rem;
    padding-left:2rem;
    border:none;
}

@media(max-width:800px){
    min-width:15rem;
    input{   
         min-width:15rem;

    }
}
`