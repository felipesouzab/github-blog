import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </HashRouter>
  )
}
