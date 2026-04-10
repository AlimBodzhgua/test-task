import { Button } from '@/components/ui';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Particles from '@/components/ui/particles';
import {
	Mail as MailIcon,
	MapPin as MapPinIcon,
	Phone as PhoneIcon,
	Send as SendIcon,
} from 'lucide-react';
import Image from 'next/image';

export function Contact() {
	return (
		<section className='relative h-screen bg-gray-950 flex flex-col items-center overflow-hidden'>
			<div className='absolute inset-0 z-0'>
				<Particles
					particleColors={['#ffffff']}
					particleCount={220}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={false}
					alphaParticles
					disableRotation
					pixelRatio={1}
				/>
			</div>

			<h1 className='text-6xl text-white font-bold my-15'>Get in touch</h1>
			<CardContainer className='bg-gray-900/60 rounded-2xl py-8 px-14 hover:shadow-xl hover:shadow-blue-400'>
				<CardBody className='relative border-black/10 rounded-xl p-4 border w-auto h-auto'>
					<CardItem
						as='h2'
						translateZ='50'
						className='text-2xl text-white font-bold mb-6'
					>
						Contact information
					</CardItem>

					<div className='flex flex-row gap-30'>
						<CardItem
							as='div'
							translateX='-15'
							translateZ='40'
							className='flex flex-col gap-6'
						>
							<a
								className='group flex items-center gap-4 cursor-pointer'
								href='mailto:bodzhgua2015@mail.ru'
							>
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
						</CardItem>

						<CardItem
							as='div'
							translateX='15'
							translateZ='40'
							className='flex flex-col gap-6'
						>
							<a
								className='group flex items-center gap-4 cursor-pointer'
								href='tel:+79676632677'
							>
								<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600 group-hover:bg-blue-500/35 group-hover:text-blue-400 group-hover:border-blue-900'>
									<PhoneIcon />
								</div>
								<div>
									<div className='text-gray-500 font-semibold'>Phone</div>
									<div className='text-gray-400 group-hover:text-white'>
										+7 967 663 26 77
									</div>
								</div>
							</a>

							<a
								className='group flex items-center gap-4'
								href='https://t.me/alimbodzhgua'
							>
								<div className='bg-[#141820] text-gray-500 p-4 rounded-2xl border-2 border-gray-600'>
									<MapPinIcon />
								</div>
								<div>
									<div className='text-gray-500 font-semibold'>Location</div>
									<div className='text-gray-400'>Russia, Krasnodar</div>
								</div>
							</a>
						</CardItem>
					</div>

					<div className='flex flex-col justify-between items-start mt-15'>
						<CardItem
							as='h2'
							translateZ='50'
							className='text-2xl text-white font-bold mb-6'
						>
							Follow me
						</CardItem>
						<CardItem translateX='-10' translateZ='35'>
							<Button
								asChild
								size='lg'
								className='group rounded-xl bg-[#141820] py-6 border-2 border-gray-600 hover:border-blue-900 hover:-translate-y-1 hover:bg-blue-500/35'
							>
								<a href='https://github.com/AlimBodzhgua' target='_blank'>
									<Image
										src={`/icons/github.svg`}
										width={36}
										height={36}
										alt='GitHub icon'
									/>
									<div className='text-lg text-gray-400'>GitHub</div>
								</a>
							</Button>
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</section>
	);
}
