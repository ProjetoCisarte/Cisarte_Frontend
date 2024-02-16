import Header from "../../components/molecules/header/header"
import { Banner } from "../../components/molecules/banner/banner"
import { CardKnow } from "../../components/molecules/cards/cards";
import InputsTextLarge from "../../components/molecules/inputsTextLarge/inputs-text-large";
import InputsTextarea from "../../components/molecules/inputsTextarea/inputs-textarea";
import Button from "../../components/atoms/button/button";
import CardsVolunteers from "../../components/molecules/cardsVolunteers/cards-volunteers";
import Footer from "../../components/molecules/footer/footer";
import { ContainerCards, ContainerForms, ContainerVonlunteersCards, TitleAndText } from "./voluntary-styles";


const Voluntary = () => {
    return(
        <>
        <div>     

            <Header />

            <Banner img="/public/assets/background/volunteer-fund.jpg" description="VOLUNTARIADO"/>

            <TitleAndText>
                <h5>Faça parte da mudança</h5>
                <h2>Sua participação é essencial para construir um futuro mais promissor e acolhedor para todos. Faça parte desta transformação!</h2>
            </TitleAndText>

            <ContainerCards>
            <CardKnow icon="" alt="" title="Participação em Atividades Presenciais" text="Junte-se a nós como voluntário nas inspiradoras oficinas de arte, saúde e bem-estar, serviços e línguas do CISARTE" showButton={false} />
            <CardKnow icon="" alt="" title="Serviços Sociais Diretos" text="Colabore oferecendo suporte direto à população em situação de rua, distribuindo alimentos, roupas ou outros itens essenciais" showButton={false} />
            <CardKnow icon="" alt="" title="Apoio Administrativo" text="Contribua com habilidades administrativas, auxiliando nos atendimentos, organização de documentos, coordenação de eventos ou realizando tarefas de escritório" showButton={false} />
            <CardKnow icon="" alt="" title="Assistência Psicológica e Aconselhamento" text="Ofereça voluntariamente seu tempo para fornecer apoio emocional, aconselhamento ou serviços psicológicos." showButton={false} />
            <CardKnow icon="" alt="" title="Participação em Projetos de Arte e Cultura" text="Faça parte dos projetos artísticos, culturais e educacionais, participando de oficinas de arte, música, teatro, e outras formas de expressão" showButton={false} />
            <CardKnow icon="" alt="" title="Apoio em Serviços de Saúde" text="Voluntarie-se para serviços de saúde, como clínicas odontológicas temporárias, exames médicos, ou workshops de conscientização sobre saúde." showButton={false} />
            <CardKnow icon="" alt="" title="Registro e Documentação" text="Capture momentos importantes e auxilie na documentação das atividades para referência futura." showButton={false} />
            <CardKnow icon="" alt="" title="Ajude na Divulgação e Sensibilização" text="Colabore na divulgação do CISARTE, seja por meio de mídias sociais, campanhas de conscientização ou eventos de arrecadação de fundos" showButton={false} />
            <CardKnow icon="" alt="" title="Programa de estágio" text="Contribua com habilidades administrativas, auxiliando nos atendimentos, organização de documentos, coordenação de eventos ou realizando tarefas de escritório" showButton={false} />
            </ContainerCards>

            <ContainerForms>
                <h2>Quero ser voluntário</h2>
                <form>
                    <InputsTextLarge Type="text" NameLabel="Nome" Placeholder="Digite seu nome" Name="name"/>
                    <InputsTextLarge Type="email" NameLabel="Email" Placeholder="Digite seu email" Name="email"/>
                    <InputsTextLarge Type="number" NameLabel="Telefone" Placeholder="Ex: (00) 00000-0000" Name="numero"/>
                    <InputsTextLarge Type="text" NameLabel="Qual sua profissão" Placeholder="Digite o nome da profissão" Name="profissao"/>
                    <InputsTextLarge Type="text" NameLabel="Qual voluntariado você gostaria de participar?" Placeholder="Digite o nome do voluntariado" Name="voluntariado"/>
                    <InputsTextarea NameLabel="Mensagem" Placeholder="Digite a sua mensagem" Name="message" />
                    <Button title="ENVIAR" variant="primario" type="submit"/>
                </form>
            </ContainerForms>

            <TitleAndText>
                <h2>Conheça os voluntários que realizaram a construção do site e plataforma</h2>
            </TitleAndText>

            <ContainerVonlunteersCards>
                <CardsVolunteers img="public/assets/imgs/ft-vitoria.png" Title="Vitória Florêncio" SubTitle="Front-end e UI/UX" Alt="Foto da Vitória Florêncio" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Anthony Thomas" SubTitle="Full-Stack" Alt="Foto do Anthony Thomas" />
                <CardsVolunteers img="public/assets/imgs/ft-lilian.png" Title="Lilian Carvalho" SubTitle="Front-end e UI/UX" Alt="Foto da Lilian Carvalho" />
                <CardsVolunteers img="public/assets/imgs/ft-lais.png" Title="Lais Carvalho" SubTitle="Front-end e UI/UX" Alt="Foto da Lais Carvalho" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Matheus Passos" SubTitle="Full-Stack" Alt="Foto do Matheus Passos" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Rafaela Moura" SubTitle="Full-Stack" Alt="Foto da Rafaela Moura" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Diogo Duarte" SubTitle="Full-Stack" Alt="Foto do Diogo Duarte" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Marcelo Aggio" SubTitle="Full-Stack" Alt="Foto do Marcelo Aggio" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Jhenifer Ribeiro" SubTitle="Banco de dados" Alt="Foto da Jhenifer Ribeiro" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Joabe Ferri" SubTitle="Front-End" Alt="Foto do Joabe Ferri" />
                <CardsVolunteers img="public/assets/imgs/ft-aleatorio.png" Title="Heitor Lamar" SubTitle="Fotógrafo" Alt="Foto do Heitor Lamar" />
            </ContainerVonlunteersCards>
            <Footer />
        </div>
        </>
    )
}

export default Voluntary