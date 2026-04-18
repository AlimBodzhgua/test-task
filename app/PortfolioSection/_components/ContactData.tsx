import { CodeIcon, MailIcon, SendIcon } from 'lucide-react';
import { GITHUB_LINK, TELEGRAM_LINK } from '@/snared/constants';

export function ContactData() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center'>
			<div className='font-semibold text-gray-400 text-md'>Connect With Me</div>
			<div className='flex gap-8'>
				<a
					href='mailto:bodzhgua2015@mail.ru'
					target='_blank'
					className='p-3 transition-colors bg-gray-100 hover:bg-gray-800 rounded-full
						text-gray-800 hover:text-gray-200 flex justify-center items-center'
				>
					<MailIcon size={26} />
				</a>
				<a
					href={TELEGRAM_LINK}
					target='_blank'
					className='p-3 transition-colors bg-gray-100 hover:bg-gray-800 rounded-full
						text-gray-800 hover:text-gray-200 flex justify-center items-center'
				>
					<SendIcon size={26} />
				</a>
				<a
					href={GITHUB_LINK}
					target='_blank'
					className='p-3 transition-colors bg-gray-100 hover:bg-gray-800 rounded-full
						text-gray-800 hover:text-gray-200 flex justify-center items-center'
				>
					<CodeIcon size={26} />
				</a>
			</div>
		</div>
	);
}
