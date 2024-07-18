import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Intro from './pages/Intro.jsx'
import Ref from './pages/Ref.jsx'
import Story from './pages/Story.jsx'
import Games from './pages/Games.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: '/ref',
        element: <Ref />,
      },
      {
        path: '/story',
        element: <Story />
      },
      {
        path: '/games',
        element: <Games />
      }
    ],
  },
]);

//Render the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
