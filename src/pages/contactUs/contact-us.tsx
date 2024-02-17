import Button from "../../components/atoms/button/button"
import { Banner } from "../../components/molecules/banner/banner"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import InputsTextLarge from "../../components/molecules/inputsTextLarge/inputs-text-large"
import InputsTextarea from "../../components/molecules/inputsTextarea/inputs-textarea"
import FormStructure from "../../components/organisms/formStructure/form-structure"
import { ContainerIconsSocial, ContainerLinksContact, ContainerLinks, ContainerAddress } from "./contact-us-style"

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

        <ContainerAddress>
            <section>
                <div>
                    <h3>Como chegar</h3>
                    <p>Viaduto Pedroso, 111 - Bela Vista, São Paulo - SP, CEP: 01322-010</p>
                </div>
                <div>
                    <h3>Horário de Funcionamento</h3>
                    <p>Aberto de terça a sexta das 9:00 às 17:00</p>
                </div>
            </section>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.156286743735!2d-46.64282888909096!3d-23.56282977871038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a4e8eddcb3%3A0x3969cac9a2222d51!2sViaduto%20Pedroso%2C%20111%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001322-010!5e0!3m2!1spt-BR!2sbr!4v1708145205524!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
            ></iframe>
        </ContainerAddress>

        <Footer />

        </>
    )
}

export default ContactUs