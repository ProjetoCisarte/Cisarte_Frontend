import styled from "styled-components";

export const MainAboutUs = styled.main`
font-family: 'Source Sans 3';
`

export const AboutArticle = styled.article`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;
margin: 30px;

@media screen and (min-width:1230px) {
flex-direction: row;
justify-content: space-around;
margin: 4rem 7rem;
}

>div{
   text-align: center;

   @media screen and (min-width:1230px) {
      text-align: start;
}

      >p{
         text-align: start;
         font-size: 1rem;

         @media screen and (min-width:1230px) {
         font-size:1.1rem;
         }
         }
}

>img{
      width: 300px;

      @media screen and (min-width:1030px) {
      width: 500px;
      }
      }
`

export const AboutSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem;
gap: 3rem;

@media screen and (min-width:1230px) {
margin: 4rem;
padding: 3rem;
gap: 14rem;
flex-direction: row-reverse;
border-radius: 20px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);}

      >img{
         width: 300px;

         @media screen and (min-width:1030px) {
         width: 500px;
         }
      }
`
export const ConteinerAboutUs = styled.div`

>div{
   display: flex;
   align-items: center;
   
      >div{ 
         margin: 4px;

         @media screen and (min-width:1230px) {
         width: 70%;
         border: 1px solid #000;
         border-top: none;
         border-left: none;
         border-right: none;
         margin-top: 3rem ;
         }

         >h5{
            font-family: 'Source Sans 3';
            font-weight: 700;
            color: #126E30;

            @media screen and (min-width:1230px){
               font-size: 1.7rem;
            }
         }

         >p{
            font-weight: 500;
            @media screen and (min-width:1230px){
               font-size: 1.2rem;
            }
         }
         }

      >img{
         width: 80px;
         height: 80px;
         background-color: #FEBF29;
         padding: 10px;
         margin: 10px;
         border-radius: 80px;
         align-items: center;
         transition: background 0.9s;

         &:hover{
            background: #4F4F4F;
         }
         
      }

   }
`