import { Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import FilmList from './pages/FilmList'
import './App.css'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<FilmList />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
