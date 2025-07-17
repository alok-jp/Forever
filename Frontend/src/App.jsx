import './index.css'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

//Page imports
import Home from "./pages/Home"
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Loginin from './pages/Loginin'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Verify from './pages/Verify'

//Component imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer />
    <Navbar />
    <SearchBar />



    <Routes>

      {/* Routes */}
      <Route path='/' element={<Home />}/>
      <Route path='/collection' element={<Collection />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Loginin />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/orders' element={<Orders />} />
       <Route path='/verify' element={<Verify />} />


    </Routes>
    <Footer />
    </div>
  )
}

export default App
