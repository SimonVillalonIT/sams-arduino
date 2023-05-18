import React from 'react'
import CloseMenu from './CloseMenu'
import Dashboard from './Dashboard'
import MenuLinks from './MenuLinks'

function Menu({menu}:any) {
  return (
    <div
        ref={menu}
        className="bg-white fixed translate-x-[800px] duration-300 top-0 h-screen w-screen flex justify-center items-center md:hidden"
      >
        <CloseMenu menu={menu} />
        <Dashboard mobile={false} />
        <MenuLinks />
      </div>
  )
}

export default Menu