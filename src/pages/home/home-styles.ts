
import styled from "styled-components";

export const ContainerMain = styled.main`
margin: 30px 10px;

@media screen and (min-width:490px){
    margin: 20px 40px;

}
@media screen and (min-width:820px){
    margin: 20px 50px;

}
@media screen and (min-width:1020px){
    margin: 20px 50px;

}

`

export const IntroductionHome = styled.section`
display: flex;
flex-direction: column;
justify-content:space-around ;
align-items: center;
text-align: center;
gap: 5rem;
margin-bottom: 3rem;


@media screen and (min-width:820px){
    flex-direction: row;
    margin:2rem 0;
    margin-bottom: 8rem;
    }
`

export const IntroductionText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (min-width:820px){
    text-align: left;
    justify-content: right;
    align-items: flex-start;
    width: 60%;
    
}
@media screen and (min-width:1020px){
    width: 46%;
    margin-top: 30px;
}

`
export const CardVideo = styled.div`
background-image: url(public/assets/imgs/img-video-home.png);
background-position: 0;
background-size: cover;
background-color: #126E30;
width: 14rem;
height: 18rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 1rem;
cursor: pointer;
box-shadow: 40px -28px 0px 10px #126E30;
border-radius:40px;
margin-right: 45px;

&:hover, &:focus{

    >button{

        transition: 1s;
        width: 5.3rem;
        height: 5.3rem;
        background: #126E30;}
        
    }

@media screen and (min-width:420px){
    width: 16rem;
    height: 20rem;
}
@media screen and (min-width:820px){
    width: 20rem;
    height: 22rem;
    position: relative;
    top: 2rem;
}
@media screen and (min-width:1020px){
    width: 22rem;
    height: 27rem;
    position: relative;
    top: 4rem;
}

>button{
    align-items: center;
    border: 10px solid rgba(182, 170, 170, 0.9);
    background-color: #126E30;
    width: 5rem;
    height: 5rem;
    border-radius: 70px;
    background-color: #FEBF29;
    transition: background 2s;

    >img{
        fill: #126E30;
        align-items: center;
        position: relative;
        left: 2px;
        cursor: pointer;
    }
}
`

export const ContainerArticle = styled.section`
display: flex;
flex-direction: column;

@media screen and (min-width:900px){
    margin: 7rem 0;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
}
`

export const ContainerVoluntary = styled.article`
display: flex;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
margin: 3rem 0;
gap: 3rem;

@media screen and (min-width:820px){
  flex-direction: row;
  justify-content: space-around;
}

>img{
    width: 16rem;
    border-radius: 20px;

    @media screen and (min-width:820px){
    width: 400px;
}
}
`
export const VoluntaryArticle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (min-width:820px){
    width: 40%;
    align-items: flex-start;
    text-align: start;
}

>div{
    display: flex;
    gap: 2rem;
    
    
    >p{
        display: flex;
        flex-direction: column;
        font-weight: 800;
        color: #000;
        text-align: center;

        @media screen and (min-width:820px){
            font-size: 1.2rem;
            
        }
        
        
        >span{
            font-size: 2rem;
            color: #FEBF29;

            @media screen and (min-width:820px){
            font-size: 3rem;
        
        }
    }
    
}

}
`
export const DonationArticle = styled.article`
display: flex;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
text-align: center;
gap: 3rem;

@media screen and (min-width:820px){
    flex-direction: row-reverse;
    justify-content: space-around;

}

>img{
    width: 350px;

    @media screen and (min-width:820px){
    width:400px;

}
}

>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:820px){
    width: 40%;
    align-items: flex-start;
    text-align: start;

}

}
`
export const WsContainer = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 2rem;

 >h3{
    border: 4px solid #FEBF29 ;
    font-size: 1.7rem;
    font-weight:700;
    border-bottom: none;
    border-left: none;
    border-right: none;
    padding: 10px;
    margin-bottom: 20px;
    }

    >h4{
    border: 4px solid #FEBF29 ;
    font-size: 1.2rem;
    font-weight:700;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 20px 0;
    width: 300px;
    text-align: center;
    padding: 10px;
    }
`