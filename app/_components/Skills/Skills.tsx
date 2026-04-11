import { Marquee, LightRays } from '@/components/ui';
import {
	backendSkills,
	frontendSkills,
	additionalFrontendSkills,
	otherSkills,
} from './constants';
import { SkillCard } from './SkillCard';

export function Skills() {
	return (
		<section
			className='relative h-screen w-full overflow-hidden bg-linear-to-b from-gray-950 via-slate-950 to-gray-950'
			id='skills'
		>
			<LightRays count={14} />
			<div className='mx-auto my-15 flex flex-col items-center justify-center'>
				<h1 className='mb-4 text-6xl font-bold text-white'>Tech Stack</h1>
				<div className='text-lg font-light text-gray-400'>
					Technologies and tools i use to build web application
				</div>
			</div>

			<div className='flex flex-wrap gap-5'>
				<Marquee reverse className='[--duration:30s]'>
					{frontendSkills.map((skill) => (
						<SkillCard skill={skill} key={skill.iconName} />
					))}
				</Marquee>
			</div>
			<div className='flex flex-wrap gap-5'>
				<Marquee reverse className='[--duration:30s]'>
					{additionalFrontendSkills.map((skill) => (
						<SkillCard skill={skill} key={skill.iconName} />
					))}
				</Marquee>
			</div>

			<div className='flex flex-wrap gap-5'>
				<Marquee reverse className='[--duration:30s]'>
					{backendSkills.map((skill) => (
						<SkillCard skill={skill} key={skill.iconName} />
					))}
				</Marquee>
			</div>

			<div className='flex flex-wrap gap-5'>
				<Marquee reverse className='[--duration:30s]'>
					{otherSkills.map((skill) => (
						<SkillCard skill={skill} key={skill.iconName} />
					))}
				</Marquee>
			</div>
		</section>
	);
}
