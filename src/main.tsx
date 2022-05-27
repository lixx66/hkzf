import 'reset.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/store'

import App from './App'
import { setDomFontSize } from './utils/dom'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {setDomFontSize()}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
