import styled from "styled-components";

export const ConteinerDonation = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
margin: 1rem;
gap: 20px;


@media screen and (min-width:880px) {
    margin: 2rem ;
}
`

export const FlexButton = styled.div`
display: flex;
justify-content: center;
gap: 30px;

`
export const TextDonation = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: auto;
width: 50%;
gap: 10px;


@media screen and (max-width:580px) {
    width: 100%;
}


>h3{
    font-weight: 700;
    font-size: 1.3rem;
    color: #126E30;

    @media screen and (max-width:580px) {
    font-size: 1.3rem;
      }
}

>h2{
    font-weight: 700;
    font-size: 2rem;
    color: #000;

    @media screen and (max-width:580px) {
    font-size: 1.2rem;
    font-weight: 500;
      }

}
`
export const PaymentsDonation = styled.section`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
padding-top: 2rem;

@media screen and (min-width:730px){
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);}
margin: 0 3rem;

@media screen and (min-width:1030px){
flex-direction: column;
border-radius: 20px;
padding: 2rem;
margin: 0 7rem 4rem 7rem;}

>h3{
        font-weight:700;
        color: #126E30;
        margin-bottom: 2rem;
    }

>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Source Sans 3';
    gap: 3rem;
    font-weight: 700;
    color: #575656;

    @media screen and (min-width:830px){
        flex-direction: row;
    }

}
`

export const BankInfo = styled.div`  
display: flex;
flex-direction: column;
gap: 2rem;

>div{
    display: flex;
    flex-direction: column;
    align-items: center;    

    >p{
        width: 80%;
    }
}
`

export const QrCode = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

`
export const ImgBankInfo = styled.div`
>div{

    >p{
        width: 50%;
    }
}

 >img{
    width: 300px;

    
    @media screen and (min-width:880px) {
    width: 400px;
}
 }
`
export const InfosBankList = styled.div`
gap: 2rem;

 >ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
    border: 2px solid #126E30;
    padding: 2rem;
    width: 20rem;
    height: 10rem;
    border-radius: 10px;
    

    >li{
        text-align: center;
        align-items: center;
    }
 }
`
export const InfoQrCode = styled.div`

display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;


>p{
    width: 80%;
}
`
export const DonationItens = styled.div`
display: flex;  
align-items: center;
justify-content: space-around;
flex-direction: column-reverse;
margin-top: 3rem;

@media screen and (min-width:830px){
flex-direction: row-reverse;

}

>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;

    @media screen and (min-width:830px){
    width: 40%;
    gap: 1rem;
    flex-direction: column;
}
}
>img{
    width: 300px;

    @media screen and (min-width:830px){
    width: 450px;
    }
}
`