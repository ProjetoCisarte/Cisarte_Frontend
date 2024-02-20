import { Article } from "../../components/molecules/article/article"
import { Banner } from "../../components/molecules/banner/banner"
import Header from "../../components/molecules/header/header"

const ArtWorkshop = () => {

    
      return(
          <>
            <Header />
            <Banner img="/public/assets/background/art-workshop-fund.jpg" description="oficina de artes"/>
            <Article title="Conheça nossas oficinas" paragraph="Clique em cada atividade para saber mais!" textAlign="center"/>
        
          </>
      )
  }
  
  export default ArtWorkshop