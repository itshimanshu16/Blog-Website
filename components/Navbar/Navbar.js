import React from 'react'
import { ModeToggle } from '../theme-button'
const Navbar = () => {
  return (
    <div>
     <div class="bg- backdrop-bl shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div class="flex justify-between h-16">
            <div class="flex-shrink-0 flex items-center ">
                <span class="text-xl font-bold ">Blog-Web</span>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-4">
                <a href="#" class=" hover:text-blue-500 transition duration-300">Home</a>
                <a href="#" class=" hover:text-blue-500 transition duration-300">Blog</a>
                <a href="#" class=" hover:text-blue-500 transition duration-300">Contact</a>
                <a href="#" class=" hover:text-blue-500 transition duration-300">About Us</a>
            </div>
            <ModeToggle/>
            <div class="flex items-center md:hidden">
                <button id="hamburger" class="hamburger focus:outline-none">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden">
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">Home</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">Blog</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">Contact</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">About Us</a>
    </div>
</div>



    </div>
  )
}

export default Navbar
