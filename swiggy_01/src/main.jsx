import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Help from './components/Help.jsx'
import Cart from './components/Cart.jsx'
import Offer from './components/Offer.jsx'
import Signin from './components/Signin.jsx'
import Error from './components/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RestaurantDatails from './components/RestaurantDatails.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/help',
        element: <Help/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/offer',
        element: <Offer/>
      },
      {
        path: '/sighin',
        element: <Signin/>
      },
      {
        path:'/restaurant/:id',
        element:<RestaurantDatails/>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  // as this is to provide routin for full application
<RouterProvider router={appRouter}>
  <App />
  </RouterProvider>
)
