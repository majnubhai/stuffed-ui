'use client'

import NavLayout from "../components/layout/navLayout"

const StoreLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <NavLayout>
      {children}
    </NavLayout>
  )
}

export default StoreLayout