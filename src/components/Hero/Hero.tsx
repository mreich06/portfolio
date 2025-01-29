import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

const Hero = () => {
	return (
		<div className="p-30">
			<DesktopHero />
			<MobileHero />
		</div>
	);
};

export default Hero;
