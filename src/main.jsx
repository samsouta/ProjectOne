import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// core styles are required for all packages
import 'animate.css';
import './index.css'
import '@mantine/core/styles.css';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux';
import { store } from './feature/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
    <React.StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </React.StrictMode>
    </Provider>
  </BrowserRouter>,
)
