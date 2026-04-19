import type { StatCardType } from './types';
import { BookMarkedIcon, CalendarDaysIcon, CodeXmlIcon } from 'lucide-react';

export const statCardsList: StatCardType[] = [
	{
		title: '15+',
		subtitle: 'Projects Done',
		color: 'purple',
		Icon: BookMarkedIcon,
	},
	{
		title: '900+',
		subtitle: 'Contributions',
		color: 'blue',
		Icon: CodeXmlIcon,
	},
	{
		title: '2.5',
		subtitle: 'Years Experience',
		color: 'red',
		Icon: CalendarDaysIcon,
	},
];
