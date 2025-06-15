const experiences = [
	{
		title: 'Front End Developer',
		company: 'Rakuten',
		date: 'January 2024 – July 2024',
		description:
			'Front end developer for Item Page team, one of the most critical and highest revenue teams at Rakuten. Developed and maintained dynamic UI using React, TypeScript and Redux. Rigorously tested all shared components with 100% code coverage. Worked closely with the backend team to ensure seamless integration with APIs.',
	},
	{
		title: 'Full Stack Developer',
		company: 'Viasat',
		date: 'September 2019 – November 2022',
		description:
			'Developed the MyViasat app for web, iOS, and Android using React, React Native, Node.js, and GraphQL. Led international integration, implemented user analytics, translated UI for newcomers with low code private, and deployed processes across platforms. Collaborated with teams, presented to stakeholders, and supported hiring and onboarding efforts.',
	},
	{
		title: 'Software Engineer Intern',
		company: 'Viasat',
		date: 'September 2019 – November 2022',
		description:
			'Implemented Python module for importing Wireshark captures into a test tool used widely across Viasat to diagnose and solve problems with a communications terminal.',
	},
];

const Experience = (): JSX.Element => {
	return (
		<div className="px-6 md:px-8 lg:px-12 py-20 max-w-[1100px] mx-auto">
			<h2 className="section-text mb-12 text-center">Experience</h2>

			{/* Desktop Layout */}
			<div className="hidden md:block relative w-full">
				<div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/20" />
				<div className="flex flex-col gap-20">
					{experiences.map((exp, index) => (
						<div key={index} className="relative">
							<div className="absolute left-1/2 -translate-x-1/2 -top-4 w-[900px] h-[100px] bg-sky-400 opacity-45 blur-[100px] rounded-full z-0" />
							<div className="relative z-10 grid grid-cols-[1fr_auto_1fr] gap-6 items-start">
								<div className="text-right pr-4">
									<p className="text-3xl font-semibold text-white">
										{exp.title}
										<br />
										<span className="text-sky-400">{exp.company}</span>
									</p>
									<p className="text-lg text-sky-400 mt-1">{exp.date}</p>
								</div>
								<div className="relative">
									<div className="w-3 h-3 bg-sky-400 rounded-full relative z-10" />
								</div>
								<div className="text-left pl-4">
									<p className="text-lg text-gray-300">{exp.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile Layout */}
			<div className="md:hidden border-l border-white/30 pl-6 relative mt-10">
				{experiences.map((experience, index) => (
					<div key={index} className="mb-12 relative">
						<div className="absolute -left-[26px] top-1 w-4 h-4 bg-sky-400 rounded-full border-2 border-white" />
						<div className="mb-2">
							<h3 className="text-lg font-medium leading-snug">
								{experience.title} <br />
								<span className="font-bold text-sky-400">{experience.company}</span>
							</h3>
							<p className="text-sky-400 text-sm mt-1">{experience.date}</p>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed">
							{experience.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
