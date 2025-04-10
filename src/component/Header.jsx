import React from 'react'


export default function Header() {
    // const MultiData = [
    //     {
    //         icon: "pi pi-bars",
    //         img: "logo.png"

    //     },
    // ]

    // const ItemData = [
    //     {
    //         icons: "pi pi-bars",
    //     },
    //     {
    //         icons: "pi pi-search",
    //     },
    //     {
    //         icons:
    //     },
    // ]
  return (
    <div className="">
        <div className="h-10 bg-gray-700 flex justify-between items-center px-6 py-4 shadow-md">
        <nav className='flex items-center gap-5 text-sm text-gray-600'>
                <a href="#">Wishlist</a>
                <a href="#">My Account</a>
        </nav>
        </div>
    
    <div className="min-h-screen mt-5 bg-white font-sans">
        <header className='flex justify-between items-center px-6 py-4 shadow-md'>
            <div className="text-2xl font-bold text-red-600">
                <span className='text-black'>M</span>ultikart
            </div>
            <nav className='flex items-center gap-5 text-sm text-gray-600'>
                <span><i className='text-red-600 pi pi-bars'></i></span>
                <span><i className='text-black font-extrabold pi pi-search'></i></span>
                <span><i className='text-black pi pi-cog'></i></span>
                <span><i className='text-black text-3xl pi pi-trash'></i></span>
                <button className='text-xl pi pi-cart'></button>
            </nav>
        </header>
    </div>
    </div>
  )
}
