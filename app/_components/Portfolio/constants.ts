import { GITHUB_LINK } from '@/snared/constants';
import type { Project } from './types';

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

const CRYPTO_TRACKER_IMAGES = [
	'/screenshots/crypto-tracker/table.png',
	'/screenshots/crypto-tracker/main.png',
	'/screenshots/crypto-tracker/converter.png',
	'/screenshots/crypto-tracker/watchlist.png',
	'/screenshots/crypto-tracker/chart.png',
	'/screenshots/crypto-tracker/login.png',
	'/screenshots/crypto-tracker/register.png',
	'/screenshots/crypto-tracker/password-reset.png',
	'/screenshots/crypto-tracker/profile.png',
];

const REMINDERS_IMAGES = [
	'/screenshots/reminders/main.png',
	'/screenshots/reminders/create.png',
	'/screenshots/reminders/with-data.png',
	'/screenshots/reminders/overview.png',
];

export const projectsList: Project[] = [
	{
		name: 'Quiz maker',
		description:
			'An interactive quiz manager with the ability to create various quizzes and share them with other users.',
		headerUrl: 'quiz-maker',
		githubLink: GITHUB_LINK + '/Quiz-Maker',
		category: 'Web Development',
		createdAt: '2025',
		previewImage: '/screenshots/quiz-maker/table-light.png',
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
		overview: `A full-stack web application for creating and taking quizzes with privacy controls,
					sharing quizzes with friends, editing questions, saving quiz scores, and a user authorization system.`,
		images: QUIZ_MAKER_IMAGES,
	},
	{
		name: 'Reminders app',
		description:
			'An Apple-like reminder app that runs in your browser, with features like full task management and planning.',
		headerUrl: 'reminders-app',
		githubLink: GITHUB_LINK + '/reminders-app',
		category: 'Web Development',
		createdAt: '2024',
		previewImage: '/screenshots/reminders/main.png',
		baseTechnologies: [
			'TypeScript',
			'React',
			'Vite',
			'Express',
			'MongoDB',
			'Redux',
			'StyledComponents',
		],
		frontendTechnologies: [
			'TypeScript',
			'React',
			'Vite',
			'StyledComponents',
			'AntDesign',
			'Redux',
		],
		backendTechnologies: ['Express', 'MongoDB', 'Mongoose', 'JWT'],
		othersTechnologies: ['ESLint', 'Prettier', 'Stylelint', 'Git'],
		overview: `A full-stack web application for managing personal tasks with a
					reminder and categorization system. It features full CRUD
					functionality and an intuitive interface. In addition to basic
					CRUD operations, it also includes sorting and search functions,
					the ability to set priorities, edit tasks and groups for the
					first time, map addresses using Yandex Maps, attach links,
					tags, and times, and drag-and-drop sorting.`,
		images: REMINDERS_IMAGES,
	},
	{
		name: 'Crypto tracker',
		description:
			'An app for tracking current cryptocurrency rates with price dynamics visualization and charts.',
		headerUrl: 'crypto-tracker',
		githubLink: GITHUB_LINK + '/CryptoTracker',
		category: 'Web Development',
		createdAt: '2024',
		previewImage: '/screenshots/crypto-tracker/table.png',
		baseTechnologies: ['TypeScript', 'React', 'Webpack', 'Firebase', 'Redux', 'Storybook'],
		frontendTechnologies: ['TypeScript', 'React', 'Scss', 'Webpack', 'Redux', 'Jest'],
		backendTechnologies: ['Firebase'],
		othersTechnologies: ['ESLint', 'Prettier', 'Stylelint', 'Git'],
		overview: `
			An app for tracking current cryptocurrency rates with visualization of price dynamics and detailed
			statistics. Available in three different currencies (USD/RUB/EUR). Integration with the CoinGecko
			API allows for real-time data collection. The system also includes user authentication with the option to log in via Google.`,
		images: CRYPTO_TRACKER_IMAGES,
	},
];
