import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';
// import Genres from './components/Genres';
// import AddMovie from './components/AddMovie';
// import ManageCatalog from './components/ManageCatalog';
// import GraphQL from './components/GraphQL';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      // {
      //   path: 'genres',
      //   element: <Genres />,
      // },
      // {
      //   path: 'add-movie',
      //   element: <AddMovie />,
      // },
      // {
      //   path: 'manage-catalog',
      //   element: <ManageCatalog />,
      // },
      // {
      //   path: 'graphql',
      //   element: <GraphQL />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
