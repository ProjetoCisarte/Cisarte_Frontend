import styled from "styled-components";


export const CardConteiner = styled.aside`
width: 22.4rem;
height: 19rem;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
gap: 1rem;
padding: 10px;


@media screen and (max-width:1020px) {
   width:17rem;
   height: 20rem;
   gap: 0.3rem;
    };
@media screen and (max-width:750px) {
    width: 22.4rem;
    height: 19rem;
    gap: 1rem;
    };

@media screen and (max-width:420px) {
   width:17rem;
   height: 17rem;
   gap: 0.3rem;
    };

    h4{
        font-weight: 600;
        font-size: 1.2rem;
        font-family: 'Source Sans 3';

            @media screen and (max-width:420px) {
            font-size: 1rem;
            };

}

        p{
        font-size: 1rem;
        font-family: 'Source Sans 3';

            @media screen and (max-width:420px) {
            font-size: 0.8rem;
            };
}

&:hover{
    border: 5px solid #FEBF29;
    border-radius: 10px;
    border-bottom: none ;
    border-left:none ;
    border-right: none;
    transition: 0.3s;


    >button{
        background-color: transparent;
        border: 2px solid #126E30;
        color: #126E30;
    }
}
`;

export const ButtonCard = styled.button`
padding: 3px 22px;
background-color: #126E30;
border: 0;
border-radius: 10px;
color: #fff;
`

