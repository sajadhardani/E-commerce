
import { Outlet } from 'react-router-dom'
import './App.css'
// import { NavItem } from 'react-bootstrap'
import Navitems from './components/Navitems'
import Footer from './components/Footer'




function App() {


  return (
    <>
   <Navitems />
    <div className='min-vh-100'>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
