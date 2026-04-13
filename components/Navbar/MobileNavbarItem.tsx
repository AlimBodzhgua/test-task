import type { NavbarItemType, SectionType } from './types';
import { cn } from '@/snared/lib/utils';
import { Button } from '../ui';

interface MobileNavbarItemProps extends Omit<NavbarItemType, 'text'> {
	activeSection?: SectionType;
}

export function MobileNavbarItem(props: MobileNavbarItemProps) {
	const { section, activeSection, Icon } = props;

	return (
		<Button
			asChild
			className='group hover:no-underline transition-colors'
			size='sm'
			variant='link'
		>
			<a href={`#${section}`}>
				<div
					className={cn(
						'transition-all rounded-full text-white/50',
						activeSection === section && 'bg-blue-400 p-1.5 text-white',
					)}
				>
					<Icon className='size-7' />
				</div>
			</a>
		</Button>
	);
}
