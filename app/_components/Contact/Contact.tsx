import { Button } from '@/components/ui';
import {
	Mail as MailIcon,
	MapPin as MapPinIcon,
	Phone as PhoneIcon,
	Send as SendIcon,
} from 'lucide-react';
import Image from 'next/image';

export function Contact() {
	return (
		<section className='h-screen bg-gray-950 flex flex-col items-center'>
			<h1 className='text-6xl text-white font-bold my-15'>Get in touch</h1>
			<div className='bg-black rounded-2xl py-8 px-14 mt-15'>
				<h2 className='text-2xl text-white font-bold mb-6'>Contact information</h2>

				<div className='flex flex-wrap gap-30'>
					<div className='flex flex-col gap-6'>
						<a className='group flex items-center gap-4 cursor-pointer'>
							<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600 group-hover:bg-blue-500/35 group-hover:text-blue-400 group-hover:border-blue-900'>
								<MailIcon />
							</div>
							<div>
								<div className='text-gray-500 font-semibold'>Email</div>
								<div className='text-gray-400 group-hover:text-white'>
									bodzhgua2015@mail.ru
								</div>
							</div>
						</a>

						<a
							className='group flex items-center gap-4 cursor-pointer'
							href='https://t.me/alimbodzhgua'
						>
							<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600 group-hover:bg-blue-500/35 group-hover:text-blue-400 group-hover:border-blue-900'>
								<SendIcon />
							</div>
							<div>
								<div className='text-gray-500 font-semibold'>Telegram</div>
								<div className='text-gray-400 group-hover:text-white'>
									t.me/alimbodzhgua
								</div>
							</div>
						</a>
					</div>

					<div className='flex flex-col gap-6'>
						<a className='group flex items-center gap-4 cursor-pointer'>
							<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600 group-hover:bg-blue-500/35 group-hover:text-blue-400 group-hover:border-blue-900'>
								<PhoneIcon />
							</div>
							<div>
								<div className='text-gray-500 font-semibold'>Phone</div>
								<div className='text-gray-400 group-hover:text-white'>
									+7 967 664 26 77
								</div>
							</div>
						</a>
						
						<div className='flex items-center gap-4'>
							<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600'>
								<MapPinIcon />
							</div>
							<div>
								<div className='text-gray-500 font-semibold'>Location</div>
								<div className='text-gray-400'>Russia, Krasnodar</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6'>
					<h2 className='text-2xl text-white font-bold mb-4'>Follow me</h2>
					<Button asChild size='lg' className='group bg-[#141820] py-6 border-2 border-gray-600 hover:border-blue-900 hover:-translate-y-1 hover:bg-blue-500/35'>
						<a href='https://github.com/AlimBodzhgua' target='_blank'>
							<Image
								src={`/icons/github.svg`}
								width={36}
								height={36}
								alt='GitHub icon'
							/>
							<div className='text-lg text-gray-400'>
								GitHub
							</div>
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
