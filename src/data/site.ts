import { withBase } from '../consts';

export const profile = {
	firstName: 'Kyle',
	lastName: 'Manternach',
	role: 'Computer Engineering Student',
	github: 'https://github.com/kylemanternach1',
	linkedin: 'https://www.linkedin.com/in/kyledmanternach',
	overview:
		"I'm a Computer Engineering student at UC Santa Barbara, pursuing a B.S. with a minor in Data Science and an M.S. in Computer Science. I've gained industry experience through software and product roles at CapitolAI, BeReal, and Polymarket, where I've worked across AI workflows, user research, and consumer-app onboarding. I'm particularly interested in building reliable software and applying what I learn to real problems. I'm always looking to learn, take on new challenges, and build things that have an impact. Feel free to reach out if you'd like to connect!",
	projectsIntro: 'A few things I have built.',
};

export const focusAreas = [
	{ title: 'Software Engineer', icon: 'software' },
	{ title: 'Product Management', icon: 'product' },
	{ title: 'Distributed Systems', icon: 'systems' },
	{ title: 'Machine Learning', icon: 'learning' },
];

export const experiences = [
	{
		title: 'Instructional Assistant',
		company: 'UCSB Computer Science Department',
		date: 'Dec. 2025 — Present',
		logo: withBase('/logos/ucsb.png'),
		points: [
			'Ran **100+** office-hour and mock-interview sessions for **CS24 (C++ Data Structures)** and **CS8 (Intro to Python)**, covering runtime analysis, trees, graphs, and traversal algorithms',
		],
	},
	{
		title: 'Software Development Consultant',
		company: 'Polymarket',
		logo: withBase('/logos/polymarket.png'),
		date: 'Mar. 2026 — Jun. 2026',
		points: [
			"Partnered with Polymarket's product and growth teams to audit the **U.S. app's** onboarding, locating gaps in safety during sensitive information input and creating engineering-ready requirements",
			'Specified the logic for an **"Initial Prediction Offering"** mechanic, giving new markets a highly active opening position to drive first-time app usage, and handed off requirements to engineering',
		],
	},
	{
		title: 'Product Development Intern',
		company: 'BeReal',
		logo: withBase('/logos/bereal.png'),
		date: 'Mar. 2025 — Jun. 2025',
		points: [
			'Synthesized **200+** user interviews across a **20K+** user base into a structured gap analysis of early-network growth and sharing behavior, presenting findings directly to product and engineering',
			'Co-authored feature requirements with product and engineering for **"Friends of Friends,"** a feature projected to lift retention by **10%** based on observed gaps across friend-network sizes',
		],
	},
	{
		title: 'Software Engineer Intern',
		company: 'CapitolAI',
		logo: withBase('/logos/capitol.svg'),
		date: 'Sept. 2024 — Mar. 2025',
		points: [
			"Built **LegalEase**, a **RAG-based** legal AI workflow on CapitolAI's developer platform, assembling a legal document corpus and integrating the platform's internal **API** to automate QA testing",
			'Surfaced **15+** workflow and onboarding bugs through automated testing, converting findings into prioritized feature requirements shipped by product and engineering',
		],
	},
];

export const technologies = [
	{ name: 'Python', src: withBase('/logos/python.svg') },
	{ name: 'C++', src: withBase('/logos/cplusplus.svg') },
	{ name: 'Java', src: withBase('/logos/java.svg') },
	{ name: 'Figma', src: withBase('/logos/figma.svg') },
];

export const projects = [
	{
		name: 'Project name',
		description: 'One or two sentences on what it is and why it matters.',
		tags: ['python'],
		href: 'https://github.com/kylemanternach1',
	},
	{
		name: 'Another project',
		description: 'Replace this card with a real project, including a link and a short description.',
		tags: ['c++'],
		href: 'https://github.com/kylemanternach1',
	},
];

export const navLinks = [
	{ id: 'about', title: 'About' },
	{ id: 'work', title: 'Work' },
	{ id: 'projects', title: 'Projects' },
];
