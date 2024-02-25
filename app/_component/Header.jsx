import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
    const Menu = [
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Search',
            path:'/'
        },
        {
            id:3,
            name:'How It Works',
            path:'/',
        },
        {
            id:4,
            name:'FAQ',
            path:'/'
        },
        {
            id:5,
            name:'Support',
            path:'/support'
        }
    ]
  return (
    <div className='container md:w-3xl mt-5 flex justify-between items-center bg-slate-200 h-20 p-5 rounded-md shadow-md'>
        <div className='flex gap-10 items-center'>
        <Image src='/logo.svg' alt='logo' width={250} height={220} />
        <ul className='gap-10 justify-center hidden sm:flex'>
        {
            Menu.map((item)=>{
                return (
                    <Link href={item.path} key={item.id}>
                    <li className='hover:text-secondary cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
                    {item.name}
                    </li>
                    </Link>
                )
            })
        }
        </ul>
        </div>
        <Button className='hover:bg-secondary'>Get Started</Button>
    </div>
  )
}

export default Header