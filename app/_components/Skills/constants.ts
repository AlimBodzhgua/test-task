export type SkillType = {
	iconName: string;
	skillName: string;
};

export const frontendSkills: SkillType[] = [
	{ iconName: 'javascript.svg', skillName: 'JavaScript' },
	{ iconName: 'typescript.svg', skillName: 'TypeScript' },
	{ iconName: 'html.svg', skillName: 'HTML' },
	{ iconName: 'css.svg', skillName: 'CSS' },
	{ iconName: 'react.svg', skillName: 'React' },
	{ iconName: 'tailwindcss.svg', skillName: 'Tailwind CSS' },
];

export const additionalFrontendSkills: SkillType[] = [
	{ iconName: 'styled.svg', skillName: 'Styled Components' },
	{ iconName: 'chakra-ui.svg', skillName: 'ChakraUI' },
	{ iconName: 'ant-design.svg', skillName: 'AntDesign' },
	{ iconName: 'shadcn-ui.svg', skillName: 'ShadcnUI' },
	{ iconName: 'storybook.svg', skillName: 'Storybook' },
	{ iconName: 'redux.svg', skillName: 'Redux' },
	{ iconName: 'zustand.svg', skillName: 'Zustand' },
	{ iconName: 'jest.svg', skillName: 'Jest' },
];

export const otherSkills: SkillType[] = [
	{ iconName: 'git.svg', skillName: 'Git' },
	{ iconName: 'webpack.svg', skillName: 'Webpack' },
	{ iconName: 'vite.svg', skillName: 'Vite' },
	{ iconName: 'docker.svg', skillName: 'Docker' },
	{ iconName: 'postman.svg', skillName: 'Postman' },
	{ iconName: 'eslint.svg', skillName: 'ESLint' },
	{ iconName: 'stylelint.svg', skillName: 'Stylelint' },
	{ iconName: 'prettier.svg', skillName: 'Prettier' },
];

export const backendSkills: SkillType[] = [
	{ iconName: 'node.svg', skillName: 'NodeJS' },
	{ iconName: 'express.svg', skillName: 'Express' },
	{ iconName: 'server.svg', skillName: 'RestAPI' },
	{ iconName: 'postgresql.svg', skillName: 'PostgreSQL' },
	{ iconName: 'prisma.svg', skillName: 'Prisma' },
	{ iconName: 'mongodb.svg', skillName: 'MongoDB' },
];