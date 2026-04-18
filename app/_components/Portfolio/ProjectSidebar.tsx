import type { CategoryType } from './types';
import {
	Calendar as CalendarIcon,
	Code as CodeIcon,
	Mail as MailIcon,
	Send as SendIcon,
	Tag as TagIcon,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { GITHUB_LINK, TELEGRAM_LINK } from '@/snared/constants';

interface ProjectSidebarProps {
	name: string;
	description: string;
	createdAt: string;
	githubLink: string;
	category: CategoryType;
}

export function ProjectSidebar(props: ProjectSidebarProps) {
	const {
		name,
		description,
		createdAt,
		category,
		githubLink,
	} = props;

	return (
		<div className='flex flex-col gap-4 w-[35%]'>
			<div className='flex flex-col gap-5 pb-3 border-b-2'>
				<h1 className='text-4xl font-bold'>{name}</h1>
				<p className='text-lg'>{description}</p>
			</div>

			<div className='flex flex-col gap-4 border-b-2 pb-3'>
				<div>
					<div className='flex gap-3 items-center'>
						<div
							className='bg-black p-2 rounded-full flex items-center
								justify-center'
						>
							<CalendarIcon color='white' />
						</div>
						<div>
							<div className='text-gray-500 font-semibold'>Created At</div>
							<div className='font-bold'>{createdAt}</div>
						</div>
					</div>
				</div>
				<div className='flex gap-3 items-center'>
					<div className='bg-black p-2 rounded-full flex items-center justify-center'>
						<TagIcon color='white' />
					</div>
					<div>
						<div className='text-gray-500 font-semibold'>Category</div>
						<div className='font-bold'>{category}</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<div className='font-semibold text-gray-400 text-md'>Connect With Me</div>
				<div className='flex gap-8'>
					<a
						href='mailto:bodzhgua2015@mail.ru'
						target='_blank'
						className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
							rounded-full text-gray-800 hover:text-gray-200 flex justify-center
							items-center'
					>
						<MailIcon size={26} />
					</a>
					<a
						href={TELEGRAM_LINK}
						target='_blank'
						className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
							rounded-full text-gray-800 hover:text-gray-200 flex justify-center
							items-center'
					>
						<SendIcon size={26} />
					</a>
					<a
						href={GITHUB_LINK}
						target='_blank'
						className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
							rounded-full text-gray-800 hover:text-gray-200 flex justify-center
							items-center'
					>
						<CodeIcon size={26} />
					</a>
				</div>
			</div>
			<Button asChild className='flex items-center mt-auto' size='lg'>
				<a href={githubLink} target='_blank'>
					<Image
						alt='github-icon'
						height={32}
						width={32}
						src='/icons/github.svg'
						className='fill-black'
					/>
					<div className='font-semibold text-lg'>Source Code</div>
				</a>
			</Button>
		</div>
	);
}
