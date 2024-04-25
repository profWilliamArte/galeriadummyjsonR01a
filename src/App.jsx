
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Tienda from './pages/Tienda'
import Laptop from './pages/Laptop'
import Movil from './pages/Movil'
import Categorias from './pages/Categorias'
import Contactos from './pages/Contactos'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="galeriadummyjsonR01a/" element={<Inicio/>} />
            <Route path="galeriadummyjsonR01a/tienda" element={<Tienda/>} />
            <Route path="galeriadummyjsonR01a/laptop" element={<Laptop/>} />
            <Route path="galeriadummyjsonR01a/movil" element={<Movil/>} />
            <Route path="galeriadummyjsonR01a/categorias/:id" element={<Categorias/>} />
            <Route path="galeriadummyjsonR01a/contactos" element={<Contactos/>} />
            <Route path="*" element={<Inicio/>} />
          </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
