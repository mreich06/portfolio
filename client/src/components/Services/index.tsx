import ServiceCard from './ServiceCard';
import Icon from '../../assets/svgs/icon.svg';
import FadeUpAnimation from '../Animation/FadeUpAnimation';

const projects = [
	{
		image: Icon,
		title: 'Full Stack Web Development',
		description:
			'I design and build complete web applications from the ground up, handling everything from frontend interfaces to backend logic and database integration.',
	},
	{
		image: Icon,
		title: 'Frontend Design',
		description:
			'I create responsive, visually engaging user interfaces using modern tools like Figma and Tailwind CSS. Every component is built with accessibility, UX best practices, and maintainability in mind.',
	},
	{
		image: Icon,
		title: 'App Development',
		description:
			'I develop cross-platform applications with intuitive user experiences, seamless API integration, and offline-first capabilities. For both web and mobile, I focus on delivering apps that are fast and polished.',
	},
];

const Services = (): JSX.Element => {
	return (
		<FadeUpAnimation>
			<section id="my-services" className="section-spacing max-w-[1200px] mx-auto">
				<div className="pt-10 text-center max-w-[700px] mx-auto mb-10">
					<h1 className="section-text">My Services</h1>
					<p className="description-highlight mt-2">
						Full stack development, clean design, and scalable solutions
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8">
					{projects.map((project) => (
						<ServiceCard key={project.title} {...project} />
					))}
				</div>
			</section>
		</FadeUpAnimation>
	);
};

export default Services;
