import React from 'react';
import ProjectCard from './ProjectCard';
import Project1 from '../../assets/photos/project-1.jpg';
import Project2 from '../../assets/photos/project-2.jpg';
import Project3 from '../../assets/photos/project-3.jpg';

const projects = [
	{
		title: 'Timer App',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments.',
		image: Project1,
		tags: ['React', 'Tailwind', 'TypeScript'],
		link: '#',
	},
	{
		title: 'Dashboard UI',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments',
		image: Project2,
		tags: ['Next.js', 'Redux', 'Node.js'],
		link: '#',
	},
	{
		title: 'AI Visualizer',
		description:
			'Developed a full-stack e-commerce platform where users can browse products, manage a shopping cart, and securely process payments',
		image: Project3,
		tags: ['Three.js', 'TensorFlow.js'],
		link: '#',
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects" className="py-20 px-4 md:mx-[100px] lg:mx-[100px]">
			<h2 className="text-3xl font-bold text-center text-white mb-4">Projects</h2>
			<p className="text-center text-sky-400 mb-10">
				The projects I have developed in my free time
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
