import { Article } from "../../components/molecules/article/article"
import { Banner } from "../../components/molecules/banner/banner"
import { DialogCard } from "../../components/molecules/dialog/dialog-card"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import { WorkshopCard } from "../../components/molecules/workshopCard/workshop-card"
import { ContainerCardsDesks, ContainerNavigationCards, ContainerWorkshopCard, Subtitle } from "./wellness-and-health-workshop-styles"

const WellnessAndHealthWorkshop = () => {


    return (
        <>
            <Header />
            <Banner img="/public/assets/background/art-workshop-fund.jpg" description="oficinas de bem-estar e saúde" />
            <Article title="Conheça nossas oficinas" paragraph="Clique em cada atividade para saber mais!" textAlign="center" />
            <ContainerCardsDesks>
                <DialogCard title="Yoga"
                    content="A yoga trabalha tanto o corpo como a mente, além de ser um estímulo para a prática de atividade física. As aulas são dadas por uma professora de yoga, que recebe as pessoas em situação de rua interessadas na prática."
                    imgSrc="/public/assets/imgs/oficina-yoga.png"
                    imgAlt="pessoas praticando yoga" />

                <DialogCard title="Salão de beleza"
                    content="O salão de beleza é um espaço ; voltado para pessoas em situação de rua oferecendo manicure, corte de cabelo e barba, e outras práticas relacionadas à estética. Com a intenção de melhorar a autoestima e o cuidado pessoal. Em datas e horários agendados, os profissionais dispõem algumas horas de solidariedade junto às pessoas."
                    imgSrc="/public/assets/imgs/oficina-salao-de-beleza.png"
                    imgAlt="homem cortando o cabelo" />

                <DialogCard title="Academia"
                    content="O CISARTE conta com uma mini-academia para exercícios físicos é que são de extrema importância para todos, auxiliando o cuidado tanto físico quanto mental."
                    imgSrc="/public/assets/imgs/oficina-academia.png"
                    imgAlt="academia" />

                <DialogCard title="Acupuntura"
                    content="A acupuntura é uma prática complementar de saúde milenar de origem chinesa, que atua em pontos específicos do corpo para melhorar a imunidade e ajudar no tratamento de problemas emocionais e, até, de algumas doenças físicas como sinusite, asma, enxaqueca ou artrite. É realizada no CISARTE por profissionais da área com disponibilidade solidária."
                    imgSrc="/public/assets/imgs/oficina-acupuntura.png"
                    imgAlt="homem sendo massageado" />

                <DialogCard title="Massoterapia"
                    content="O tratamento auricular contribui para o alívio de dores e/ou tratar problemas físicos e psicológicos que muitas pessoas que vivem em situação de rua."
                    imgSrc="/public/assets/imgs/oficina-massoterapia.png"
                    imgAlt="massoterapia" />

                <DialogCard title="Rodas de conversa"
                    content="O Coletivo Intercambiantes Brasil Nucleo SP, realiza mensalmente uma roda de conversa com as pessoas em situação de rua para através do grupo operativo discutir questões sobre a vida nas ruas e a importância da luta por moradia."
                    imgSrc="/public/assets/imgs/oficina-rodas-de-conversa.png"
                    imgAlt="circulo entre pessoas em roda de conversa" />

                <DialogCard title="Rodas de terapia"
                    content="Alguns integrantes do Coletivo Intercambiantes Brasil Núcleo SP, realizam quinzenalmente junto aos frequentadores do CISARTE uma roda de terapia comunitária integrativa para acolher tanto os sofrimentos das pessoas quanto o desenvolvimento das suas próprias potencialidades no enfrentamento de seus problemas cotidianos."
                    imgSrc="/public/assets/imgs/oficina-rodas-de-conversa-2.png"
                    imgAlt="pessoas com máscaras" />

                <DialogCard title="At. Odontológico"
                    content="Através de uma parceria firmada entre o CISARTE e os Dentistas do Bem, foi montado um consultório odontológico no espaço para atender exclusivamente às pessoas em situação de rua com problemas com a saúde bucal."
                    imgSrc="/public/assets/imgs/oficina-atendimento-odontologico.png"
                    imgAlt="consultorio medico" />

                <DialogCard title="At. Psicológico"
                    content="O cuidado com a saúde mental é uma prioridade para pessoas que vivem em condições precárias e adversas, enfrentando um sofrimento social intenso. Contamos com uma equipe de psicólogos e estudantes de psicologia que fazem o acolhimento e escutam as pessoas que necessitam deste tipo de atendimento, auxiliando-os com seus problemas pessoais e sociais."
                    imgSrc="/public/assets/imgs/oficina-atendimento-psicologico.png"
                    imgAlt="homem de máscara" />

                <DialogCard title="At. Médico"
                    content="O Cisarte dispõe de uma equipe médica  para atendimentos de pessoas em situação de extrema vulnerabilidade social, com encaminhamentos e orientação para as  pessoas comforme suas necessidades."
                    imgSrc="/public/assets/imgs/oficina-atendimento-medico.png"
                    imgAlt="consultorio medico" />
            </ContainerCardsDesks>

            <ContainerNavigationCards>
                <Subtitle>Confira outras oficinas</Subtitle>
                <ContainerWorkshopCard>
                    <WorkshopCard navigateDesk="/oficinaDeArtes" description="Oficinas de Artes" img="/public/assets/imgs/oficinas-artes.png" />
                    <WorkshopCard navigateDesk="/oficinaServicos" description="Oficinas de serviços" img="/public/assets/imgs/servicos.png" />
                    <WorkshopCard navigateDesk="/oficinaLinguas" description="Oficinas de línguas" img="/public/assets/imgs/linguas.png" />
                </ContainerWorkshopCard>
            </ContainerNavigationCards>

            <Footer />
        </>
    )
}

export default WellnessAndHealthWorkshop