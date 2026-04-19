import type { CategoryType } from '../types';
import { CalendarIcon, TagIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { ContactData } from './ContactData';

type ProjectSidebarProps = {
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
		<div className='flex flex-col gap-4 w-full h-full'>
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
			<div className='hidden lg:block'>
				<ContactData />
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
