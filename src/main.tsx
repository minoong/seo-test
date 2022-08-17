import React from 'react'
import { hydrate, render } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


const rootElement = document.getElementById("root")!;
if (rootElement.hasChildNodes()) {
  hydrate( <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>, rootElement);
} else {
  render( <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>, rootElement);
}
