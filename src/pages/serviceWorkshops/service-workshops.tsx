import { Article } from "../../components/molecules/article/article"
import { Banner } from "../../components/molecules/banner/banner"
import { DialogCard } from "../../components/molecules/dialog/dialog-card"
import Footer from "../../components/molecules/footer/footer"
import Header from "../../components/molecules/header/header"
import { WorkshopCard } from "../../components/molecules/workshopCard/workshop-card"
import { ContainerCardsDesks, ContainerNavigationCards, ContainerWorkshopCard, Subtitle } from "./service-workshops-styles"

const ServiceWorkshops = () => {


    return (
        <>
            <Header />
            <Banner img="/public/assets/background/art-workshop-fund.jpg" description="oficinas de serviços" />
            <Article title="Conheça nossas oficinas" paragraph="Clique em cada atividade para saber mais!" textAlign="center" />
            <ContainerCardsDesks>
                <DialogCard title="Costura"
                    content="A oficina de costura do Cisarte é composta por máquinas de costura e tem por finalidade o aprendizado da arte de costurar. É voltado para aqueles que estão na rua e desejam aprender a costurar para poder trabalhar e ter sua própria autonomia."
                    imgSrc="/public/assets/imgs/oficina-costura.png"
                    imgAlt="mulher costurando" />

                <DialogCard title="Cozinha"
                    content="A prática da culinária contribui para a compreensão da função dos alimentos na vida das pessoas para a manutenção da saúde. Além disso, muitas pessoas que vivem nas ruas, necessitam de aprender habilidades na cozinha para conseguir trabalho no ramo de restaurantes, lanchonetes e bares. A  prática de trabalhar na  cozinha estimula a motivação, a organização, a percepção de sabores e o labor das mãos. Nesta oficina, chefes e pessoas em situação de rua ensinam umas as outras a arte de cozinhar."
                    imgSrc="/public/assets/imgs/oficina-cozinha.png"
                    imgAlt="cozinha vazia" />

                <DialogCard title="Serigrafia"
                    content="Estampas em camisetas, bonés, moletons, bolsas, e outros - oficina onde se aprende o oficio, criatividade e arte - aceitamos encomendas para gerar renda para os participantes em situação de rua."
                    imgSrc="/public/assets/imgs/oficina-serigrafia.png"
                    imgAlt="sala vazia com camisas penduradas no cabide" />

                <DialogCard title="Loja de Rua"
                    content="A Loja de Rua é um Brechó voltado tanto para as pessoas em situação de rua, quanto para a população em geral, onde estas têm a oportunidade e liberdade de  escolher roupas para uso pessoal, sem o olhar julgador. Além disso, alguns produtos produzidos pelas pessoas podem ser vendidos valorizando sua arte."
                    imgSrc="/public/assets/imgs/oficina-loja-de-rua.png"
                    imgAlt="sala com monequins com roupas coloridas" />

                <DialogCard title="Biblioteca"
                    content="As pessoas em situação de rua usam a biblioteca para estudo, leituras, pesquisas, concursos públicos, aulas onlines e cursos."
                    imgSrc="/public/assets/imgs/oficina-biblioteca.png"
                    imgAlt="biblioteca com livros diversos" />

                <DialogCard title="Assistência Jurídica"
                    content="As pessoas em situação de rua enfrentam uma série de violações de seus direitos, passam por situações de encarceramentos a maioria das vezes sem nenhuma defesa. Alguns advogados oferecem assessoria jurídica às pessoas que vivem nas ruas e apresentam problemas com a justiça e ou afins."
                    imgSrc="/public/assets/imgs/oficina-assistencia-juridica.png"
                    imgAlt="pessoas de mascara sentadas conversando a mesa" />
            </ContainerCardsDesks>

            <ContainerNavigationCards>
                <Subtitle>Confira outras oficinas</Subtitle>
                <ContainerWorkshopCard>
                    <WorkshopCard navigateDesk="/oficinaDeArtes" description="Oficinas de Artes" img="/public/assets/imgs/oficinas-artes.png" />
                    <WorkshopCard navigateDesk="/oficinaBemEstareSaude" description="Oficinas de bem-estar e saúde" img="/public/assets/imgs/bem-estar-e-saude.png" />
                    <WorkshopCard navigateDesk="/oficinaLinguas" description="Oficinas de línguas" img="/public/assets/imgs/linguas.png" />
                </ContainerWorkshopCard>
            </ContainerNavigationCards>

            <Footer />
        </>
    )
}

export default ServiceWorkshops