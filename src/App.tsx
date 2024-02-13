import './App.css'
import Header from './components/molecules/header/header'
import InputsTextLarge from './components/molecules/inputsTextLarge/inputsTextLarge'
import InputsTextSmall from './components/molecules/inputsDateSmall/inputsDateSmall'


function App() {

  return (
    <>
    <Header />
    <InputsTextLarge NameLabel='Nome' Placeholder='Digite seu nome'/>
    <InputsTextSmall NameLabel='Data de nascimento'/>
    </>
  )
}

export default App
