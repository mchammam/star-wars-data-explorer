import { Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import FilmList from './pages/FilmList'
import './App.css'
import Film from './pages/Film';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path='/' element={<FilmList />} />
      <Route path='/films/:id' element={<Film />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
