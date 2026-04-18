import { BlurFade, Marquee } from '@/components/ui';
import {
	additionalFrontendSkills,
	backendSkills,
	frontendSkills,
	otherSkills,
} from '../constants';
import { SkillCard } from './SkillCard';

export function SkillsSection() {
	return (
		<section
			className='relative h-screen w-full overflow-hidden bg-linear-to-b from-gray-950
				via-slate-950 to-gray-950'
			id='skills'
		>
			<div className='flex flex-col items-center justify-center gap-3 md:gap-6 py-5 md:py-10'>
				<BlurFade duration={0.7} direction='up' inView>
					<h1 className='text-4xl md:text-6xl font-bold text-white'>Tech Stack</h1>
				</BlurFade>
				<BlurFade duration={0.9} direction='up' inView>
					<div className='text-md md:text-xl font-light text-gray-400'>
						Technologies and tools i use to build web application
					</div>
				</BlurFade>
			</div>

			<BlurFade duration={2} direction='right' inView>
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
			</BlurFade>
		</section>
	);
}
