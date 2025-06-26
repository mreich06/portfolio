import ProjectCard from './ProjectCard';
import SpotifyDashboardImage from '../../assets/photos/spotify-project.png';
import VisaWebsiteImage from '../../assets/photos/project-2.jpg';
import PortfolioProjectImage from '../../assets/photos/portfolio-project.png';

const projects = [
	{
		title: 'Spotify Dashboard',
		description:
			'An interactive analytics dashboard that visualizes your Spotify listening habits over time. Tracks your top artists, genres, and songs across short, medium, and long-term ranges',
		image: SpotifyDashboardImage,
		tags: ['React', 'Tailwind', 'TypeScript', 'Redux', 'Next.js'],
		link: 'https://github.com/mreich06/spotify-dashboard',
		website: 'https://github.com/mreich06/spotify-dashboard',
	},
	{
		title: 'Visa/Work Tools Website',
		description:
			'An AI-powered platform that uses smart automation and web scraping to deliver personalized visa recommendations, job listings, and relocation guides tailored to your citizenship and goals.',
		image: VisaWebsiteImage,
		tags: ['React', 'Redux', 'Node.js'],
		link: 'https://github.com/mreich06',
		website: 'https://github.com/mreich06',
	},
	{
		title: 'Portfolio',
		description:
			'A sleek, responsive portfolio showcasing my work experience and focused on clean design and user experience.',
		image: PortfolioProjectImage,
		tags: ['React', 'Tailwind', 'TypeScript'],
		link: 'https://github.com/mreich06/portfolio',
		website: 'https://github.com/mreich06/portfolio',
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects" className="xl:mx-[100px] 2xl:mx-[300px] section-spacing">
			<h2 className="pt-10 md:pt-0 section-text text-center text-white">Projects</h2>
			<p className="text-center description-highlight section-header-spacing">
				The projects I have developed in my free time
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
