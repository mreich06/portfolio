import DesktopExperience from './DesktopExperience';
import MobileExperience from './MobileExperience';

export const experiences = [
	{
		jobTitle: 'Frontend Developer',
		company: 'Rakuten',
		dates: 'January 2024 - July 2024',
		description:
			'Front end developer for Item Page team, one of the most critical and highest revenue teams at Rakuten. Developed and maintained dynamic UIs using React, TypeScript and Redux. Rigorously tested all frontend components with 100% code coverage. Worked closely with the backend team to ensure seamless integration with APIs.',
	},
	{
		jobTitle: 'Full Stack Developer',
		company: 'Viasat',
		dates: 'September 2019 - November 2022',
		description:
			'Developed the MyViasat app for web, iOS, and Android using React, React Native, Node.js, and GraphQL. Led payment integration, implemented user analytics, transitioned to microservices with a new CI/CD pipeline, and deployed updates across platforms. Collaborated with teams, presented to stakeholders, and supported hiring and onboarding efforts.',
	},
	{
		jobTitle: 'Software Engineer Intern',
		company: 'Viasat',
		dates: 'September 2019 - November 2022',
		description:
			'Implemented Python module for importing Wireshark captures into a test tool used widely across Viasat to diagnose and solve problems with a communications terminal.',
	},
];

const Experience = () => {
	return (
		<div>
			<DesktopExperience />
			<MobileExperience />
		</div>
	);
};

export default Experience;
