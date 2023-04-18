import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import App from './App'
import Clientes from './assets/telas/Clientes.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/clientes',
    element: <Clientes />
  },
  // {
  //   path: '/clientes/dashboard',
  //   element: <Dashboard />
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
