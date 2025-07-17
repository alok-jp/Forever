import { assets } from "../assets/frontend_assets/assets"


const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
            <img className="w-32 pb-5" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h1 className="text-xl pb-5">COMPANY</h1>
            <p className="text-gray-500">Home</p>
            <p className="text-gray-500">About Us</p>
            <p className="text-gray-500">Delivery</p>
            <p className="text-gray-500">Privacy Policy</p>
        </div>

        <div>
            <h1 className="text-xl pb-5">GET-IN-TOUCH</h1>
            <p className="text-gray-500">+1-000-000-0000</p>
            <p className="text-gray-500">developer@gmail.com</p>
            <p className="text-gray-500">Instagram</p>
        </div>

        
      
    </div>
    <div>
            <hr className="text-gray-300"/>
            <p className="py-5 text-sm text-center">Copyright 2025 developer.dev - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
