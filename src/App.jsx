import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Inicio from './component/inicio/Inicio'
import Gaming from './component/gaming/Gaming'
import NotFound from './component/noFound/NotFound'
import Streaming from './component/streaming/Streaming'
import AcercaDe from './component/asercaDe/AcercaDe'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/gaming' element={<Gaming />} /> 
        <Route path='/streaming' element={<Streaming />} /> 
        <Route path='/acercaDe' element={<AcercaDe />} /> 
        <Route path='/*' element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
