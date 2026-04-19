import type { NavbarItemType, SectionType } from './types';
import { BriefcaseIcon, CircleUserIcon, CodeIcon, HouseIcon, MailIcon } from 'lucide-react';

export const sections: SectionType[] = ['home', 'about', 'skills', 'portfolio', 'contact'];

export const navbarList: NavbarItemType[] = [
	{
		text: 'Home',
		section: 'home',
		Icon: HouseIcon,
	},
	{
		text: 'About',
		section: 'about',
		Icon: CircleUserIcon,
	},
	{
		text: 'Skills',
		section: 'skills',
		Icon: CodeIcon,
	},
	{
		text: 'Portfolio',
		section: 'portfolio',
		Icon: BriefcaseIcon,
	},
	{
		text: 'Contact',
		section: 'contact',
		Icon: MailIcon,
	},
];
