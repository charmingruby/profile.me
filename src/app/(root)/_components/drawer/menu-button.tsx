'use client'

import { drawerContext } from '@/contexts/drawer-context'
import { Menu, X } from 'lucide-react'
import { useContext } from 'react'

export function MenuButton() {
  const { toggleMenu, isOpen } = useContext(drawerContext)

  return (
    <button onClick={toggleMenu}>
      {isOpen ? (
        <X className="text-gray-palette-0 h-7 w-7" />
      ) : (
        <Menu className="text-gray-palette-0 h-7 w-7" />
      )}
    </button>
  )
}
