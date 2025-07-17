import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>


      <div className='border-t border-gray-300 pt-10 text-2xl text-center'>
        <Title text1={'CONTACT'} text2={'US'} />

      </div>

      <div className='flex my-10 flex-col justify-center gap-10 mb-28 md:flex-row'>

        <img className='w-full md:max-w-[480px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6'>

          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station<br />Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br />Email: admin@forever.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button className='border w-40 border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
