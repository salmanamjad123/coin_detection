'use client'
import { useState } from 'react'
import { HeaderItem } from '../../../../types/menu'
import NavLink from './NavLink'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <NavLink
        href={item.href}
        className="header-link flex items-center gap-1"
        activeClassName="text-accent"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </NavLink>

      {submenuOpen && item.submenu && (
        <div className="absolute py-2 left-0 mt-0.5 w-60 bg-dark shadow-lg rounded-lg">
          {item.submenu.map((subItem, index) => (
            <NavLink
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-white hover:bg-accent hover:text-dark transition-colors duration-200"
              activeClassName="bg-accent text-dark"
            >
              {subItem.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
