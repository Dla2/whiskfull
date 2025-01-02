import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import OrderPage from './pages/OrderPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AltLayout from './layouts/AltLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<App/>}/>
      </Route>
      <Route path='/' element={<AltLayout/>}>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
