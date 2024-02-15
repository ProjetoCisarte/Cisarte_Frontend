import Header from './components/molecules/header/header'
import { Banner } from './components/molecules/banner/banner'
import { Article } from './components/molecules/article/article'

function App() {

  return (
    <>
      <Header />
      <Banner img='/public/assets/background/fundo.png' description='Oficinas de 
Bem-Estar e Saúde' />
      <Article title='Seja voluntario' subtitle='Ja conhce o cisrte?' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eligendi repellat laudantium harum reiciendis inventore quis fuga quae dignissimos? Blanditiis excepturi nesciunt nemo quia in laboriosam consequatur saepe dolore mollitia' />
    </>
  )
}

export default App
