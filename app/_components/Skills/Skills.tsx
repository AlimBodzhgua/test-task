import Image from 'next/image';
import { skills } from './constants';
import { LightRays } from '@/components/ui';

export function Skills() {
	return (
		<section
			className='relative h-screen w-full overflow-hidden bg-linear-to-b from-gray-950 via-slate-900 to-gray-950'
			id='skill'
		>
			{/* <LightRays count={14}/> */}
			<div className='mx-auto my-15 flex flex-col items-center justify-center'>
				<h1 className='mb-4 text-6xl font-bold text-white'>Tech Stack</h1>
				<div className='text-lg font-light text-gray-400'>
					Technologies and tools i use to build web application
				</div>
			</div>

			<div className='flex flex-wrap gap-5'>
				{skills.map((skill) => (
					<div
						key={skill.iconName}
						className='relative z-50 flex w-fit items-center justify-center gap-2 rounded-2xl border-2 border-gray-600 bg-black px-6 py-3 transition-transform hover:scale-105'
					>
						<Image
							src={`/icons/${skill.iconName}`}
							width={36}
							height={36}
							alt='Picture of the author'
						/>
						<div className='text-lg font-semibold text-gray-200'>
							{skill.skillName}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}