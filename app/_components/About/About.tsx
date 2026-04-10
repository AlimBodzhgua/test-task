import { ShineBorder } from '@/components/ui/shine-border';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { Tilt } from '@/components/ui/tilt';
import {
	BookMarked as BookMarkedIcon,
	CalendarDays as CalendarDaysIcon,
	CircleCheck as CircleCheckIcon,
	CodeXml as CodeXmlIcon,
	MapPin as MapPinIcon,
} from 'lucide-react';

export function About() {
	return (
		<section
			className='flex flex-col h-screen bg-linear-to-r from-gray-900 to-black'
			id='about'
		>
			<h1 className='text-7xl uppercase text-white font-bold mx-auto my-10'>About</h1>
			<div className='flex gap-8 px-10'>
				<div className='flex flex-col gap-4 text-white text-lg w-[50%]'>
					<p>
						Frontend developer with 2+ years of intensive independent practice in
						React and TypeScript.
					</p>
					<p>
						I've mastered frontend development and created several full-stack
						applications using React and TypeScript. I have experience building
						projects from scratch (Vite / Webpack), writing unit and screenshot
						tests (Jest, react-testing-library, Storybook + Loki), integrating the
						REST API, as well as developing the basic backend (Express,
						MongoDB/Postgress) and building images and containers using Docker to
						deploy the application, and also experience working with FSD
						architecture.
					</p>
					<p>
						I am looking for a job as a Junior Frontend Developer in a team to
						deepen my knowledge and explore new technologies, participate in code
						review and work on real projects.
					</p>
				</div>
				<div className='flex items-center justify-center w-[50%]'>
					<div className='flex flex-col items-center relative bg-gray-950 text-white border-0 rounded-3xl px-4 py-8'>
						<ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
						<div className='flex items-center flex-col'>
							<div className='w-[125px] h-[125px] rounded-full bg-blue-300 my-auto mb-4'></div>
							<h3 className='text-2xl font-bold mb-2'>Alim Bodzhgua</h3>
							<h4 className='text-xl text-gray-400 font-medium'>
								Frontend Developer
							</h4>
						</div>
						<div className='flex items-center gap-4 my-4'>
							<div className='flex items-center gap-2 px-3 py-2 rounded-2xl border border-blue-400 text-blue-600'>
								<MapPinIcon size={21} className='text-blue-300' />
								<TextShimmer
									duration={3}
									className='text-sm [--base-color:var(--color-blue-600)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]'
								>
									Russia, Krasnodar
								</TextShimmer>
							</div>
							<div className='flex items-center gap-2 px-3 py-2 rounded-2xl border border-green-400 text-green-600'>
								<CircleCheckIcon size={21} className='text-green-300' />
								<TextShimmer
									duration={3}
									className='text-sm [--base-color:var(--color-green-600)] [--base-gradient-color:var(--color-green-200)] dark:[--base-color:var(--color-green-700)] dark:[--base-gradient-color:var(--color-green-400)]'
								>
									Open to work
								</TextShimmer>
							</div>
						</div>

						<div className='flex flex-row gap-5 items-center justify-center my-4'>
							<Tilt rotationFactor={15}>
								<div className='group flex flex-col items-center px-4 py-4 gap-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transition-colors hover:bg-purple-400'>
									<BookMarkedIcon
										className='text-purple-500 transition-colors group-hover:text-white'
										size={32}
									/>
									<div className='flex flex-col items-center justify-center'>
										<div className='text-3xl font-bold'>15+</div>
										<div className='text-xl text-gray-400 transition-colors group-hover:text-white'>
											Projects Done
										</div>
									</div>
								</div>
							</Tilt>

							<Tilt rotationFactor={15} isRevese>
								<div className='group flex flex-col items-center px-4 py-4 gap-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transition-colors hover:bg-blue-400'>
									<CodeXmlIcon
										className='text-blue-500 transition-colors group-hover:text-white'
										size={32}
									/>
									<div className='flex flex-col items-center justify-center'>
										<div className='text-3xl font-bold'>900+</div>
										<div className='text-xl text-gray-400 transition-colors group-hover:text-white'>
											Contributions
										</div>
									</div>
								</div>
							</Tilt>

							<Tilt rotationFactor={15} isRevese>
								<div className='group flex flex-col items-center px-4 py-4 gap-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transition-colors hover:bg-red-500'>
									<CalendarDaysIcon
										className='text-red-500 transition-colors group-hover:text-white'
										size={32}
									/>
									<div className='flex flex-col items-center justify-center'>
										<div className='text-3xl font-bold'>2.5+</div>
										<div className='text-xl text-gray-400 transition-colors group-hover:text-white'>
											Years Experience
										</div>
									</div>
								</div>
							</Tilt>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
