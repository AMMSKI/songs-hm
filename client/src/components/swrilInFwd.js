import { keyframes } from "styled-components";


const swirlInFwd = keyframes`
  0% {
    transform:  scale(0);
    transform:  scale(0);
    opacity: 0;
  }
  75% {
    transform:  scale(1.15));
    transform:  scale(1.15);
    opacity: 7;
  }
  100% {
    transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    opacity: 1;
  }
`


export default swirlInFwd

