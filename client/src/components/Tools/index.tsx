import FigmaIcon from '../../assets/svgs/figma-icon.svg';
import ReactIcon from '../../assets/svgs/react-icon.svg';
import ReactNativeIcon from '../../assets/svgs/react-native-app-icon.svg';
import NodeJsIcon from '../../assets/svgs/nodejs-icon.svg';
import NextJsIcon from '../../assets/svgs/nextjs-icon.svg';
import SassIcon from '../../assets/svgs/sass-icon.svg';
import TsIcon from '../../assets/svgs/ts-icon.svg';
import TailwindIcon from '../../assets/svgs/tailwind-icon.svg';
import StorybookIcon from '../../assets/svgs/storybook-icon.svg';
import AwsIcon from '../../assets/svgs/aws-icon.svg';
import JenkinsIcon from '../../assets/svgs/jenkins-icon.svg';
import GraphqlIcon from '../../assets/svgs/graphql-icon.svg';
import GithubIcon from '../../assets/svgs/github-white-icon.svg';
import ReduxIcon from '../../assets/svgs/redux-icon.svg';
import KubernetesIcon from '../../assets/svgs/kubernetes-icon.svg';
import DockerIcon from '../../assets/svgs/docker-icon.svg';
import FadeUpAnimation from '../Animation/FadeUpAnimation';

const tools = [
	{ name: 'React', icon: ReactIcon },
	{ name: 'React Native', icon: ReactNativeIcon },
	{ name: 'Next.js', icon: NextJsIcon },
	{ name: 'Node.js', icon: NodeJsIcon },
	{ name: 'TypeScript', icon: TsIcon },
	{ name: 'Sass/SCSS', icon: SassIcon },
	{ name: 'TailwindCSS', icon: TailwindIcon },
	{ name: 'Figma', icon: FigmaIcon },
	{ name: 'Storybook', icon: StorybookIcon },
	{ name: 'Kubernetes', icon: KubernetesIcon },
	{ name: 'Redux', icon: ReduxIcon },
	{ name: 'GraphQL', icon: GraphqlIcon },
	{ name: 'Docker', icon: DockerIcon },
	{ name: 'AWS', icon: AwsIcon },
	{ name: 'Jenkins', icon: JenkinsIcon },
	{ name: 'GitHub', icon: GithubIcon },
];

const Tools = (): JSX.Element => {
	return (
		<FadeUpAnimation>
			<section
				id="tools"
				className="flex flex-col items-center max-w-[1200px] mx-auto relative section-spacing scroll-mt-20"
			>
				<div
					aria-hidden
					className="absolute pointer-events-none z-0"
					style={{
						width: 'clamp(600px, 90vw, 1100px)',
						height: 'clamp(350px, 45vw, 480px)',
						top: '14%',
						left: '50%',
						transform: 'translateX(-50%)',
						borderRadius: '50%',
						background: `
              radial-gradient(
                60% 60% at 50% 50%,
                rgba(56,189,248,0.16) 0%,
                rgba(56,189,248,0.10) 45%,
                rgba(56,189,248,0.03) 80%
              )
            `,
						filter: 'blur(50px)',
					}}
				/>

				<div className="pt-10 w-full text-center max-w-[600px] mb-10 z-10">
					<h1 className="section-text">My Full Stack Tool Belt</h1>
					<p className="description-highlight mt-2 mb-5">
						The tools I&apos;ve been using over the past 4 years
					</p>
				</div>

				<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-6 sm:gap-10 z-10">
					{tools.map(({ name, icon }) => (
						<div key={name} className="flex flex-col items-center text-center">
							<img
								src={icon}
								alt={name}
								width={64}
								height={64}
								loading="lazy"
								decoding="async"
								className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1 object-contain"
							/>
							<p className="text-[10px] text-gray-400 mt-1">{name}</p>
						</div>
					))}
				</div>
			</section>
		</FadeUpAnimation>
	);
};

export default Tools;
