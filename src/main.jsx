import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Provider } from 'react-redux'
import { store } from './Utilities/Redux/store'
import AuthListener from './Utilities/Redux/features/authSlice/AuthListener'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthListener />
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
