import {
	ArrowUp as ArrowUpIcon,
	Link as LinkIcon,
	Mail as MailIcon,
	UserRound as UserRoundIcon,
} from 'lucide-react';
import { Button } from '../ui';

export function Footer() {
	return (
		<footer className='bg-black py-8'>
			<div className=' max-w-7xl mx-auto'>
				<div className='flex justify-center gap-10 mb-10'>

					<div className='space-y-5 w-[33%]'>
						<div className='flex justify-start items-center  gap-2 mb-3'>
							<UserRoundIcon className='text-white' size={16}/>
							<h3 className='text-white text-xl font-bold uppercase'>
								Alim Bodzhgua
							</h3>
						</div>
						<p className='text-gray-400 w-[60%]'>
							Frontend developer building modern and scalable web applications
						</p>
					</div>

					<div className='flex flex-col items-start w-[33%]'>
						<div className='flex justify-start items-center gap-2 mb-3'>
							<LinkIcon className='text-white' size={16}/>
							<h3 className='text-white font-bold uppercase'>Quick Links</h3>
						</div>
						<nav className='flex flex-col gap-2 text-gray-400'>
							<div>Home</div>
							<div>Skills</div>
							<div>Portfolio</div>
							<div>Contact</div>
						</nav>
					</div>

					<div className='w-[33%]'>
						<div className='flex justify-start items-center gap-2 mb-3'>
							<MailIcon className='text-white' size={16}/>
							<h3 className='text-white font-bold uppercase'>Socials</h3>
						</div>
					</div>
				</div>

				<div className='flex justify-between py-6 border-t border-gray-400'>
					<div className='text-gray-400'>
						<span className='font-bold mr-1'>&#169;</span>
						2026 Alim Bodzhuga. All rights reserved. Built with Next.js & Tailwind CSS.
					</div>
					<Button className='rounded-3xl' size='icon'>
						<ArrowUpIcon />
					</Button>
				</div>
			</div>
		</footer>
	);
}
