'use client'

import { drawerContext } from '@/contexts/drawer-context'
import Link from 'next/link'
import { useContext } from 'react'

interface DrawerItemProps {
  label: string
  url: string
}

export function DrawerItem({ label, url }: DrawerItemProps) {
  const { toggleMenu } = useContext(drawerContext)

  return (
    <Link
      onClick={toggleMenu}
      href={`#${url}`}
      prefetch={false}
      className="flex justify-center w-full text-center py-4 hover:bg-primary-300 rounded-lg transition-colors"
    >
      <div className="text-xl font-medium">{label}</div>
    </Link>
  )
}
