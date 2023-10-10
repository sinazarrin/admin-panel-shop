import { BrowserRouter } from 'react-router-dom'
import './Assets/styles/index.css'
import ThemeProvider from './Components/general/ThemeProvider'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App