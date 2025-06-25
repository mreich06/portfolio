import RakutenLogo from '../../assets/svgs/rakuten.svg';
import ViasatLogo from '../../assets/photos/viasat.png';

const experiences = [
	{
		company: 'Rakuten',
		logo: RakutenLogo,
		role: 'Front End Developer',
		dates: 'Jan 2024 – Jul 2024',
		bullets: [
			'Developed modular, reusable React components for Rakuten’s high-traffic Item Page using TypeScript and Redux.',
			'Enhanced performance with lazy-loading and optimized client-side rendering strategies.',
			'Built and maintained a shared visual component library for consistent UI across teams.',
			'Deployed updates via AWS CodePipeline, Docker, and Jenkins with CI/CD and end-to-end test coverage.',
		],
	},
	{
		company: 'Viasat',
		logo: ViasatLogo,
		role: 'Full Stack Developer',
		dates: 'Sep 2019 – Nov 2022',
		bullets: [
			'Built and maintained MyViasat, a full-stack cross-platform app for web, iOS, and Android.',
			'Integrated pixel tracking and analytics dashboards using Kibana, Snowplow, and Adobe Analytics.',
			'Transitioned architecture to microservices and managed deployments with Docker, S3, and Elastic Beanstalk.',
			'Provided on-call production support and led product demos, while mentoring and interviewing candidates.',
		],
	},
	{
		company: 'Viasat',
		logo: ViasatLogo,
		role: 'Software Engineer Intern',
		dates: 'Sep 2019 – Nov 2022',
		bullets: [
			'Created a Python GUI for generating XML policy files, reducing manual input errors.',
			'Developed a Wireshark import module to enhance internal network diagnostics tooling.',
			'Used Bash, Vim, and Shell scripting to improve tooling used by engineering teams.',
		],
	},
];

const Experience = () => {
	return (
		<section id="experience" className="section-spacing">
			<div className="max-w-5xl mx-auto">
				<h2 className="section-text text-center section-header-spacing">Experience</h2>

				<div className="flex flex-col gap-8">
					{experiences.map((exp, i) => (
						<div
							key={i}
							className="p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2"
						>
							<div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-start">
								{/* Logo */}
								<img
									src={exp.logo}
									alt={exp.company}
									className="w-14 h-14 object-contain"
								/>

								{/* Dates */}
								<p className="text-sm text-gray-400 md:text-right md:whitespace-nowrap md:col-start-3">
									{exp.dates}
								</p>

								{/* Role, Company, Bullets */}
								<div className="md:col-start-2 md:row-start-1 md:row-span-2">
									<h3 className="text-white font-semibold text-lg">{exp.role}</h3>
									<p className="text-md text-gray-400 mb-3 mt-1">{exp.company}</p>
									<ul className="list-disc list-inside description-white space-y-1">
										{exp.bullets.map((point, idx) => (
											<li key={idx}>{point}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
