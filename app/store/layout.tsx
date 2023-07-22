'use client'

import NavLayout from "../components/navlayout"

const StoreLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <NavLayout>
      {children}
    </NavLayout>
  )
}

export default StoreLayout