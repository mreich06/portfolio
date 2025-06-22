import ServiceCard from './ServiceCard';
import Icon from '../../assets/photos/icon.svg';

const projects = [
	{
		image: Icon,
		title: 'Full-Stack Web Development',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments.',
	},
	{
		image: Icon,
		title: 'Frontend Design',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments',
	},
	{
		image: Icon,
		title: 'App Development',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments',
	},
];

const Services = (): JSX.Element => {
	return (
		<section
			id="my-services"
			className="md:flex flex-col items-center p-10 max-w-[1200px] mx-auto mb-30"
		>
			<div className="w-full text-center max-w-[600px] mb-10">
				<h1 className="section-text mt-17">My Services</h1>
				<p className="text-sky-400 text-center text-xl mt-2">
					Full-stack development, clean design, and scalable solutions
				</p>
			</div>
			<div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto"></div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{projects.map((project) => (
					<ServiceCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

export default Services;
