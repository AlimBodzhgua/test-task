import { BlurFade, Button, CardBody, CardContainer, CardItem } from '@/components/ui';
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
		<section id='contact' className='relative flex h-screen flex-col items-center overflow-hidden bg-gray-950'>
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

			<div className='flex flex-col items-center justify-center gap-3 pt-12'>
				<BlurFade duration={0.7} direction='up' inView>
					<h1 className='text-6xl font-bold text-gray-300'>Get in touch</h1>
				</BlurFade>
				<BlurFade duration={0.9} direction='up' inView>
					<h2 className='text-4xl font-light text-gray-400'>
						Let's build something together.
					</h2>
				</BlurFade>
			</div>
			<BlurFade duration={0.7} direction='down' inView>
				<CardContainer className='rounded-2xl bg-gray-900/60 px-14 py-6 hover:shadow-xl hover:shadow-blue-400'>
					<CardBody className='relative h-auto w-auto rounded-xl border border-black/10 p-4'>
						<CardItem
							as='h2'
							translateZ='50'
							className='mb-6 text-2xl font-bold text-white'
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
									className='group/link flex cursor-pointer items-center gap-4'
									href='mailto:bodzhgua2015@mail.ru'
								>
									<div className='rounded-2xl border-2 border-gray-600 bg-[#141820] p-4 text-gray-500 group-hover/link:border-blue-900 group-hover/link:bg-blue-500/35 group-hover/link:text-blue-400'>
										<MailIcon />
									</div>
									<div>
										<div className='font-semibold text-gray-500'>
											Email
										</div>
										<div className='text-gray-400 group-hover/link:text-white'>
											bodzhgua2015@mail.ru
										</div>
									</div>
								</a>

								<a
									className='group/link flex cursor-pointer items-center gap-4'
									href='https://t.me/alimbodzhgua'
								>
									<div className='rounded-2xl border-2 border-gray-600 bg-[#141820] p-4 text-gray-500 group-hover/link:border-blue-900 group-hover/link:bg-blue-500/35 group-hover/link:text-blue-400'>
										<SendIcon />
									</div>
									<div>
										<div className='font-semibold text-gray-500'>
											Telegram
										</div>
										<div className='text-gray-400 group-hover/link:text-white'>
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
									className='group/link flex cursor-pointer items-center gap-4'
									href='tel:+79676632677'
								>
									<div className='rounded-2xl border-2 border-gray-600 bg-[#141820] p-4 text-gray-500 group-hover/link:border-blue-900 group-hover/link:bg-blue-500/35 group-hover/link:text-blue-400'>
										<PhoneIcon />
									</div>
									<div>
										<div className='font-semibold text-gray-500'>
											Phone
										</div>
										<div className='text-gray-400 group-hover/link:text-white'>
											+7 967 663 26 77
										</div>
									</div>
								</a>

								<a
									className='group/link flex items-center gap-4'
									href='https://t.me/alimbodzhgua'
								>
									<div className='rounded-2xl border-2 border-gray-600 bg-[#141820] p-4 text-gray-500'>
										<MapPinIcon />
									</div>
									<div>
										<div className='font-semibold text-gray-500'>
											Location
										</div>
										<div className='text-gray-400'>Russia, Krasnodar</div>
									</div>
								</a>
							</CardItem>
						</div>

						<div className='mt-15 flex flex-col items-start justify-between'>
							<CardItem
								as='h2'
								translateZ='50'
								className='mb-6 text-2xl font-bold text-white'
							>
								Follow me
							</CardItem>
							<CardItem translateX='-10' translateZ='35'>
								<Button
									asChild
									size='lg'
									className='rounded-xl border-2 border-gray-600 bg-[#141820] py-6 hover:-translate-y-1 hover:border-blue-900 hover:bg-blue-500/35'
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
			</BlurFade>
		</section>
	);
}
