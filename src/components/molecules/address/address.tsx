import { ContainerAddress } from "./address-styles"


const Address = () => {
    return(
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
    )
}

export default Address