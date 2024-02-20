import './App.css'
import Header from './components/molecules/header/header'
import InputsTextLarge from './components/molecules/inputsTextLarge/inputsTextLarge'
import InputsTextSmall from './components/molecules/inputsDateSmall/inputsDateSmall'
import { DialogCard } from './components/molecules/dialog/dialog-card'


function App() {

  return (
    <>
    <Header />
    <InputsTextLarge NameLabel='Nome' Placeholder='Digite seu nome'/>
    <InputsTextSmall NameLabel='Data de nascimento'/>
    <DialogCard content='A música, presente na vida de todos, desperta emoções, ritmo e estimula a prática física. O contato com instrumentos musicais no CISARTE desenvolve percepções sensoriais e emocionais, proporcionando diversão e experiências não vividas na rua. A oficina é aberta a pessoas em situação de rua interessadas em música e canto.' imgAlt='' imgSrc='/assets/imgs/music.png' title='Música' />
    </>
  )
}

export default App
