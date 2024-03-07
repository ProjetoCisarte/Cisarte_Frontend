import styled from "styled-components";

export const StyleListComponent =styled.section`

display: flex;
flex-direction: row;
gap: 1rem;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin:3rem 0;
margin-right: 2rem;

@media screen and (max-width:580px){
    margin:1rem 0;
margin-right: 2rem;
    }

>ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 350px;
    gap: 30px;

    @media screen and (max-width:580px){
        width: 250px;
    }
    >li{

        
        >img{
            width: 80px;
            height: 80px;
            border-radius:40px;
            padding: 20px;
            background-color: #126E30;
            border: 40px;
            transition: background 1s;


            @media screen and (max-width:580px){
            width: 50px;
            height: 50px;
            padding: 10px;
    
    
    }
             &:hover{
                background: #4F4F4F;
            }
        }
    
        >p{
            font-family: 'Source Sans 3';
            font-weight: 600;
        }
    }

}
`