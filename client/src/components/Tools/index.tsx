import FigmaIcon from '../../assets/svgs/figma-icon.svg';
import ReactIcon from '../../assets/svgs/react-icon.svg';
import NodeJsIcon from '../../assets/svgs/nodejs-icon.svg';
import NextJsIcon from '../../assets/svgs/nextjs-icon.svg';
import SassIcon from '../../assets/svgs/sass-icon.svg';
import TsIcon from '../../assets/svgs/ts-icon.svg';
import TailwindIcon from '../../assets/svgs/tailwind-icon.svg';
import StorybookIcon from '../../assets/svgs/storybook-icon.svg';
import AwsIcon from '../../assets/svgs/aws-icon.svg';
import JenkinsIcon from '../../assets/svgs/jenkins-icon.svg';
import GrapqlIcon from '../../assets/svgs/graphql-icon.svg';
import GithubIcon from '../../assets/svgs/github-white-icon.svg';
import ReduxIcon from '../../assets/svgs/redux-icon.svg';
import KubernetesIcon from '../../assets/svgs/kubernetes-icon.svg';
import DockerIcon from '../../assets/svgs/docker-icon.svg';
import FadeUpAnimation from '../Animation/FadeUpAnimation';

const tools = [
	{ name: 'React', icon: ReactIcon },
	{ name: 'Next.js', icon: NextJsIcon },
	{ name: 'Node.js', icon: NodeJsIcon },
	{ name: 'TypeScript', icon: TsIcon },
	{ name: 'Sass/SCSS', icon: SassIcon },
	{ name: 'TailwindCSS', icon: JenkinsIcon },
	{ name: 'Figma', icon: FigmaIcon },
	{ name: 'Storybook', icon: StorybookIcon },
	{ name: 'Kubernetes', icon: KubernetesIcon },
	{ name: 'TailwindCSS', icon: TailwindIcon },
	{ name: 'Redux', icon: ReduxIcon },
	{ name: 'GraphQL', icon: GrapqlIcon },
	{ name: 'Docker', icon: DockerIcon },
	{ name: 'AWS', icon: AwsIcon },
	{ name: 'GitHub', icon: GithubIcon },
];

const Tools = (): JSX.Element => {
	return (
		<section
			id="tools"
			className="flex flex-col items-center max-w-[1200px] mx-auto relative section-spacing scroll-mt-20"
		>
			<div className="absolute w-[800px] h-[400px] bg-sky-400 opacity-30 blur-[250px] rounded-full z-0 top-[25%] left-1/2 -translate-x-1/2" />

			<FadeUpAnimation>
				<div className="pt-10 w-full text-center max-w-[600px] mb-10 relative z-[2] mx-auto">
					<h1 className="section-text">My Full Stack Tool Belt</h1>
					<p className="description-highlight mt-2 mb-5">
						The tools I've been using over the past 4 years
					</p>
				</div>

				<div className="relative z-[2] mx-auto grid gap-6 sm:gap-10 [grid-template-columns:repeat(auto-fit,minmax(90px,1fr))] w-full max-w-[900px] justify-items-center">
					{tools.map(({ name, icon }, index) => (
						<div
							key={`${name}-${index}`}
							className="flex flex-col items-center text-center"
						>
							<img
								src={icon}
								alt={name}
								className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1 object-contain"
							/>
							<p className="text-[10px] text-gray-400 mt-1">{name}</p>
						</div>
					))}
				</div>
			</FadeUpAnimation>
		</section>
	);
};

export default Tools;
