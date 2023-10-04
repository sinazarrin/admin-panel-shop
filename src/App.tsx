import './Assets/styles/index.css'
import ThemeProvider from './Components/general/ThemeProvider'
import DefaultLayout from './Layout/Default'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DefaultLayout />
      </ThemeProvider>
    </div>
  )
}

export default App