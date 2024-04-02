import { LocateIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { HtmlContext } from 'next/dist/shared/lib/html-context.shared-runtime';


function ModelDetail({model}) {
  const socialMediaList = [
    {
      id: 1,
      icon: '/youtube.png',
      url: ''
    },
    {
      id: 2,
      icon: '/instagram.png',
      url: ''

    },
    {
      id: 3,
      icon: '/twitter.png',
      url: ''

    },
    {
      id: 4,
      icon: '/linkedin.png',
      url: ''

    },
    {
      id: 5,
      icon: '/facebook.png',
      url: ''
    },
    {
      id: 6,
      icon: '/whatsapp.png',
      url: ''
    }
  ]



  return (

    
    <div className='grid grid-cols-1 md:grid-cols-3 mb-10 border border-primary m-5 rounded-lg'>
                {/* Model Image */}
                <div>
                  <Image
                  src={model?.attributes?.Image?.data.attributes?.url} 
                  alt={model?.attributes?.Name}
                  width={250}
                  height={250}
                  className='rounded-full h-[250px] w-[250px] object-cover m-10'
                  />
                </div>
                {/* Model Info  */}
                <div className='col-span-2'>
                  <h2 className='font-bold text-2xl mt-5 ml-5'>
                {model?.attributes?.Name}
                  </h2>
                  <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary w-fit baseline font-bold'>{model.attributes?.categories?.data?.attributes?.Name}</h2>
                  <h2 className='text-primary text-md px-10 text-bold flex gap-3'>
                    <User />{model?.attributes?.Age} Years Old
                    </h2>
                    <div className=''>
                    <h2 className='text-primary text-md text-bold px-10 flex gap-3'><LocateIcon /> {model.attributes?.Location} Kenya</h2>
                      <div className='bg-primary rounded-full relative md:top-18 md:left-[-70px] w-[5rem] flex justify-center items-center text-bold'>
                      </div>

                     

                     

                    </div>

                    <div className='flex flex-row gap-1 mb-5'>
                        {socialMediaList.map((socialMedia,index)=>(
                          <div className='flex gap-2 my-10 ml-5' key={index}>
                             <Link href={socialMedia.url} target='_blank' rel='noreferrer'>
                            <Image
                             src={socialMedia.icon}
                              alt='social media icon'
                              width={25}
                              height={25}
                               className='h-6 w-6' />

                           </Link>
                            </div>
                            ))}
                        </div>

                        <Button className='w-fit rounded-full mt-5 px-7 py-3 mb-10 ml-5' text='Book Now' link='/book-now'>
                          Book Now
                          </Button> 

                          <div className='col-span-3 border-t border-primary rounded-xl mt-10'>
                  <h2 className='font-bold text-xl mt-5 ml-5'>About {model?.attributes?.Name}</h2>
                  <p className='text-primary text-md px-10 tracking-wider my-10'>
                  {model?.attributes?.Description}
                    </p>






                    

                  </div>


                </div>
                {/* About Model */}
               
            </div>
  )
}

export default ModelDetail;