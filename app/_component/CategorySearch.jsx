'use client';

import React, {useEffect, useState} from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

const CategorySearch = () => {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList();


  }, [])
  const getCategoryList = () => {
    GlobalApi.getCategory().then(res => {
      setCategoryList(res.data.data);
    })
  }
  return (
    <div className='flex  flex-col container mx-auto px-4 sm:px-8 items-center justify-center text-center'>
        <h2 className='font-bold text-2xl'>Search <span className='text-primary hover:text-secondary'>Models, Video Vixen, Makeup Artists, </span> etc</h2>
        <p className='mt-3 text-sm'>Explore our comprehensive database to discover a diverse selection of models, captivating video vixens, talented makeup artists, bodyguards or security personnels, personal trainers, photographers, video graphers, etc </p>
         
        <div className="flex w-full max-w-sm items-center space-x-2 my-5 justify-center">
      <Input type="text" placeholder="Search..." />
      <Button type="submit" className=' hover:bg-secondary'> <Search className='size-4 mr-2'/> Search</Button>
    </div>

    {/* Display category list here */}
    <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-4 gap-4 '>
        {categoryList.length>0?categoryList.map((item,index)=>index<12&&(
          <Link href={'/search/'+item.attributes.Name} key={index} className='flex 
          flex-col text-center items-center
          p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out'>
            <label className='text-secondary hover:text-primary text-xs'>{item?.attributes?.Name}</label>
            <Image src={item?.attributes?.Icon?.data.attributes?.url}
            alt={item?.attributes?.Name}
            width={130}
            height={130}
            onError={(e)=>{e.target.src='https://res.cloudinary.com/dgxdplwsc/image/upload/v1708720162/vixen_704bd6d01c.png'; }}            
            />
          </Link>
        ))
      :
      [1,2,3,4,5,6].map((item,index)=>(
        <div className=' bg-slate-200 m-2
       w-[130px] h-[120px] rounded-lg animate-pulse'>
            
        </div>
    ))
     
      }
        </div>


    </div>
  )
}

export default CategorySearch