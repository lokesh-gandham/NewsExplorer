
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/pages/Home'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Login from './component/Login'
import Donate from './component/pages/Donate'
import Pricing from './component/pages/Pricing'
import CodeOfPractice from './component/pages/CodeOfPractice'
import ContactUs from './component/pages/ContactUs'
import Register from './component/Register'

function App() {
  const location = useLocation();

  // List of routes that should NOT show the Navbar
  const hideNavbarRoutes = ['/login', '/register'];

  // Determine whether to show or hide Navbar
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
           {!hideNavbar && <Navbar />}
         <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/donate" element={<Donate/>}/>
           <Route path="/pricing" element={<Pricing/>}/>
           <Route path="/code-of-practice" element={<CodeOfPractice/>}/>
           <Route path='/contact-us' element={<ContactUs/>}/>
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>}/>
         </Routes>
    </div>
  )
}

export default App
