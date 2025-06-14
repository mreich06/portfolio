import { experiences } from '.';

const DesktopExperience = () => {
	return (
		<div className="relative max-w-4xl mx-auto px-4 py-16 text-white">
			<h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
			<div className="border-l border-white/30 pl-6">
				{experiences.map((experience, index) => (
					<div key={index} className="mb-12 relative">
						{/* Timeline dot */}
						<div className="absolute -left-[26px] top-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white" />

						{/* Left side (title + date) */}
						<div className="mb-2">
							<h3 className="text-lg font-medium leading-snug">
								{experience.jobTitle} <br />
								<span className="text-xl font-bold">{experience.company}</span>
							</h3>
							<p className="text-teal-400 text-sm mt-1">{experience.dates}</p>
						</div>

						{/* Right side (description) */}
						<p className="text-gray-300 text-sm leading-relaxed">
							{experience.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DesktopExperience;
