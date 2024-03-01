import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ModelList = ({modelList }) => {
  return (
    <div className='container my-5 font-semibold'>
        <h2 className='mb-5 text-center text-3xl text-primary'>The 10 Most Popular</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {modelList.length>0?modelList.map((model,index)=>(
                <div className='border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out'
                key={index}>
                    <Image src={model?.attributes?.Image?.data.attributes?.url}
                    alt={model?.attributes?.Name}
                    width={250}
                    height={250}
                    className='h-[200px] w-full object-cover rounded-sm'
                    onError={(e)=>{e.target.src='https://res.cloudinary.com/dgxdplwsc/image/upload/v1708720162/vixen_704bd6d01c.png'; }}            
                    />
                    <div className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{model?.attributes?.categories?.data?.attributes?.Name}</h2>
                        <h2 className='font-bold'>{model?.attributes?.Name}</h2>
                        <h2 className='text-primary text-sm'>{model?.attributes?.Age}</h2>
                        <h2 className='text-gray-500 text-sm'>{model.attributes?.Location}</h2>
                        <Link href={'/details/'+model?.id} className='w-full'>
                        <h2 className='p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[11px] mt-2
                        cursor-pointer 
                        hover:bg-primary hover:text-white'>Book Now</h2>
                        </Link>
                    </div>
                </div>
            ))
        :
        // Skelton Effect 
        [1,2,3,4,5,6].map((model,index)=>(
            <div className='h-[220px] bg-slate-200 space-5
            w-full rounded-lg animate-pulse'>

            </div>
        ))
       
        }        </div>
    </div>
  )
}

export default ModelList