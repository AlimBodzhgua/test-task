import type { Project } from './types';

import { cryptoTracker } from './data/crypto-tracker';
import { remindersApp } from './data/reminders';
import { quizMaker } from './data/quiz-maker';

export const FRONTEND_TECHNOLOGIES = [
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'React',
	'TailwindCSS',
	'StyledComponents',
	'ChakraUI',
	'AntDesign',
	'ShadcnUI',
	'Storybook',
	'Redux',
	'Zustand',
	'Jest',
	'Scss',
	'Webpack',
	'Vite',
] as const;

export const OTHERS_TECHNOLOGIES = [
	'Git',
	'Docker',
	'Postman',
	'ESLint',
	'Stylelint',
	'Prettier',
] as const;

export const BACKEND_TECHNOLOGIES = [
	'NodeJS',
	'Express',
	'RestAPI',
	'PostgreSQL',
	'Prisma',
	'MongoDB',
	'Mongoose',
	'Firebase',
	'JWT',
] as const;

export const projectsList: Project[] = [
	quizMaker,
	remindersApp,
	cryptoTracker,
];
