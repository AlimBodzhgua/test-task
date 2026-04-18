import type {
	BackendTechnologyName,
	FrontendTechnologyName,
	OthersTechnologyName,
} from '../types';
import { FileText as FileTextIcon, Code as CodeIcon } from 'lucide-react';
import Image from 'next/image';
import { ContactData } from './ContactData';

interface ProjectInformationProps {
	frontendTechnologies: FrontendTechnologyName[];
	backendTechnologies: BackendTechnologyName[];
	othersTechnologies: OthersTechnologyName[];
	overview: string;
}

export function ProjectInformation(props: ProjectInformationProps) {
	const { frontendTechnologies, backendTechnologies, othersTechnologies, overview } = props;

	return (
		<div className='px-4'>
			<div className='mb-10'>
				<div className='flex gap-2 items-center mb-2'>
					<CodeIcon />
					<div className='text-2xl font-semibold'>Technologies</div>
				</div>
				<div className='px-5'>
					<div className='flex flex-col gap-2 mb-4'>
						<div className='flex items-center gap-2'>
							<span className='w-1 h-1 rounded-full bg-gray-400'></span>
							<div className='text-lg font-semibold'>Frontend</div>
						</div>
						<div className='flex gap-2 flex-wrap'>
							{frontendTechnologies.map((tech) => (
								<div
									key={tech}
									className='flex gap-2 text-gray-100 font-semibold
										items-center bg-blue-400 px-3 py-1 rounded-2xl'
								>
									<Image
										key={tech}
										height={32}
										width={32}
										alt='technology-icon'
										src={`/icons/${tech.toLocaleLowerCase()}.svg`}
										className='fill-black'
									/>
									<div>{tech}</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2 mb-4'>
						<div className='flex items-center gap-2'>
							<span className='w-1 h-1 rounded-full bg-gray-400'></span>
							<div className='text-lg font-semibold'>Backend</div>
						</div>
						<div className='flex gap-2 flex-wrap'>
							{backendTechnologies.map((tech) => (
								<div
									key={tech}
									className='flex gap-2 text-gray-100 font-semibold
										items-center bg-blue-400 px-3 py-1 rounded-2xl'
								>
									<Image
										key={tech}
										height={32}
										width={32}
										alt='technology-icon'
										src={`/icons/${tech.toLocaleLowerCase()}.svg`}
										className='fill-black'
									/>
									<div>{tech}</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center gap-2'>
							<span className='w-1 h-1 rounded-full bg-gray-400'></span>
							<div className='text-lg font-semibold'>Other tools</div>
						</div>
						<div className='flex gap-2 flex-wrap'>
							{othersTechnologies.map((tech) => (
								<div
									key={tech}
									className='flex gap-2 text-gray-100 font-semibold
										items-center bg-blue-400 px-3 py-1 rounded-2xl'
								>
									<Image
										key={tech}
										height={32}
										width={32}
										alt='technology-icon'
										src={`/icons/${tech.toLocaleLowerCase()}.svg`}
										className='fill-black'
									/>
									<div>{tech}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='mb-5 lg:mb-0'>
				<div className='flex items-center gap-2 mb-3'>
					<FileTextIcon />
					<div className='font-semibold text-2xl'>Overview</div>
				</div>
				<p className='text-lg text-gray-500 px-4 py-1'>{overview}</p>
			</div>

			<div className='block lg:hidden'>
				<ContactData />
			</div>
		</div>
	);
}
