import type { LucideIcon } from 'lucide-react';

export type SectionType = 'home' | 'about' | 'skills' | 'portfolio' | 'contact';

export type NavbarItemType = {
	text: string;
	Icon: LucideIcon;
	section: SectionType;
};
