import { CircleCheckIcon, MapPinIcon } from 'lucide-react';
import { BlurFade, ShineBorder, TextShimmer, Tilt } from '@/components/ui';
import { statCardsList } from '../constants';
import { StatCard } from './StatCard';

export function AboutSection() {
	return (
		<section
			className='flex h-full lg:h-full xl:h-screen flex-col bg-linear-to-r from-gray-900
				to-black py-6 lg:py-12'
			id='about'
		>
			<div className='flex flex-col items-center justify-center gap-2'>
				<BlurFade duration={0.7} direction='up' inView>
					<h1 className='text-5xl lg:text-7xl font-bold text-white uppercase'>
						About
					</h1>
				</BlurFade>
				<BlurFade duration={0.9} direction='up' inView>
					<h2 className='text-2xl lg:text-4xl font-light text-gray-300'>
						Get to know me better
					</h2>
				</BlurFade>
			</div>

			<div className='mt-4 lg:mt-8 flex flex-col items-start lg:flex-row gap-8 px-10'>
				<BlurFade
					duration={0.7}
					direction='right'
					className='w-full h-full lg:w-[50%]'
					inView
				>
					<div
						className='flex flex-col gap-2 lg:gap-4 text-md lg:text-lg xl:text-xl
							text-gray-400'
					>
						<p>
							Frontend developer with 2+ years of intensive independent practice
							in React and TypeScript.
						</p>
						<p>
							I've mastered frontend development and created several full-stack
							applications using React and TypeScript. I have experience building
							projects from scratch (Vite / Webpack), writing unit and screenshot
							tests (Jest, react-testing-library, Storybook + Loki), integrating
							the REST API, as well as developing the basic backend (Express,
							MongoDB/Postgres) and building images and containers using Docker
							to deploy the application, and also experience working with FSD
							architecture.
						</p>
						<p>
							I am looking for a job as a Junior Frontend Developer in a team to
							deepen my knowledge and explore new technologies, participate in
							code review and work on real projects.
						</p>
					</div>
				</BlurFade>

				<div className='flex items-center justify-center h-full w-full lg:w-[50%]'>
					<BlurFade duration={0.7} className='' direction='left' inView>
						<div
							className='relative flex flex-col items-center rounded-3xl border-0
								bg-gray-950 p-5 lg:p-8 text-white'
						>
							<ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
							<div className='flex flex-col items-center gap-2'>
								<Tilt
									rotationFactor={20}
									className='group/avatar hover:scale-105'
								>
									<div
										className='flex h-30.25 w-30.25 lg:h-36.25 lg:w-36.25
											items-center justify-center rounded-full
											bg-blue-300 bg-linear-to-r from-gray-800
											via-slate-900 to-gray-900 transition-shadow
											delay-200 hover:shadow-xl hover:shadow-purple-400'
									>
										<ShineBorder
											shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
											className='rounded-full'
										/>
										<h1
											className='text-4xl lg:text-6xl font-extrabold
												text-white/60 transition-transform
												group-hover/avatar:-translate-y-1.5'
										>
											AB
										</h1>
									</div>
								</Tilt>
								<h3 className='mt-2 text-2xl lg:text-3xl font-bold'>
									Alim Bodzhgua
								</h3>
								<h4 className='text-xl lg:text-2xl font-medium text-gray-400'>
									Frontend Developer
								</h4>
							</div>
							<div className='my-4 lg:my-6 flex items-center gap-4'>
								<div
									className='flex items-center gap-2 rounded-2xl border
										border-blue-400 px-3 py-2 text-blue-600'
								>
									<MapPinIcon size={21} className='text-blue-300' />
									<TextShimmer
										duration={3}
										className='text-sm lg:text-lg
											[--base-color:var(--color-blue-600)]
											[--base-gradient-color:var(--color-blue-200)]
											dark:[--base-color:var(--color-blue-700)]
											dark:[--base-gradient-color:var(--color-blue-400)]'
									>
										Russia, Krasnodar
									</TextShimmer>
								</div>
								<div
									className='flex items-center gap-2 rounded-2xl border
										border-green-400 px-3 py-2 text-green-600'
								>
									<CircleCheckIcon size={21} className='text-green-300' />
									<TextShimmer
										duration={3}
										className='text-sm lg:text-lg
											[--base-color:var(--color-green-600)]
											[--base-gradient-color:var(--color-green-200)]
											dark:[--base-color:var(--color-green-700)]
											dark:[--base-gradient-color:var(--color-green-400)]'
									>
										Open to work
									</TextShimmer>
								</div>
							</div>

							<div
								className='flex flex-row items-center flex-wrap justify-center
									gap-3 xl:gap-5'
							>
								{statCardsList.map((card) => (
									<StatCard
										title={card.title}
										subtitle={card.subtitle}
										Icon={card.Icon}
										color={card.color}
										key={card.title}
									/>
								))}
							</div>
						</div>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
