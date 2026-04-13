'use client';

import { GlassButton } from '@/components/ui';
import { Mail as MailIcon } from 'lucide-react';

export function ContactButton() {
	const onClick = () => {
		const contactSection = document.getElementById('contact');
		contactSection?.scrollIntoView();
	};

	return (
		<GlassButton className='rounded-2xl text-lg hover:scale-110' onClick={onClick}>
			<div className='flex items-center gap-2'>
				<MailIcon />
				<div>Contact me</div>
			</div>
		</GlassButton>
	);
}
