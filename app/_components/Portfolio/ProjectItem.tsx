import { Button } from '@/components/ui';
import { Safari } from '@/components/ui/safari';
import Image from 'next/image';
import { ProjectDetails } from './ProjectDetails';
import type {
	BackendTechnologyName,
	CategoryType,
	FrontendTechnologyName,
	OthersTechnologyName,
	TechnologyName,
} from './types';

interface ProjectItemProps {
	name: string;
	description: string;
	overview: string;
	githubLink: string;
	headerUrl?: string;
	previewImage: string;
	category: CategoryType;
	createdAt: string;
	images: string[];
	baseTechnologies: TechnologyName[];
	frontendTechnologies: FrontendTechnologyName[];
	backendTechnologies: BackendTechnologyName[];
	othersTechnologies: OthersTechnologyName[];
}

export function ProjectItem(props: ProjectItemProps) {
	const {
		name,
		description,
		overview,
		baseTechnologies,
		frontendTechnologies,
		backendTechnologies,
		othersTechnologies,
		headerUrl,
		createdAt,
		category,
		githubLink,
		previewImage,
		images,
	} = props;

	return (
		<div className='group w-full flex flex-col hover:-translate-y-1.5 transition-transform'>
			<Safari mode='simple' url={headerUrl} imageSrc={previewImage} />

			<div
				className='flex-1 flex flex-col mt-2 px-4 py-5 bg-gray-900 backdrop-blur-md
					rounded-2xl border border-gray-800/60 group-hover:border-gray-700
					transition-all duration-300 [box-shadow:0_4px_30px_#4847474d]
					hover:shadow-2xl'
			>
				<div className='flex justify-between items-start mb-3'>
					<h2
						className='text-3xl font-semibold text-gray-400 group-hover:text-white
							transition-colors'
					>
						{name}
					</h2>

					<div className='flex gap-2 shrink-0'>
						<Button
							asChild
							className='bg-gray-800 hover:bg-gray-700 hover:-translate-y-1
								transition-all'
							size='icon-lg'
						>
							<a href={githubLink} target='_blank' rel='noopener noreferrer'>
								<Image
									alt='github'
									height={24}
									width={24}
									src='/icons/github.svg'
								/>
							</a>
						</Button>

						<ProjectDetails
							name={name}
							description={description}
							overview={overview}
							githubLink={githubLink}
							category={category}
							createdAt={createdAt}
							frontendTechnologies={frontendTechnologies}
							backendTechnologies={backendTechnologies}
							othersTechnologies={othersTechnologies}
							images={images}
						/>
					</div>
				</div>

				<p className='text-gray-500 text-[18px] leading-relaxed flex-1 mb-4 line-clamp-3'>
					{description}
				</p>

				<div className='mt-auto pt-2'>
					<div className='flex flex-wrap gap-2'>
						{baseTechnologies.map((tech) => (
							<div
								key={tech}
								className='flex items-center gap-2 bg-gray-800
									hover:bg-gray-700 py-1.5 px-4 rounded-full text-md
									font-medium transition-colors'
							>
								<Image
									alt={tech}
									height={20}
									width={20}
									src={`/icons/${tech.toLowerCase()}.svg`}
								/>
								<span className='text-gray-200'>{tech}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
