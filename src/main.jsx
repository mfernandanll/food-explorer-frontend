import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './pages/SignIn'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { New } from './pages/New'
import { Edit } from './pages/Edit'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Edit />
    </ThemeProvider>
  </React.StrictMode>,
)
