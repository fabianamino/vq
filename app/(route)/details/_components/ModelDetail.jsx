import Image from 'next/image';

function ModelDetail({model}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mb-10'>
                {/* Model Image */}
                <div>
                  <Image
                  src={model?.attributes?.Image?.data.attributes?.url} 
                  alt={model?.attributes?.Name}
                  width={250}
                  height={250}
                  className='rounded-full h-[240px] w-full object-cover'
                  />
                </div>
                {/* Model Info  */}
                <div className='col-span-2'>
                  <h2 className='font-bold text-2xl mt-5 ml-5'>
                {model?.attributes?.Name}
                  </h2>
                  <div className='bg-primary rounded-full relative top-0 left-[-40px] w-[5rem] flex justify-center items-center text-bold'>
                  <h2 className='text-white text-xl px-10 py-2 text-bold'>
                    {model?.attributes?.Age}
                    </h2>
                    </div>
                    <div className='m-3'>
                    <div className='bg-primary rounded-full relative top-20 left-[-60px] w-[5rem] flex justify-center items-center text-bold'>
                    <h2 className='text-white text-lg text-bold px-10 py-2'>{model.attributes?.Location}</h2>
                      </div>
                      <div className='bg-primary rounded-full relative top-20 left-[-180px] w-[5rem] flex justify-center items-center text-bold'>
                      <h2 className='text-white text-md text-bold px-10 py-2'>{model.attributes?.categories?.data?.attributes?.Name}</h2>
                      </div>

                    </div>
                </div>
            </div>
  )
}

export default ModelDetail;