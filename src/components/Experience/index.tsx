import RakutenLogo from '../../assets/svgs/sass-icon.svg';
import ViasatLogo from '../../assets/svgs/sass-icon.svg';

const experiences = [
	{
		company: 'Rakuten',
		logo: RakutenLogo,
		role: 'Front End Developer',
		dates: 'Jan 2024 – Jul 2024',
		bullets: [
			'Developed and maintained UI using React, TypeScript, Redux.',
			'Tested components with 100% coverage.',
			'Integrated frontend with backend APIs for seamless user flow.',
			'Integrated frontend with backend APIs for seamless user flow.',
		],
	},
	{
		company: 'Viasat',
		logo: ViasatLogo,
		role: 'Full Stack Developer',
		dates: 'Sep 2019 – Nov 2022',
		bullets: [
			'Built the MyViasat app for web/iOS/Android using React Native, GraphQL.',
			'Led international integration and deployment.',
			'Collaborated with product teams and stakeholders.',
			'Collaborated with product teams and stakeholders.',
		],
	},
	{
		company: 'Viasat',
		logo: ViasatLogo,
		role: 'Software Engineer Intern',
		dates: 'Sep 2019 – Nov 2022',
		bullets: [
			'Created Wireshark import module using Python.',
			'Improved debugging processes used across engineering teams.',
			'Improved debugging processes used across engineering teams.',
		],
	},
];

const Experience = () => {
	return (
		<section id="experience" className="max-w-5xl mx-auto px-6 my-40">
			<h2 className="text-3xl font-bold text-white text-center mb-12">Experience</h2>

			<div className="flex flex-col gap-8">
				{experiences.map((exp, i) => (
					<div
						key={i}
						className="grid grid-cols-[auto_1fr_auto] gap-6 items-start p-8 rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2"
					>
						{/* Left: Logo */}
						<img
							src={exp.logo}
							alt={exp.company}
							className="w-12 h-12 object-contain mt-1"
						/>

						{/* Middle: Role + Bullets */}
						<div>
							<h3 className="text-white font-semibold text-lg">{exp.role}</h3>
							<p className="text-md text-gray-400 mb-3 mt-1">{exp.company}</p>
							<ul className="list-disc list-inside text-mds text-gray-300 space-y-1">
								{exp.bullets.map((point, idx) => (
									<li key={idx}>{point}</li>
								))}
							</ul>
						</div>

						{/* Right: Dates */}
						<p className="text-sm text-gray-400 text-right whitespace-nowrap">
							{exp.dates}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;
