import type { Project } from '../types';
import { GITHUB_LINK } from '@/snared/constants';

const QUIZ_MAKER_IMAGES = [
	'/screenshots/quiz-maker/table-light.png',
	'/screenshots/quiz-maker/table-dark.png',
	'/screenshots/quiz-maker/table-select.png',
	'/screenshots/quiz-maker/quiz-create.png',
	'/screenshots/quiz-maker/privacy.png',
	'/screenshots/quiz-maker/quiz.png',
	'/screenshots/quiz-maker/completed.png',
	'/screenshots/quiz-maker/profile.png',
];

const QUIZ_MAKER_FEATURES = [
	'Creation of tests with support for multiple question types and answer options',
	'Flexible privacy settings for tests (public, private, password-protected, or accessible via link',
	'Ability to set time limits for taking the test',
	'Convenient table of all tests with pagination, search, and filters',
	'Automatic calculation of results with display of correct and incorrect answers',
	'Ability to rate the test, print the result, and share it',
	'Fully custom backend built from scratch with JWT token authentication',
	'Dark theme support',
	'Multi-language support (Russian and English)',
];

export const quizMaker: Project = {
	name: 'Quiz maker',
	headerUrl: 'quiz-maker',
	category: 'Web Development',
	createdAt: '2025',
	previewImage: '/screenshots/quiz-maker/table-light.png',
	githubLink: GITHUB_LINK + '/Quiz-Maker',
	images: QUIZ_MAKER_IMAGES,
	features: QUIZ_MAKER_FEATURES,
	baseTechnologies: [
		'TypeScript',
		'React',
		'Vite',
		'Express',
		'MongoDB',
		'Zustand',
		'ChakraUI',
	],
	frontendTechnologies: ['TypeScript', 'React', 'Vite', 'ChakraUI', 'Zustand'],
	backendTechnologies: ['Express', 'MongoDB', 'Mongoose', 'JWT'],
	othersTechnologies: ['ESLint', 'Prettier', 'Stylelint', 'Git', 'Docker'],
	description:
		'An interactive quiz manager with the ability to create various quizzes and share them with other users.',
	overview: `A full-stack web application for creating and taking quizzes with privacy controls,
					sharing quizzes with friends, editing questions, saving quiz scores, and a user authorization system.
					Built using Feature-Slice Design (FSD) architecture for better scalability and applicability
				`,
};
