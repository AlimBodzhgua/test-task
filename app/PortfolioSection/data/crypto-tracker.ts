import type { Project } from '../types';
import { GITHUB_LINK } from '@/snared/constants';

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
];

export const cryptoTracker: Project = {
	name: 'Crypto tracker',
	headerUrl: 'crypto-tracker',
	category: 'Web Development',
	createdAt: '2024',
	previewImage: '/screenshots/crypto-tracker/table.png',
	githubLink: GITHUB_LINK + '/CryptoTracker',
	images: CRYPTO_TRACKER_IMAGES,
	features: CRYPTO_TRACKER_FEATURES,
	baseTechnologies: ['TypeScript', 'React', 'Webpack', 'Firebase', 'Redux', 'Storybook'],
	frontendTechnologies: ['TypeScript', 'React', 'Scss', 'Webpack', 'Redux', 'Jest'],
	backendTechnologies: ['Firebase'],
	othersTechnologies: ['ESLint', 'Prettier', 'Stylelint', 'Git'],
	description:
		'An app for tracking current cryptocurrency rates with price dynamics visualization and charts.',
	overview: `
			An app for tracking current cryptocurrency rates with visualization of price dynamics and detailed
			statistics. Available in three different currencies (USD/RUB/EUR). Integration with the CoinGecko
			API allows for real-time data collection. The system also includes user authentication with the option to log in via Google and fully covered with unit-tests`,
};
