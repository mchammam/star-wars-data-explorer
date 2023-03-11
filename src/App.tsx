import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import TopNavigation from './components/TopNavigation';
import { apiQueryDefaultOptions } from './services/apiQueryDefaultOptions';
import FilmDetails from './pages/ItemDetails/FilmDetails';
import PlanetDetails from './pages/ItemDetails/PlanetDetails';
import SpecieDetails from './pages/ItemDetails/SpecieDetails';
import PersonDetails from './pages/ItemDetails/PersonDetails';
import StarshipDetails from './pages/ItemDetails/StarshipDetails';
import VehicleDetails from './pages/ItemDetails/VehicleDetails';
import FilmList from './pages/ItemList/FilmList';
import PlanetList from './pages/ItemList/PlanetList';
import SpecieList from './pages/ItemList/SpecieList';
import PeopleList from './pages/ItemList/PeopleList';
import StarshipList from './pages/ItemList/StarshipList';
import VehicleList from './pages/ItemList/VehicleList';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: apiQueryDefaultOptions },
  });

  return (
    <>
      <TopNavigation />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Navigate to="/films" />} />

          <Route path="/films" element={<FilmList />} />
          <Route path="/films/:id" element={<FilmDetails />} />

          <Route path="/planets" element={<PlanetList />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />

          <Route path="/species" element={<SpecieList />} />
          <Route path="/species/:id" element={<SpecieDetails />} />

          <Route path="/people" element={<PeopleList />} />
          <Route path="/people/:id" element={<PersonDetails />} />

          <Route path="/starships" element={<StarshipList />} />
          <Route path="/starships/:id" element={<StarshipDetails />} />

          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
