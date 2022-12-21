import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import TopNavigation from './components/TopNavigation';
import ItemList from './pages/ItemList';
import ItemDetails from './pages/ItemDetails';
import { apiQueryDefaultOptions } from './services/api';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: apiQueryDefaultOptions }
  });

  return (
    <>
      <TopNavigation />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Navigate to="/films" />} />

          <Route path="/films" element={<ItemList resource="films" />} />
          <Route path="/films/:id" element={<ItemDetails resource="films" />} />

          <Route path="/planets" element={<ItemList resource="planets" />} />
          <Route
            path="/planets/:id"
            element={<ItemDetails resource="planets" />}
          />

          <Route path="/species" element={<ItemList resource="species" />} />
          <Route
            path="/species/:id"
            element={<ItemDetails resource="species" />}
          />

          <Route path="/people" element={<ItemList resource="people" />} />
          <Route
            path="/people/:id"
            element={<ItemDetails resource="people" />}
          />

          <Route
            path="/starships"
            element={<ItemList resource="starships" />}
          />
          <Route
            path="/starships/:id"
            element={<ItemDetails resource="starships" />}
          />

          <Route path="/vehicles" element={<ItemList resource="vehicles" />} />
          <Route
            path="/vehicles/:id"
            element={<ItemDetails resource="vehicles" />}
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
