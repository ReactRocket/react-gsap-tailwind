import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <nav class="flex items-center justify-between p-5">
        <div class="flex space-x-4">
            <Logo/>
        </div>
        <div class="flex space-x-8 ">
            <a href="#" class="text-gray">Menu 1</a>
            <a href="#" class="text-gray">Menu 2</a>
            <a href="#" class="text-gray">Menu 3</a>
            <a href="#" class="text-gray">Menu 4</a>
            <a href="#" class="text-gray">Menu 5</a>
            <a href="#" class="text-gray">Menu 6</a>
        </div>
        <div>
            <a href="#" class="border-2 text-orange border-orange font-bold letter-spacing-2 px-4 py-2">Contact Us</a>
        </div>
    </nav>

  )
}

export default Header