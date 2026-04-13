'use client';

import type { SectionType } from './types';

import { useEffect, useState } from 'react';
import { cn } from '@/snared/lib/utils';
import { useMediaQuery } from '@/snared/hooks/useMediaQuery';
import { navbarList, sections } from './constants';
import { MobileNavbarItem } from './MobileNavbarItem';
import { NavbarItem } from './NavbarItem';
import { BlurFade } from '../ui';

export function Navbar() {
	const [activeSection, setActiveSection] = useState<SectionType>();
	const isMobile = useMediaQuery('(max-width: 640px)');

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
		<BlurFade
			duration={0.7}
			direction={isMobile ? 'up' : 'down'}
			className='fixed bottom-0 mt-6 mb-6 sm:bottom-auto sm:top-0 left-[50%] -translate-x-[50%] z-50'
		>
			<nav
				className={cn(
					` row mx-auto flex max-w-90 sm:max-w-105 md:max-w-155
					items-center justify-center md:justify-between rounded-full bg-gray-950
					px-4 py-3 sm:px-7 sm:py-4 transition-all`,
					activeSection !== 'home' &&
						`backdrop-blur-md border-2 border-gray-500 bg-gradient-to-br
						from-white/20 to-white/5 shadow-lg`,
				)}
			>
				<div className='hidden md:block'>
					<h1
						className={cn(
							'text-xl font-bold text-white transition-colors',
							activeSection !== 'home' && 'text-slate-400',
						)}
					>
						AB
						<span className='text-blue-500 font-extrabold ml-1'>.</span>
					</h1>
				</div>
				{isMobile ? (
					<div className='flex items-center justify-center gap-1.5'>
						{navbarList.map((item) => (
							<MobileNavbarItem
								key={item.section}
								Icon={item.Icon}
								section={item.section}
								activeSection={activeSection}
							/>
						))}
					</div>
				) : (
					<div className='flex items-center justify-between gap-3'>
						{navbarList.map((item) => (
							<NavbarItem
								key={item.section}
								Icon={item.Icon}
								section={item.section}
								text={item.text}
								activeSection={activeSection}
							/>
						))}
					</div>
				)}
			</nav>
		</BlurFade>
	);
}
