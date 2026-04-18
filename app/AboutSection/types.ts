import type { LucideIcon } from 'lucide-react';

export type CardIconColors = 'red' | 'purple' | 'blue';

export type StatCardType = {
	Icon: LucideIcon;
	color: CardIconColors;
	title: string;
	subtitle: string;
};
