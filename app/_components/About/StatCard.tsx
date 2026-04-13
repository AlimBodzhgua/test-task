import type { CardIconColors, StatCardType } from './types';
import { Tilt } from '@/components/ui';
import { cn } from '@/snared/lib/utils';

const mapToHoverColors: Record<CardIconColors, string> = {
	purple: 'hover:bg-purple-500',
	blue: 'hover:bg-blue-500',
	red: 'hover:bg-red-500',
};

const mapToIconColors: Record<CardIconColors, string> = {
	purple: 'text-purple-500',
	blue: 'text-blue-500',
	red: 'text-red-500',
};

export function StatCard(props: StatCardType) {
	const { Icon, color, title, subtitle } = props;

	return (
		<Tilt rotationFactor={15}>
			<div
				className={cn(
					`group/stats flex flex-col items-center gap-2 lg:gap-4 rounded-2xl border
					border-white/10 bg-black/20 p-3 lg:p-4 shadow-xl backdrop-blur-md
					transition-colors hover:bg-purple-400`,
					mapToHoverColors[color],
				)}
			>
				<Icon
					className={cn(
						'text-purple-500 transition-colors group-hover/stats:text-white size-6 lg:size-8',
						mapToIconColors[color],
					)}
				/>

				<div className='flex flex-col items-center text-center justify-center'>
					<div className='text-xl lg:text-3xl font-bold'>{title}</div>
					<div
						className='text-md lg:text-lg text-gray-400 transition-colors
							group-hover/stats:text-white'
					>
						{subtitle}
					</div>
				</div>
			</div>
		</Tilt>
	);
}
