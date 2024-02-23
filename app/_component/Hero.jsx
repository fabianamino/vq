import React from 'react';

const HeroSection = () => {
  return (
    <div>
    <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/models.png" alt="" className="object-contain box h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Book
				<span className="dark:text-violet-400"> a </span> Video <span className='text-orange-500'>Vixen or Model</span> Here
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Are you looking to add an extra touch of glamour, style, or charisma to your project? 
				<br  className="hidden md:inline lg:hidden" /> <span>Vixening has all the vixens and models you need to make it pop! </span>🌟. 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:text-primary hover:scale-105">Register as a Model</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 bg-primary text-white hover:text-sky-200 hover?:scale-105">Book a Model</a>
			</div>
		</div>
	</div>
</section>
    </div>
    </div>
  )
}
export default HeroSection;