import React from 'react'
import img from '../assets/backgimg.jpg'

export default function Footer() {
  return (
    


 <div className='h-80'>
        <Header />
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        {/* // Text */}
        <div className="max-w-md flex flex-col text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img src={Img} alt="" />
          </div>
          <h2 className="text-sm text-gray-500">Welcome To Fashion</h2>
          <h1 className="text-4xl font-semibold mt-2 mb-6">MEN FASHION</h1>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            SHOP NOW
          </button>
        </div>
        {/* Image */}
        <div className="mt-10 md:mt-0 md:max-w-md">
          <img
            src={img}
            alt="Men Fashion"
            className="rounded-lg"
          />
        </div>
      </section>

       {/* Hero Section */}
       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        {/* Text */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-sm text-gray-500">Welcome To Fashion</h2>
          <h1 className="text-4xl font-semibold mt-2 mb-6">MEN FASHION</h1>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            SHOP NOW
          </button>
        </div>
        {/* Image */}
        <div className="mt-10 md:mt-0 md:max-w-md">
          <img
            src="/path-to-your-image.jpg"
            alt="Men Fashion"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Discount Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 py-12">
        <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4">
          <img
            src="/path-to-men-image.jpg"
            alt="Men Offer"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">10% OFF</h3>
            <p className="text-sm">MEN</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4">
          <img
            src="/path-to-women-image.jpg"
            alt="Women Offer"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">10% OFF</h3>
            <p className="text-sm">WOMEN</p>
          </div>
        </div>
      </section>
    </div>
  )
}
