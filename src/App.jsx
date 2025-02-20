import { Route, Routes } from 'react-router'
import FilmesAntigos from './components/FilmesAntigos'
import FilmesNovos from './components/FilmesNovos'
import Lançamentos from './components/Lançamentos'
import Filmes from './pages/Filmes'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Filmes />} />
      <Route path="/antigos" element={<FilmesAntigos />} />
      <Route path="/novos" element={<FilmesNovos />} />
      <Route path="/lancamentos" element={<Lançamentos />} />
    </Routes>
    </>
  )
}

export default App
