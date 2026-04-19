import type { Project } from '../types';
import { GITHUB_LINK } from '@/snared/constants';

const REMINDERS_IMAGES = [
	'/screenshots/reminders/main.png',
	'/screenshots/reminders/create.png',
	'/screenshots/reminders/with-data.png',
	'/screenshots/reminders/overview.png',
];

const REMINDERS_FEATURES = [
	'Full-featured task manager with complete CRUD operations, inspired by the native macOS Reminders app',
	'Advanced search and flexible filtering by categories, priority, and date',
	'Creation of custom categories with individual icons and colors',
	'Task priority system',
	'Adding web links, date, time, and geolocation to tasks (integration with Yandex Maps)',
	'User authentication',
	'Fully custom backend built from scratch — including database schema design and authentication system with JWT token',
];

export const remindersApp: Project = {
	name: 'Reminders app',
	headerUrl: 'reminders-app',
	category: 'Web Development',
	createdAt: '2024',
	previewImage: '/screenshots/reminders/main.png',
	githubLink: GITHUB_LINK + '/reminders-app',
	images: REMINDERS_IMAGES,
	features: REMINDERS_FEATURES,
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
	description:
		'An Apple-like reminder app that runs in your browser, with features like full task management and planning.',
	overview: `A full-stack web application for managing personal tasks with a
					reminder and categorization system. It features full CRUD
					functionality and an intuitive interface. In addition to basic
					CRUD operations, it also includes sorting and search functions,
					the ability to set priorities, edit tasks and groups for the
					first time, map addresses using Yandex Maps, attach links,
					tags, and times, and drag-and-drop sorting.`,
};
