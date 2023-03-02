import React from 'react'
import { car1, car2, car3, car4 } from '../assets'
const Blogs = () => {
  return (
    <section className="p-10 dark:bg-gray-800 bg-primary  dark:text-gray-100
	" id="blogs">
	<div className="container mx-auto space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-bold font-poppins text-black">Acheiving the excellence</h2>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col  dark:bg-gray-900  border border-dimYellow rounded-md p-2">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52
                     dark:bg-gray-500" src={car1} />
				</a>
				<div className="flex flex-col flex-1 p-6 ">
					<a rel="noopener noreferrer" href="#" aria-label="Te 
                    nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs 
                    font-poppins text-black tracking-wider uppercase hover:underline 
					dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-poppins
					 text-black">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span className='font-poppins text-black'>June 1, 2020</span>
						<span className='font-poppins text-black'>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900  border border-dimYellow rounded-md p-2">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-fit w-full h-52
                     dark:bg-gray-500" src={car2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs
                    font-poppins text-black tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-poppins
                     text-black">
                        Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs
					 dark:text-gray-400">
						<span className='font-poppins text-black'>June 2, 2020</span>
						<span className='font-poppins text-black'>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900  border border-dimYellow rounded-md p-2">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" 
                    src={car4} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" 
                    aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs
                     tracking-wider uppercase hover:underline dark:text-violet-400 font-poppins text-black">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-poppins text-black">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span className='font-poppins text-black'>June 3, 2020</span>
						<span className='font-poppins text-black'>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900 border border-dimYellow rounded-md p-2">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-fit w-full h-52 dark:bg-gray-500" 
                    src={car3} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" 
                    className="text-xs tracking-wider uppercase hover:underline
                     dark:text-violet-400 font-poppins text-black">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug 
                    font-poppins text-black">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs
                     dark:text-gray-400">
						<span className='font-poppins text-black'> June 4, 2020</span>
						<span className='font-poppins text-black'> 2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
  )
}

export default Blogs
