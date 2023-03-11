import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import TopNavigation from './components/TopNavigation';
import ItemList from './pages/ItemList';
import { apiQueryDefaultOptions } from './services/apiQueryDefaultOptions';
import FilmDetails from './pages/ItemDetails/FilmDetails';
import PlanetDetails from './pages/ItemDetails/PlanetDetails';
import SpecieDetails from './pages/ItemDetails/SpecieDetails';
import PersonDetails from './pages/ItemDetails/PersonDetails';
import StarshipDetails from './pages/ItemDetails/StarshipDetails';
import VehicleDetails from './pages/ItemDetails/VehicleDetails';

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

          <Route path="/films" element={<ItemList resource="films" />} />
          <Route path="/films/:id" element={<FilmDetails />} />

          <Route path="/planets" element={<ItemList resource="planets" />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />

          <Route path="/species" element={<ItemList resource="species" />} />
          <Route path="/species/:id" element={<SpecieDetails />} />

          <Route path="/people" element={<ItemList resource="people" />} />
          <Route path="/people/:id" element={<PersonDetails />} />

          <Route
            path="/starships"
            element={<ItemList resource="starships" />}
          />
          <Route path="/starships/:id" element={<StarshipDetails />} />

          <Route path="/vehicles" element={<ItemList resource="vehicles" />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
