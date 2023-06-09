import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './Pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/show/:showId" element={<Show />} />

          <Route path="*" element={<div>Page Not Found</div>} />

          {/*<Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
  <Route path="contact-us" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
