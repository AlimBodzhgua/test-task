import { FileText as FileTextIcon } from 'lucide-react';
import { GlassButton, BlurFade, TypingAnimation } from '@/components/ui';
import { Particles } from '@/components/ui';
import { ContactButton } from './ContactButton';

export function Home() {
	return (
		<section className='flex h-screen items-center justify-center bg-[#efeee8]' id='home'>
			<div className='absolute inset-0 z-0'>
				<Particles
					particleColors={['#B2BEB5']}
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
			<div>
				<div className='mb-5 flex flex-col items-center justify-center gap-2 md:gap-3'>
					<BlurFade delay={0.25} inView>
						<div className='text-5xl font-bold'>Hi, i'am</div>
					</BlurFade>
					<BlurFade delay={0.25 * 2} inView>
						<h1 className='text-5xl sm:text-6xl font-extrabold text-gray-900 uppercase text-center'>
							Alim Bodzhgua
						</h1>
					</BlurFade>
				</div>
				<div className='flex flex-col items-center'>
					<BlurFade delay={0.35} inView>
						<TypingAnimation
							as='h2'
							className='mb-5 text-4xl font-light text-gray-800'
						>
							Frontend Developer
						</TypingAnimation>
					</BlurFade>
					<BlurFade delay={0.4} inView>
						<TypingAnimation
							as='p'
							typeSpeed={35}
							className='mx-auto max-w-2xl text-center text-lg text-gray-700'
						>
							I build modern and scalable web applications, solving complex
							problems using modern tools providing the best user experience.
						</TypingAnimation>
					</BlurFade>
				</div>
				<BlurFade delay={1}>
					<div className='relative z-10 mt-15 md:mt-25 flex items-center flex-wrap justify-center gap-6'>
						<ContactButton />

						<GlassButton className='rounded-2xl text-lg hover:scale-110'>
							<a
								className='flex items-center gap-2'
								href='/docs/resume.pdf'
								target='_blank'
							>
								<FileTextIcon />
								<div>Resume (Ru)</div>
							</a>
						</GlassButton>
					</div>
				</BlurFade>
			</div>
		</section>
	);
}
