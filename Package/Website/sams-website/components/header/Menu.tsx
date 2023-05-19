import React from 'react'
import CloseMenu from './CloseMenu'
import MenuLinks from './MenuLinks'

function Menu({menu}:any) {
  return (
    <div
        ref={menu}
        className="bg-white text-xl fixed translate-x-[800px] duration-300 top-0 border-l border-primary h-screen w-[45%] flex justify-start items-start md:hidden"
      >
        <CloseMenu menu={menu} />
        <MenuLinks />
        
      </div>
  )
}

export default Menu