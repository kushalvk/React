import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AddUser from './Components/AddUser/AddUser.jsx'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home/Home.jsx'
import AllUser from './Components/AllUser/AllUser.jsx'
import Dashbord from "./Components/Dashbored/Dashbord.jsx";
import Profile from "./Components/Profile/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Login />} />
      <Route path='/adduser' element={<AddUser />} />
      <Route path='/home' element={<Home />} />
      <Route path='/alluser' element={<AllUser />} />
      <Route path='/dashbored' element={<Dashbord />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
