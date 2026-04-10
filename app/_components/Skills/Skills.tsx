import Image from 'next/image';
import { skills } from './constants';
import { LightRays } from '@/components/ui';

export function Skills() {
	return (
		<section className='relative h-screen w-full overflow-hidden bg-linear-to-tr from-gray-900 to-black' id='skill'>
			{/* <LightRays count={14}/> */}
			<div className='flex flex-col justify-center items-center mx-auto my-15'>
				<h1 className='text-6xl text-white font-bold mb-4'>Tech Stack</h1>
				<div className='text-gray-400 text-lg font-light'>Technologies and tools i use to build web application</div>
			</div>

			<div className='flex gap-5 flex-wrap'>
				{skills.map((skill) => (
					<div
						key={skill.iconName}
						className='relative z-50 flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-black w-fit border-2 border-gray-600 transition-transform hover:scale-105'
					>
						<Image
							src={`/icons/${skill.iconName}`}
							width={36}
							height={36}
							alt='Picture of the author'
						/>
						<div className='text-gray-200 font-semibold text-lg'>{skill.skillName}</div>
					</div>
				))}
			</div>
		</section>
	);
}