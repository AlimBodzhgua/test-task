import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	Carousel,
	CarouselContent,
	CarouselIndicator,
	CarouselItem,
	CarouselNavigation,
} from '@/components/ui';
import {
	Calendar as CalendarIcon,
	Code as CodeIcon,
	FileText as FileTextIcon,
	Info as InfoIcon,
	Mail as MailIcon,
	Send as SendIcon,
	Tag as TagIcon,
} from 'lucide-react';
import { VisuallyHidden } from 'radix-ui';
import { GITHUB_LINK, TELEGRAM_LINK } from '@/snared/constants';
import Image from 'next/image';

import type {
	BackendTechnologyName,
	CategoryType,
	FrontendTechnologyName,
	OthersTechnologyName,
} from './types';

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
					<div className='relative w-full flex items-center justify-center px-2'>
						<Carousel className='w-full'>
							<CarouselContent>
								{images.map((image) => (
									<CarouselItem className='p-4' key={image}>
										<Image
											className='w-full h-full'
											alt='tech-icon'
											height={250}
											width={400}
											src={image}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselNavigation alwaysShow className='absolute z-50 px-25' />
							<CarouselIndicator />
						</Carousel>
					</div>

					<div className='rounded-md px-4 py-5'>
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
												className='flex gap-2 text-gray-100
													font-semibold items-center bg-blue-400 px-3
													py-1 rounded-2xl'
											>
												<Image
													key={tech}
													alt='tech-icon'
													height={32}
													width={32}
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
												className='flex gap-2 text-gray-100
													font-semibold items-center bg-blue-400 px-3
													py-1 rounded-2xl'
											>
												<Image
													key={tech}
													alt='tech-icon'
													height={32}
													width={32}
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
										<div className='text-lg font-semibold'>
											Other tools
										</div>
									</div>
									<div className='flex gap-2 flex-wrap'>
										{othersTechnologies.map((tech) => (
											<div
												key={tech}
												className='flex gap-2 text-gray-100
													font-semibold items-center bg-blue-400 px-3
													py-1 rounded-2xl'
											>
												<Image
													key={tech}
													alt='tech-icon'
													height={32}
													width={32}
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

						<div>
							<div className='flex items-center gap-2 mb-3'>
								<FileTextIcon />
								<div className='font-semibold text-2xl'>Overview</div>
							</div>
							<p className='text-lg text-gray-500 px-4 py-1'>{overview}</p>
						</div>
					</div>
				</div>

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
									<div className='text-gray-500 font-semibold'>
										Created At
									</div>
									<div className='font-bold'>{createdAt}</div>
								</div>
							</div>
						</div>
						<div className='flex gap-3 items-center'>
							<div
								className='bg-black p-2 rounded-full flex items-center
									justify-center'
							>
								<TagIcon color='white' />
							</div>
							<div>
								<div className='text-gray-500 font-semibold'>Category</div>
								<div className='font-bold'>{category}</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-4 items-center justify-center'>
						<div className='font-semibold text-gray-400 text-md'>
							Connect With Me
						</div>
						<div className='flex gap-8'>
							<a
								href='mailto:bodzhgua2015@mail.ru'
								target='_blank'
								className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
									rounded-full text-gray-800 hover:text-gray-200 flex
									justify-center items-center'
							>
								<MailIcon size={26} />
							</a>
							<a
								href={TELEGRAM_LINK}
								target='_blank'
								className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
									rounded-full text-gray-800 hover:text-gray-200 flex
									justify-center items-center'
							>
								<SendIcon size={26} />
							</a>
							<a
								href={GITHUB_LINK}
								target='_blank'
								className='p-3 transition-colors bg-gray-100 hover:bg-gray-800
									rounded-full text-gray-800 hover:text-gray-200 flex
									justify-center items-center'
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
								src={`/icons/github.svg`}
								className='fill-black'
							/>
							<div className='font-semibold text-lg'>Source Code</div>
						</a>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
