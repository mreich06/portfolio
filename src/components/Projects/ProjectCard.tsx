import React from 'react';

type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link: string;
};

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
	return (
		<div className="rounded-xl overflow-hidden border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 hover:scale-[1.02] transition-all">
			<img src={image} alt={title} className="w-full h-40 object-cover" />
			<div className="p-5 space-y-2">
				<h3 className="text-lg font-semibold text-white">{title}</h3>
				<div className="flex flex-wrap gap-2 mt-3">
					{tags.map((tag) => (
						<span
							key={tag}
							className="text-xs text-teal-300 bg-white/10 px-2 py-1 rounded"
						>
							{tag}
						</span>
					))}
				</div>
				<p className="text-sm text-gray-300">{description}</p>

				<div className="flex justify-start gap-4 mt-5">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 text-sm bg-cyan-500 text-white rounded hover:bg-cyan-600"
					>
						See Live
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
					>
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
