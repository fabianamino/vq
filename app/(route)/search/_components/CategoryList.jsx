'use client'
import { useEffect, useState } from 'react';
import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../../../../components/ui/command';
import GlobalApi from '../../../_utils/GlobalApi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    const params = usePathname();
    const category = params.split('/')[2];
    console.log(category);

    useEffect(()=>{
      getCategoryList();
    }, [])
    const getCategoryList = () => {
      GlobalApi.getCategory().then(res => {
        setCategoryList(res.data.data);
      })
    }
  
  return (
    <div className='h-fit flex flex-col mt-2'>
    <Command className="rounded-lg">
      <CommandInput placeholder="Type a command or search..." className='my-3 pl-3 border border-primary' />
      <CommandList className=''>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" className=' text-primary overflow-visible mx-2 justify-center'>
          {categoryList.length>0?categoryList.map((item,index)=>index<12&&(
            <CommandItem key={index}>
              <div className={`hover:bg-sky-50 hover:border-green-700 w-full rounded-md ${category==item.attributes.Name.replace(/ /g, '_')&&'bg-lime-200 items-center ring-2 ring-lime-500' }`}>
              <Link href={'/search/' + item.attributes.Name.replace(/ /g, '_')} className='flex text-center items-center rounded-md cursor-pointer'>
  <Image src={item?.attributes?.Image?.data.attributes?.url} alt={item?.attributes?.Name} width={40} height={30} />
              <label className='ml-5'>{item?.attributes?.Name}</label>
              </Link>
              </div>
            </CommandItem>
          ))
          :''
          }
        </CommandGroup>
      </CommandList>
    </Command>
    </div>
  )
}

export default CategoryList;