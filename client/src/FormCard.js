import styled from "styled-components";
import swirlInFwd from "./components/swrilInFwd";


const FormCard = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
padding: 10px;
margin: 10px;
animation-name: ${swirlInFwd};
animation-duration: 1s;

&:hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`

export default FormCard