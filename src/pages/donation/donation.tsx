import Header from "../../components/molecules/header/header";
import Footer from "../../components/molecules/footer/footer";
import { Article } from "../../components/molecules/article/article";
import { Banner } from "../../components/molecules/banner/banner";
import Button from "../../components/atoms/button/button";
import { FlexButton, ConteinerDonation, TextDonation, PaymentsDonation, BankInfo, QrCode, ImgBankInfo, InfosBankList, InfoQrCode, DonationItens } from "./donation.styles";


export const Donation = () => {

    return (
        <body>
            <Header />
            <main>
                <Banner img="public/assets/background/fundo-banner-doacao.png" description="doação" />
                <ConteinerDonation>
                    <TextDonation>
                        <h3>Apoie o projeto</h3>
                        <h2>Cada doação, por menor que seja, contribui para sustentar nossos projetos em arte, educação, assistência social e economia solidária</h2>
                    </TextDonation>
                    <FlexButton>
                        <Button variant="primario" title="Doar em Dinheiro" />
                        <Button variant="primario" title="Doar Ítens Físicos" />
                    </FlexButton>
                </ConteinerDonation>
                <PaymentsDonation>
                    <h3>Como Doar</h3>
                    <div>
                        <BankInfo>
                            <div>
                                <p>Obtenha nossas informações bancárias e transfira o valor desejado</p>
                                <img src="public/assets/icons/icon-arrow.svg" alt="icone seta para baixo" />
                            </div>
                            <InfosBankList>
                                <ul>
                                    <li>Banco Cora SCD - 403</li>
                                    <li>Agência: 0001</li>
                                    <li>Conta Corrente: 11.53105-5</li>
                                    <li>Pix: cisartesociocultural@gmail.com</li>
                                </ul>
                                <ul>
                                    <li>Sicredi - Banco Cooperativo - S.A</li>
                                    <li>Banco 748</li>
                                    <li>Agência: 0726</li>
                                    <li>Conta Corrente: 19574-6</li>
                                    <li>Pix: 37.830.782/0001-04</li>
                                </ul>
                            </InfosBankList>
                        </BankInfo>
                        <QrCode>
                            <InfoQrCode>
                                <p> Escaneie o QRCODE em seu aplicativo bancário e contribua com valor desejado</p>
                                <img src="public/assets/icons/icon-arrow.svg" alt="icone seta para baixo" />
                            </InfoQrCode>
                            <ImgBankInfo>
                                <img src="public/assets/imgs/qr code.svg" alt="Imagem pix qr code" />
                            </ImgBankInfo>
                        </QrCode>
                    </div>
                </PaymentsDonation>
                <DonationItens>
                    <div>
                        <Article title="Doar Ítens Físicos" paragraph="Para doar ítens físicos, é preciso entrar em contato com a administração do CISARTE que buscará receber suas doações da forma mais organizada, conforme as necessidades do projeto." />
                        <Button variant="primario" title="Fale Conosco" />
                    </div>
                    <img src="public/assets/imgs/seja-doador.svg" alt="" />
                </DonationItens>
            </main>
            <Footer/>
        </body>
    )
}