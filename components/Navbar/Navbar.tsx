'use client';

import type { SectionType } from './types';

import { useEffect, useState } from 'react';
import { cn } from '@/snared/lib/utils';
import { navbarList, sections } from './constants';
import { NavbarItem } from './NavbarItem';
import { MobileNavbarItem } from './MobileNavbarItem';
import { BlurFade } from '../ui';

export function Navbar() {
	const [activeSection, setActiveSection] = useState<SectionType>();

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
		<BlurFade duration={0.7} direction='down' className='fixed bottom-0 sm:top-0 right-0 left-0 z-50'>
			<nav
				className={cn(`
					row mx-auto mt-6 mb-6 flex max-w-90 sm:max-w-105 md:max-w-155 items-center justify-center md:justify-between rounded-full bg-gray-950 px-4 py-3 sm:px-7 sm:py-4 transition-all`,
					activeSection !== 'home' && `backdrop-blur-md border-2 border-gray-500 bg-gradient-to-br from-white/20 to-white/5 shadow-lg`)}
			>
				<div className='hidden md:block'>
					<h1 className={cn('text-xl font-bold text-white transition-colors', activeSection !== 'home' && 'text-slate-400')}>
						AB
						<span className='text-blue-500 font-extrabold ml-1'>.</span>
					</h1>
				</div>
				<div className='hidden sm:flex items-center justify-between gap-3'>
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

				<div className='flex sm:hidden items-center justify-center gap-1.5'>
					{navbarList.map((item) => (
						<MobileNavbarItem
							key={item.section}
							Icon={item.Icon}
							section={item.section}
							activeSection={activeSection}
						/>
					))}
				</div>
			</nav>
		</BlurFade>
	);
}
