import { render } from 'react-dom'
import Favicon from 'react-favicon'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'



render(
  
  <ThemeProvider>
     <Favicon url='https://github.com/hieunguyen0802/hieunguyen0802.github.io/blob/master/favicon.ico' />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
