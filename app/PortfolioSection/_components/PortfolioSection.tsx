import { BlurFade } from '@/components/ui';
import { projectsList } from '../constants';
import { ProjectItem } from './ProjectItem';

export function PortfolioSection() {
	return (
		<section
			id='portfolio'
			className='h-full py-5 bg-linear-to-b from-gray-950 via-slate-900 to-gray-950'
		>
			<div className='flex flex-col items-center justify-center gap-2 mb-14'>
				<BlurFade duration={0.7} direction='up' inView>
					<h1 className='text-5xl lg:text-7xl font-bold text-white'>Projects</h1>
				</BlurFade>
				<BlurFade duration={0.9} direction='up' inView>
					<h2 className='text-2xl lg:text-3xl font-light text-gray-400'>
						These are some projects that i made
					</h2>
				</BlurFade>
			</div>
			<div className='flex items-center flex-wrap justify-center gap-10 mb-5'>
				{projectsList.map((project, index) => (
					<BlurFade
						duration={0.9}
						direction={index % 2 === 0 ? 'right' : 'left'}
						className='h-full w-[55%] sm:w-[40%]'
						key={project.githubLink}
						inView
					>
						<ProjectItem
							name={project.name}
							description={project.description}
							overview={project.overview}
							headerUrl={project.headerUrl}
							githubLink={project.githubLink}
							createdAt={project.createdAt}
							category={project.category}
							previewImage={project.previewImage}
							images={project.images}
							baseTechnologies={project.baseTechnologies}
							frontendTechnologies={project.frontendTechnologies}
							backendTechnologies={project.backendTechnologies}
							othersTechnologies={project.othersTechnologies}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
