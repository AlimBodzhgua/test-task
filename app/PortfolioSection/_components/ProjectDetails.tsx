import type {
	BackendTechnologyName,
	CategoryType,
	FrontendTechnologyName,
	OthersTechnologyName,
} from '../types';

import { Info as InfoIcon } from 'lucide-react';
import { VisuallyHidden } from 'radix-ui';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui';
import { ProjectSidebar } from './ProjectSidebar';
import { ProjectScreenshots } from './ProjectScreenshots';
import { ProjectInformation } from './ProjectInformation';

type ProjectDetailsProps = {
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

export function ProjectDetails(props: ProjectDetailsProps) {
	const {
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
				<Button
					className='bg-gray-800 text-gray-300/90 hover:bg-gray-800/70
						hover:-translate-y-1.5'
					size='icon-lg'
				>
					<InfoIcon size={15} />
				</Button>
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
