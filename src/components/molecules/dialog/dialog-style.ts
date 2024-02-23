import styled from "styled-components";

interface DialogProps {
  visible: boolean;
}

export const DialogArticle = styled.article`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  padding: 2rem 0;
`;


export const DialogDetails = styled.aside<DialogProps>`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 0px;
  position: absolute;
  bottom: 0;
  background-color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden; 
  max-height: ${(props) => (props.visible ? "500px" : "55px")};
  transition: max-height 0.5s ease-in-out;
`;

export const DialogSummary = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  line-height: 35px;
  color: #126e30;
  font-weight: 700;
  text-align: center;
  padding-right: 25px;
  padding-left: 25px;
  cursor: pointer;
`;


// é só lembrar daquela música lá, 180, 180, trezentos e sessentaaaa, kkkkkkkkkkkkkkkkkkk 
// (troca 130deg é na diagonalzinha pra cima, apontando pra direita, -130 é o reverso)
export const DialogButton = styled.button<DialogProps>`
background-color: white;
transition: all 0.6s ease-in-out;
rotate: ${(props) => (props.visible ? "0deg" : "-90deg")};
border: none;
`
export const DialogContent = styled.p<DialogProps>`
  transition: all 0.6s ease-in-out;
  font-size: 14px;
  color: ${(props) => (props.visible ? "black" : "white")};
  padding-top: ${(props) => (props.visible ? "10px" : "0")};
  padding-left: 8px;
  padding-right: 8px;
  margin: 0;
`;

export const DialogAside = styled.aside`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

export const DialogPicture = styled.picture<DialogProps>`
  width: 100%;
  border-radius: 20px;
  background-color: black;
`;

export const DialogImage = styled.img<DialogProps>`
  width: 100%;
  border-radius: 20px;
  transition: 0.4s ease-in-out;
  opacity: ${(props) => (props.visible ? "50%" : "100%")};
`;

// eu odeio styled components! 