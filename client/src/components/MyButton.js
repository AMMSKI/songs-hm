import styled from "styled-components"




const MyButton = styled.button`
  background-color: #00ffff; 
  border: none;
  color: balck;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;  

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  &:active{
    transform: scale(0.9)
  }
`


export default MyButton