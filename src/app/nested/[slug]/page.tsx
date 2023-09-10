import React from 'react'

import Banners from '@/components/Banners'
import Menu from '@/components/Menu'


const page: React.FC = () => {
  console.log('Page rendered')

  return (
    <div>
      <Banners />
      <Menu />
    </div>
  )
}

export default page
