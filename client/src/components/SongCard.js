import styled from "styled-components";
import SongContainer from "../SongContainer";




const SongCard = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
padding: 10px;
margin: 10px;

&:hover{
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`

export default SongCard

