import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Link = styled.div`
    color: black;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding: 0px;

    &:after {
        content: " ";
        position: absolute;
        background-color: #FEBF29;
        height: 4px;
        border-radius: 10px;
        width: 0;
        left: 20%;
        bottom: -2px;
        transition: 0.6s;
        font-weight: 800;
    }

    &:hover::after{
        width: 60%;
        transform: none;
    }
`;
