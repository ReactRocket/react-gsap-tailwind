import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-3 md:p-5">
      <div className="flex space-x-4">
        <Logo />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray">Menu 1</a>
        <a href="#" className="text-gray">Menu 2</a>
        <a href="#" className="text-gray">Menu 3</a>
        <a href="#" className="text-gray">Menu 4</a>
        <a href="#" className="text-gray">Menu 5</a>
        <a href="#" className="text-gray">Menu 6</a>
      </div>
      
      {/* Mobile Menu Button - Visible on tablet and mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-gray focus:outline-none" aria-label="Toggle menu">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div className="hidden md:flex justify-center items-center">
        <button className="buttonEffect">Contact Us</button>
      </div>
    </nav>
  )
}

export default Header