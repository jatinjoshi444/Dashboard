import SideNavbar from '@/app/home/components/SideNavbar'
import React from 'react'
import Header from '@/app/home/components/Header'

const page = () => {
  return (
    <>
      <div className=' md:block'>
      <SideNavbar/>
      </div>
      <div className='ml-64'>
      <Header />
      </div>
    </>
  )
}

export default page