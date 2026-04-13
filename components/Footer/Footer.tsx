import {
	ArrowUp as ArrowUpIcon,
	Link as LinkIcon,
	UserRound as UserRoundIcon,
} from 'lucide-react';
import { Button } from '../ui';

export function Footer() {
	return (
		<footer className='bg-black py-8 relative z-50'>
			<div className=' max-w-7xl mx-auto px-5'>
				<div className='flex justify-center flex-wrap md:flex-nowrap gap-6 mb-6'>

					<div className='space-y-5 w-full'>
						<div className='flex justify-start items-center  gap-2 mb-3'>
							<UserRoundIcon className='text-white' size={16}/>
							<h3 className='text-white text-xl font-bold uppercase'>
								Alim Bodzhgua
							</h3>
						</div>
						<p className='text-gray-400'>
							Frontend developer building modern and scalable web applications
						</p>
					</div>

					<div className='flex flex-col items-start w-full'>
						<div className='flex justify-start items-center gap-2 mb-3'>
							<LinkIcon className='text-white' size={16}/>
							<h3 className='text-white text-xl font-bold uppercase'>Quick Links</h3>
						</div>
						<nav className='flex flex-row gap-3 text-gray-400'>
							<a href='#home' className='transition-colors hover:text-white'>Home</a>
							<a href='#about' className='transition-colors hover:text-white'>About</a>
							<a href='#skills' className='transition-colors hover:text-white'>Skills</a>
							<a href='#portfolio' className='transition-colors hover:text-white'>Portfolio</a>
							<a href='#contact' className='transition-colors hover:text-white'>Contact</a>
						</nav>
					</div>
				</div>

				<div className='flex justify-between py-6 border-t border-gray-400'>
					<div className='text-gray-400'>
						<span className='font-bold mr-1'>&#169;</span>
						2026 Alim Bodzhuga. All rights reserved. Built with Next.js & Tailwind CSS.
					</div>
					<Button className='rounded-3xl transition-transform hover:-translate-y-1' size='icon' asChild>
						<a href="#home">
							<ArrowUpIcon />
						</a>
					</Button>
				</div>
			</div>
		</footer>
	);
}
