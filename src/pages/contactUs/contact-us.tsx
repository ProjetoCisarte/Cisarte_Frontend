import Button from "../../components/atoms/button/button"
import Address from "../../components/molecules/address/address"
import { Banner } from "../../components/molecules/banner/banner"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import InputsTextLarge from "../../components/molecules/inputsTextLarge/inputs-text-large"
import InputsTextarea from "../../components/molecules/inputsTextarea/inputs-textarea"
import FormStructure from "../../components/organisms/formStructure/form-structure"
import { ContainerIconsSocial, ContainerLinksContact, ContainerLinks } from "./contact-us-style"

const ContactUs = () => {
    return(
        <>

        <Header />

        <Banner img="/public/assets/background/contact-us-fund.jpg" description="Fale conosco"/>

        <FormStructure title="Como podemos ajudar?" templateId="template_x5u8fi8">
            <InputsTextLarge Type="text" NameLabel="Nome" Placeholder="Digite seu nome" Name="name"/>
            <InputsTextLarge Type="email" NameLabel="Email" Placeholder="Digite seu email" Name="email"/>
            <InputsTextLarge Type="number" NameLabel="Telefone" Placeholder="Ex: (00) 00000-0000" Name="numero"/>
            <InputsTextLarge Type="text" NameLabel="Assunto" Placeholder="Digite o assunto" Name="assunto"/>
            <InputsTextarea NameLabel="Mensagem" Placeholder="Digite a sua mensagem" Name="message" />
            <Button title="ENVIAR" variant="primario" type="submit"/>
        </FormStructure>

        <ContainerIconsSocial>
            <a href="https://web.facebook.com/cisarteSP" target="_blank"><img src="public/assets/icons/logo-facebook.svg" alt="Ícone do Facebook preto" /></a>
            <a href="https://www.linkedin.com/company/cisarte/" target="_blank"><img src="public/assets/icons/logo-linkedin.svg" alt="Ícone do Linkedin preto" /></a>
            <a href="https://www.instagram.com/cisarte.rua/" target="_blank"><img src="public/assets/icons/logo-instagram.svg" alt="Ícone do Instagram preto" /></a>
        </ContainerIconsSocial>

        <ContainerLinks>
            <ContainerLinksContact>
                <img src="public/assets/icons/telefone.svg" alt="Ícone de um telefone com fio" />
            <a href="tel:1126452469">
                <p>(11) 2645-2469</p>
            </a>
            </ContainerLinksContact>

            <ContainerLinksContact>
                <img src="public/assets/icons/whatsapp.svg" alt="Ícone do whatsapp" />
            <a href="tel:11963584568">
                <p>(11) 96358-4568</p>
            </a>
            </ContainerLinksContact>

            <ContainerLinksContact>
                <img src="public/assets/icons/whatsapp.svg" alt="Ícone do whatsapp" />
            <a href="tel:11964593915">
                <p>(11) 96459-3915</p>
            </a>
            </ContainerLinksContact>
        </ContainerLinks>

        <Address />

        <Footer />

        </>
    )
}

export default ContactUs