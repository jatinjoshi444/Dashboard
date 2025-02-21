import React from 'react'
import { MdDashboard, MdSettings, MdPeople, MdBarChart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const SideNavbar = () => {

    const menuList = [
        {
            id:1,
            name:"first",
            icon:MdDashboard,
            path:"/home"
        },
        {
            id:2,
            name:"second",
            icon:MdBarChart,
            path:"/home/second"
        },
        {
            id:3,
            name:"Third",
            icon:MdPeople,
            path:"/home/third"
        },
        {
            id:4,
            name:"Settings",
            icon:MdSettings,
            path:"/home/setting"
        },
    ]

  return (
    <>
         <div className='fixed w-64'> 
            <div className='border shadow-md h-screen'>
                <h2 className='p-5 font-bold text-2xl flex justify-center'>Logo</h2>

                <hr className='m-5' />

                {menuList.map((menu,index)=>(
                    <Link href={menu.path} >
                    <h3 className='flex items-center p-2 gap-3 text-lg text-slate-500 hover:bg-blue-800 hover:text-white m-1 rounded-lg cursor-pointer' key={menu.id}>
                    <menu.icon/>
                    {menu.name}
                   </h3>
                   </Link>
                ))}

                <div className='flex items-center gap-2 bottom-10 fixed p-4'>
                    <FaUserCircle/>
                    <div>
                        <h3>Name</h3>
                        <h3>usergmail.com</h3>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SideNavbar