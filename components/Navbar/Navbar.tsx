'use client';

import { useEffect, useState } from 'react';
import {
	Briefcase as BriefcaseIcon,
	CircleUser as CircleUserIcon,
	Code as CodeIcon,
	House as HouseIcon,
	Mail as MailIcon,
} from 'lucide-react';
import { BlurFade, Button, Text3DFlip } from '../ui';
import { cn } from '@/lib/utils';

type SectionType = 'home' | 'about' | 'skills' | 'portfolio' | 'contact';
const sections: SectionType[] = ['home', 'about', 'skills', 'contact'];

export function Navbar() {
	const [activeSection, setActiveSection] = useState<SectionType | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);
				if (visibleSection) {
					setActiveSection(visibleSection.target.id as SectionType);
				}
			},
			{ threshold: 0.5, rootMargin: '0px' },
		);

		sections.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<BlurFade duration={0.7} direction='down' className='fixed top-0 right-0 left-0 z-50'>
			<nav
				className={cn(`
					row mx-auto mt-8 flex max-w-[620px] items-center justify-between rounded-full bg-gray-950 px-7 py-4 transition-all`,
					activeSection !== 'home' && `backdrop-blur-md border-2 border-gray-500 bg-gradient-to-br from-white/20 to-white/5 shadow-lg`)}
			>
				<div>
					<h1 className={cn('text-xl font-bold text-white transition-colors', activeSection !== 'home' && 'text-slate-400')}>
						AB
						<span className='text-blue-500 font-extrabold ml-1'>.</span>
					</h1>
				</div>
				<div className='flex items-center justify-between gap-3'>
					<Button
						asChild
						className='group hover:no-underline transition-colors text-slate-400
							hover:text-white'
						size='sm'
						variant='link'
					>
						<a href='#home'>
							<div
								className={cn(
									`absolute transition-transform scale-0 rounded-full
									border-2 border-white bg-gray-600 p-3 text-white`,
									activeSection === 'home' && 'scale-100',
								)}
							>
								<HouseIcon className='size-7' />
							</div>
							<Text3DFlip
								className={cn(activeSection === 'home' && 'scale-0')}
								rotateDirection='top'
								staggerFrom='center'
							>
								Home
							</Text3DFlip>
						</a>
					</Button>

					<Button
						asChild
						className='group hover:no-underline transition-colors text-slate-400
							hover:text-white px-2'
						size='sm'
						variant='link'
					>
						<a href='#about'>
							<div
								className={cn(
									`absolute transition-transform scale-0 rounded-full
									border-2 border-white bg-gray-600 p-3 text-white`,
									activeSection === 'about' && 'scale-100',
								)}
							>
								<CircleUserIcon className='size-7' />
							</div>
							<Text3DFlip
								className={cn(activeSection === 'about' && 'scale-0')}
								rotateDirection='top'
								staggerFrom='center'
							>
								About
							</Text3DFlip>
						</a>
					</Button>

					<Button
						asChild
						className='group hover:no-underline transition-colors text-slate-400
							hover:text-white'
						size='sm'
						variant='link'
					>
						<a href='#skills'>
							<div
								className={cn(
									`absolute transition-transform scale-0 rounded-full
									border-2 border-white bg-gray-600 p-3 text-white`,
									activeSection === 'skills' && 'scale-100',
								)}
							>
								<CodeIcon className='size-7' />
							</div>
							<Text3DFlip
								className={cn(activeSection === 'skills' && 'scale-0')}
								rotateDirection='top'
								staggerFrom='center'
							>
								Skills
							</Text3DFlip>
						</a>
					</Button>

					<Button
						asChild
						className='group hover:no-underline transition-colors text-slate-400
							hover:text-white'
						size='sm'
						variant='link'
					>
						<a href='#portfolio'>
							<div
								className={cn(
									`absolute transition-transform scale-0 rounded-full
									border-2 border-white bg-gray-600 p-3 text-white`,
									activeSection === 'portfolio' && 'scale-100',
								)}
							>
								<BriefcaseIcon className='size-7' />
							</div>
							<Text3DFlip
								className={cn(activeSection === 'portfolio' && 'scale-0')}
								rotateDirection='top'
								staggerFrom='center'
							>
								Portfolio
							</Text3DFlip>
						</a>
					</Button>

					<Button
						asChild
						className='group hover:no-underline transition-colors text-slate-400
							hover:text-white'
						size='sm'
						variant='link'
					>
						<a href='#contact'>
							<div
								className={cn(
									`absolute transition-transform scale-0 rounded-full
									border-2 border-white bg-gray-600 p-3 text-white`,
									activeSection === 'contact' && 'scale-100',
								)}
							>
								<MailIcon className='size-7' />
							</div>
							<Text3DFlip
								className={cn(activeSection === 'contact' && 'scale-0')}
								rotateDirection='top'
								staggerFrom='center'
							>
								Contact
							</Text3DFlip>
						</a>
					</Button>
				</div>
			</nav>
		</BlurFade>
	);
}
