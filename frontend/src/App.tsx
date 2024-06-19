import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Stocks from './pages/Stocks';
import ErrorPage from './pages/ErrorPage';
import ErrorLayout from './layouts/ErrorLayout';
import React from 'react';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorLayout><ErrorPage /></ErrorLayout>}>
      <Route index element={<Home />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="stocks" element={<Stocks />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
