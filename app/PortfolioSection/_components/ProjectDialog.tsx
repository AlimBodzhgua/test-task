import type { ReactNode } from 'react';
import type {
	BackendTechnologyName,
	CategoryType,
	FrontendTechnologyName,
	OthersTechnologyName,
} from '../types';

import { VisuallyHidden } from 'radix-ui';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui';
import { ProjectSidebar } from './ProjectSidebar';
import { ProjectScreenshots } from './ProjectScreenshots';
import { ProjectInformation } from './ProjectInformation';

type ProjectDialogProps = {
	children: ReactNode;
	name: string;
	description: string;
	overview: string;
	category: CategoryType;
	createdAt: string;
	githubLink: string;
	images: string[];
	frontendTechnologies: FrontendTechnologyName[];
	backendTechnologies: BackendTechnologyName[];
	othersTechnologies: OthersTechnologyName[];
};

export function ProjectDialog(props: ProjectDialogProps) {
	const {
		children,
		name,
		description,
		overview,
		images,
		category,
		createdAt,
		githubLink,
		frontendTechnologies,
		backendTechnologies,
		othersTechnologies,
	} = props;

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className='h-[95vh] overflow-hidden min-w-[75%] flex py-10'>
				<VisuallyHidden.Root>
					<DialogTitle>ProjectDetails</DialogTitle>
				</VisuallyHidden.Root>

				<div
					className='flex flex-col gap-5 w-[65%] h-screen overflow-x-hidden
						[scrollbar-width:none] [-ms-overflow-style:none]
						[&::-webkit-scrollbar]:hidden pb-25'
				>
					<ProjectScreenshots images={images}/>		

					<ProjectInformation
						frontendTechnologies={frontendTechnologies}
						backendTechnologies={backendTechnologies}
						othersTechnologies={othersTechnologies}
						overview={overview}
					/>
				</div>

				<ProjectSidebar
					name={name}
					description={description}
					createdAt={createdAt}
					category={category}
					githubLink={githubLink}
				/>
				
			</DialogContent>
		</Dialog>
	);
}
