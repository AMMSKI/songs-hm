import { keyframes } from "styled-components";


const FlipAni = keyframes`
  0% {
    transform: scale(1);
    transform: scale(1);
  }
  50% {
    transform: scale(2) ;
    transform: scale(2) ;
  }
  100% {
      transform: scale(3);
      transform: scale(3) ;
  }
`


export default FlipAni