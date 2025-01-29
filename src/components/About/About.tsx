import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

const About = (): JSX.Element => {
	return (
		<div className="xs:p-12 sm:p-15 md:p-15">
			<MobileAbout />
			<DesktopAbout />
		</div>
	);
};

export default About;
