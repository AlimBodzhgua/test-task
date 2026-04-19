import type { Project } from './types';

import { GITHUB_LINK } from '@/snared/constants';

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

const QUIZ_MAKER_FEATURES = [
	'Creation of tests with support for multiple question types and answer options',
	'Flexible privacy settings for tests (public, private, password-protected, or accessible via link',
	'Ability to set time limits for taking the test',
	'Convenient table of all tests with pagination, search, and filters',
	'Automatic calculation of results with display of correct and incorrect answers',
	'Ability to rate the test, print the result, and share it',
	'Fully custom backend built from scratch with JWT token authentication',
	'Dark theme support',
	'Multi-language support (Russian and English)'
]

const CRYPTO_TRACKER_FEATURES = [
	'Real-time display of global cryptocurrency market statistics',
	'Comprehensive table of all coins with detailed data and price dynamics',
	'Advanced search, multi-level filtering, and sorting',
	'Infinite scroll with scroll position preservation after page reload',
	'Personal Watchlist for tracking favorite assets',
	'Interactive price chart for the last 24 hours',
	'Convenient cryptocurrency converter',
	'Ability to choose the base currency for the entire app (USD, RUB, EUR)',
	'Multi-language support (Russian and English)',
	'User authentication via email/password and Google Sign-In',
	'Backend implemented with Firebase (Authentication + Firestore)',
]

const REMINDERS_FEATURES = [
	'Full-featured task manager with complete CRUD operations, inspired by the native macOS Reminders app',
	'Advanced search and flexible filtering by categories, priority, and date',
	'Creation of custom categories with individual icons and colors',
	'Task priority system',
	'Adding web links, date, time, and geolocation to tasks (integration with Yandex Maps)',
	'User authentication',
	'Fully custom backend built from scratch — including database schema design and authentication system with JWT token',
]

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
					sharing quizzes with friends, editing questions, saving quiz scores, and a user authorization system.
					Built using Feature-Slice Design (FSD) architecture for better scalability and applicability
				`,
		images: QUIZ_MAKER_IMAGES,
		features: QUIZ_MAKER_FEATURES,
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
		features: REMINDERS_FEATURES,
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
			API allows for real-time data collection. The system also includes user authentication with the option to log in via Google and fully covered with unit-tests`,
		images: CRYPTO_TRACKER_IMAGES,
		features: CRYPTO_TRACKER_FEATURES,
	},
];
