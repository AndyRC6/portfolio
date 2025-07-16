'use client'

import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
        <div className="flex flex-1 lg:hidden justify-center items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
