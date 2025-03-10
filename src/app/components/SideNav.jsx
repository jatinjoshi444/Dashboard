"use client";
import { MdDashboard, MdSettings, MdPeople, MdBarChart } from "react-icons/md";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

const SideNavbar = () => {
     const menuList = [
        {
            id:1,
            name:"Dashboard",
            icon:MdDashboard,
            path:"/home"
        },
        {
            id:2,
            name:"Projects",
            icon:MdBarChart,
            path:"/home/projects"
        },
        {
            id:3,
            name:"Team",
            icon:MdPeople,
            path:"/home/team"
        },
        {
            id:3,
            name:"Product Details",
            icon:FaShoppingCart,
            path:"/home/product"
        },
        {
            id:5,
            name:"Setting",
            icon:MdSettings,
            path:"/home/setting"
        }
    ]

  return (
    <>
         <aside className='w-64'> 
            <div className='border shadow-md h-screen '>
                <h2 className='p-5 font-bold text-2xl flex justify-center'>Logo</h2>

                <hr className='m-5' />

                {menuList.map((menu,index)=>(
                    <Link key={index} href={menu.path} >
                    <h3 className='flex items-center p-2 gap-3 text-lg text-slate-500 hover:bg-blue-800 hover:text-white m-1 rounded-lg cursor-pointer' key={menu.id}>
                    <menu.icon/>
                    {menu.name}
                   </h3>
                   </Link>
                ))}

                <div className='flex items-center gap-2 bottom-10 fixed p-4'>
                    <FaUserCircle/>
                    <div>
                        <h3>Sahu</h3>
                        <h3>Sahu@gmail.com</h3>
                    </div>
                </div>

            </div>
        </aside>
    </>
  )
}

export default SideNavbar