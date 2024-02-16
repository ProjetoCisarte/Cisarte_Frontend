import { ThemeProvider } from 'styled-components'
import RouterApp from './routers'
import { theme } from './components/atoms/text/themes'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterApp />
      </ThemeProvider>
    </>
  )
}

export default App
