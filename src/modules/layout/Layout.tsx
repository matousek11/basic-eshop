import React, { FC, ReactNode } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

interface layoutProps {
  children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
