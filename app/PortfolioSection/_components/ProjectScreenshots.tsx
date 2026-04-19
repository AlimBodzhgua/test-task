import {
	Carousel,
	CarouselContent,
	CarouselIndicator,
	CarouselItem,
	CarouselNavigation,
} from '@/components/ui';
import Image from 'next/image';

type ProjectScreenshotsProps = {
	images: string[];
}

export function ProjectScreenshots({ images }: ProjectScreenshotsProps) {
	return (
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
	);
}
