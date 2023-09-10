'use client'
import React from 'react'
import Link from 'next/link'


const Menu: React.FC = () => {
  console.log('Menu rendered')

  return (
    <div className="flex gap-5">
      <Link href="/nested/foo">
        Foo
      </Link>
      <Link href="/nested/bar">
        Bar
      </Link>
      <Link href="/nested/zoo">
        Zoo
      </Link>
    </div>
  )
}

export default Menu
