import { BACKEND_TECHNOLOGIES, FRONTEND_TECHNOLOGIES, OTHERS_TECHNOLOGIES } from './constants';

export type FrontendTechnologyName = (typeof FRONTEND_TECHNOLOGIES)[number];
export type BackendTechnologyName = (typeof BACKEND_TECHNOLOGIES)[number];
export type OthersTechnologyName = (typeof OTHERS_TECHNOLOGIES)[number];

export type TechnologyName = FrontendTechnologyName | BackendTechnologyName | OthersTechnologyName;
export type CategoryType = 'Web Development' | 'Mobile Development';

export type Project = {
	name: string;
	description: string;
	overview: string;
	headerUrl: string;
	githubLink: string;
	previewImage: string;
	images: string[];
	createdAt: string;
	category: CategoryType;
	baseTechnologies: TechnologyName[];
	frontendTechnologies: FrontendTechnologyName[];
	backendTechnologies: BackendTechnologyName[];
	othersTechnologies: OthersTechnologyName[];
};
