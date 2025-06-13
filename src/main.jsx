import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from './layouts/app-layout'
import { CadastroPage } from './pages/cadastro'
import { CatalogoPage } from './pages/catalogo'
import { DashboardPage } from './pages/dashboard'
import { LoginPage } from './pages/login'
import { PerfilPage } from './pages/perfil'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}> 
          <Route index element={<DashboardPage />} />
          <Route path='catalogo' element={<CatalogoPage />} />
        </Route>

        <Route path='perfil' element={<PerfilPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='cadastro' element={<CadastroPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
