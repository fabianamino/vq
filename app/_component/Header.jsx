'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
  



const Header = () => {

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Search',
            path: '/search'
        },
        {
            id: 3,
            name: 'How It Works',
            path: '/how-it-works'
        },
        {
            id: 4,
            name: 'FAQ',
            path: '/faq'
        },
        {
            id: 5,
            name: 'Support',
            path: '/support'
        }
    ]

    const {user} = useKindeBrowserClient();
    
    useEffect(() => {
        console.log(user);

    }, [user])

    return (
        <div className="container md:w-3xl mt-5 flex justify-between items-center bg-slate-200 h-20 p-5 rounded-md shadow-md">
            <div className="flex gap-10 items-center">
                <Image src="/logo.svg" alt="logo" width={250} height={220} />
                <ul className="gap-10 justify-center hidden sm:flex">
                    {Menu.map((item) => {
                        return (
                            <Link href={item.path} key={item.id}>
                                <li className="hover:text-secondary cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>

            <div className="flex gap-10 items-center">

                {user? 

<Popover>
<PopoverTrigger>
<Image 
                src={user?.picture}
                alt='profile image'
                width={40}
                height={40}
                className='rounded-full'
                />


</PopoverTrigger>
<PopoverContent>
    <ul className='flex flex-col gap-2 m-3 mt-5'>
        <li className='hover:text-primary hover:scale-105 hover:bg-lime-50 cursor-pointer pl-5 rounded-md'>Profile</li>
        <li className='hover:text-primary hover:scale-105 cursor-pointer hover:bg-lime-50 pl-5 rounded-md'>My Bookings</li>
        <li className='hover:text-primary hover:scale-105 cursor-pointer hover:bg-lime-50 pl-5 rounded-md'><LogoutLink>Logout</LogoutLink> </li>
    </ul>
</PopoverContent>
</Popover>      
                :  <LoginLink> <Button>Get Started</Button></LoginLink>}

                </div>

        </div>
    )
}


export default Header;