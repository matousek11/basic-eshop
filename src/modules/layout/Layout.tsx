import React, { ReactNode } from 'react'

interface layoutProps

const Layout = ({children}:ReactNode) => {
  return (
    <div>{children}</div>
  )
}

export default Layout