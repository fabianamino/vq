"use client"
import GlobalApi from '../../../_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ModelsSuggestionList() {
    const [modelList, setModelList]=useState([]);
    useEffect(()=>{
      getModel();
    },[])
    const getModel=()=>{
      GlobalApi.getModel().then(resp=>{
        console.log(resp.data.data);
        setModelList(resp.data.data);
      })
    }
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='mb-3 font-bold'>Model Suggestions</h2>

        {modelList.map((model,index)=>(
            <Link href={'/details/'+model.id} className=' mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'>
                <Image 
                src={model?.attributes?.Image?.data.attributes?.url} 
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
                />
                <div className='mt-3 flex-col flex gap-1 items-baseline'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary'>{model.attributes.categories?.data[0]?.attributes?.Name}</h2>
                <h2 className='font-medium text-sm'>{model.attributes.Name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                    {/* <GraduationCap/> */}
                    {model.attributes.Year_of_Experience}</h2>
                    </div>
            </Link>
        ))}
    </div>
  )
}

export default ModelsSuggestionList