import styled from "styled-components"

export const Container=styled.div`
     background-color:#Fff;
     color:#000099;
     width:45rem;
     min-height:100vh;
     margin:auto;
    
     @media(max-width:800px){
        width:30rem;
      background-color:#ddf;
        
  }
     `
export const Button=styled.button`
  margin-left:5rem;
  margin-top:-5.5rem;
  position:absolute;
  height:4rem;
  width:5rem;
  border-radius:1rem;
  color:#0f0;
  background-color: #0dF;
  font-size:1rem;

  @media(max-width:800px){
    min-width:20rem;
    margin-left:0rem;
    margin-top:-3rem;
    height:2.2rem;
    border-radius:0rem;
    border:none;
   
}
  
`
export const Area=styled.div`
   margin:auto;
   max-width:980px;
   padding:10px;

   @media(max-width:800px){
    margin:auto;
    max-width:20rem;
}

`
export const Header=styled.h1`
    margin:0;
    padding:0;
    color:#0dF;
    text-align:center;
    border-bottom:3px solid #0df;
    text-transform: Capitalize;
    paddin-bottom:20px;
    padding:1rem;
`


