
import { assets } from '../assets/frontend_assets/assets'
import { Link,NavLink } from 'react-router-dom'
import { useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Navigate } from 'react-router-dom';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, setToken, token, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        
    }


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}>
        <img src={assets.logo} className='w-36' alt="logo" />
        </Link>
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>

        <img src={assets.search_icon} onClick={() => setShowSearch(prev => !prev)} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
           
           <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

           {/* DropDown  */}
            {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
                 </div>
            }

        </div>

        <Link to='/cart' className='relative'>

            <img src={assets.cart_icon}  className="w-5 min-w-5" alt="" />
            <p className='absolute right-[-1px] bottom-[-5px] text-center bg-black text-white aspect-square p-0.5 rounded-full text-[10px]'>{getCartCount()}</p>
        
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'  alt="" />
      </div>

            {/* Sidebar menu for small screen */}
            <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}` }>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)}  className='flex items-center gap-4 p-3 curson-pointer'>
                        <img  className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/">HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 " to="/contact">CONTACT</NavLink>
            </div>
            </div>
                
    </div>
  )
}

export default Navbar
