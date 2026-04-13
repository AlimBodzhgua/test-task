import type { NavbarItemType, SectionType } from './types';

import { cn } from '@/snared/lib/utils';
import { Button, Text3DFlip } from '../ui';

interface NavbarItemProps extends NavbarItemType {
	activeSection?: SectionType;
}

export function NavbarItem(props: NavbarItemProps) {
	const { text, section, activeSection, Icon } = props;

	return (
		<Button
			asChild
			className='group hover:no-underline transition-colors text-slate-400
				hover:text-white'
			size='sm'
			variant='link'
		>
			<a href={`#${section}`}>
				<div
					className={cn(
						`absolute transition-transform scale-0 rounded-full border-2
						border-white bg-gray-600 p-3 text-white`,
						activeSection === section && 'scale-100',
					)}
				>
					<Icon className='size-7' />
				</div>
				<Text3DFlip
					className={cn(activeSection === section && 'scale-0')}
					rotateDirection='top'
					staggerFrom='center'
				>
					{text}
				</Text3DFlip>
			</a>
		</Button>
	);
}
