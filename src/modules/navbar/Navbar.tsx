import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-x-5 p-4">
      <p>Eshop</p>
      <p>Offers</p>
      <img className="h-6" src="/icons/cart-shopping-solid.svg" />
    </nav>
  )
}

export default Navbar
