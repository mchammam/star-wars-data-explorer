import { Route, Routes } from 'react-router'
import FilmList from './pages/FilmList'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<FilmList />} />
    </Routes>
  )
}

export default App
