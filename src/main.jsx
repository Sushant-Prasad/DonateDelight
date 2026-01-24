import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NGOsList from './routes/NGOsList.jsx'
import HeroSection from './routes/HeroSection.jsx'
import Contact from './routes/Contact.jsx'
import DonationPage from './routes/DonationPage.jsx'
import { Provider } from 'react-redux'
import ngoStore from './store/index.js'
import ErrorPage from './routes/ErrorPage.jsx'
import Login from './routes/Login.jsx'
import Reg from './routes/Reg.jsx'
import AboutUs from './routes/AboutUs.jsx'






const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <HeroSection />},
      {path: '/about', element: <AboutUs />},
      {path: '/login', element: <Login />},
      {path: '/ngos', element: <NGOsList />},
      {path: '/home', element: <HeroSection />},
      {path: '/contact', element: <Contact />},
      {path: '/donate', element: <DonationPage />},
      {path: '/registration', element: <Reg />},
      {path: '*', element: <ErrorPage />} 
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ngoStore}>
    <RouterProvider router={router}> 
       </RouterProvider>
       </Provider>
  
  </StrictMode>,
)
