'use client'

import { useEffect, useState } from 'react'

export function ScrollingProgress() {
  const [progressWidth, setProgressWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY

      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100

      setProgressWidth(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-full h-1 bg-primary-500 fixed top-16 z-20">
      <div
        className="h-full bg-secondary-main rounded-r-full"
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  )
}
