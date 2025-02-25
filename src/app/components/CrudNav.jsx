import React from 'react'
import Link from 'next/link'

const CrudNav = () => {
  return (
    <>
        <nav className='flex justify-between bg-slate-800 py-3 px-8 mb-8 h-fit w-full'>
            <Link className='text-white font-bold text-2xl' href={"#"}>CRUD</Link>
            <Link className='bg-white p-2' href={"#"}>Add Topic</Link>
        </nav>
    </>
  )
}

export default CrudNav