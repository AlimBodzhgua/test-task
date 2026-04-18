import type { SkillType } from '../types';
import Image from 'next/image';

type SkillCardProps = {
	skill: SkillType;
};

export function SkillCard(props: SkillCardProps) {
	const { skillName, iconName } = props.skill;

	return (
		<div
			key={iconName}
			className={`group/skill flex min-w-30 flex-col items-center gap-1 rounded-lg
				border-2 border-slate-900 bg-[#141820]/20 p-4 transition-all duration-300
				ease-in-out hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg
				hover:shadow-blue-500`}
		>
			<Image
				src={`/icons/${iconName}`}
				width={45}
				height={45}
				alt='Picture of the author'
				className='group-hover/skill:scale-115'
			/>
			<div
				className='text-base font-medium text-gray-500 group-hover/skill:text-white'
			>
				{skillName}
			</div>
		</div>
	);
}
