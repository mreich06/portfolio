import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';
import LinkedInIcon from '../../assets/svgs/linkedin-icon.svg';
import GithubIcon from '../../assets/svgs/github-icon.svg';
import FigmaIcon from '../../assets/svgs/figma-icon.svg';

export interface SocialItem {
	svg: string;
	alt: string;
	link: string;
}

export const socialsList: SocialItem[] = [
	{
		svg: LinkedInIcon,
		alt: 'LinkedIn',
		link: 'https://www.linkedin.com/in/maya-reich/',
	},
	{
		svg: GithubIcon,
		alt: 'GitHub',
		link: 'https://github.com/mreich06/',
	},
	{
		svg: FigmaIcon,
		alt: 'Figma',
		link: 'https://www.figma.com/@mayareich',
	},
];

export const Socials = ({ icons }: { icons: SocialItem[] }) => {
	return (
		<div className="flex justify-center items-center gap-5 md:gap-7">
			{icons.map((icon) => (
				<a key={icon.link} href={icon.link} target="_blank" rel="noopener noreferrer">
					<img src={icon.svg} alt={icon.alt} className="w-8 h-8 md:w-10 md:h-10" />
				</a>
			))}
		</div>
	);
};

const Hero = () => {
	return (
		<div className="p-6 md:p-20">
			<DesktopHero />
			<MobileHero />
		</div>
	);
};

export default Hero;
