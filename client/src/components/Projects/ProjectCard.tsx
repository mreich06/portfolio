type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link: string;
};

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
	return (
		<div className="p-3 md:p-6 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 hover:scale-[1.02] transition-all">
			<img src={image} alt={title} className="w-full h-70 object-cover rounded-xl" />
			<div className="p-3 md:p-5 space-y-5">
				<h3 className="project-title font-semibold text-white">{title}</h3>
				<div className="flex flex-wrap gap-2 mt-3">
					{tags.map((tag) => (
						<span
							key={tag}
							className="text-sm text-teal-300 bg-white/10 px-2 py-1 rounded"
						>
							{tag}
						</span>
					))}
				</div>
				<p className="description-white">{description}</p>

				<div className="flex justify-start gap-4 mt-5">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 text-sm bg-cyan-500 text-white rounded hover:bg-cyan-600"
						href={link}
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
