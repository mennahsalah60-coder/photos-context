import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PhotosProvider from './assets/components/PhotosProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhotosProvider>
      <App />
    </PhotosProvider>
  </StrictMode>,
)
