import ProfilePic from '../../assets/photos/portfolio-pic.webp';
import { Socials, socialsList } from '.';
import FadeUpAnimation from '../Animation/FadeUpAnimation';
const DesktopHero = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center relative section-spacing xl:mt-0">
			<div
				aria-hidden
				className="absolute pointer-events-none z-0"
				style={{
					width: '1100px',
					height: '500px',
					top: '-2%',
					left: '-15%',
					borderRadius: '50%',
					background: `
					radial-gradient(
					circle,
					rgba(56,189,248,0.14) 0%,
					rgba(56,189,248, 0.09) 50%,
					rgba(56,189,248,0) 80%
					)
					`,
					filter: 'blur(60px)',
				}}
			/>
			<FadeUpAnimation>
				<div className="w-full max-w-[1800px] flex gap-10 relative z-10">
					<div className="flex-1 flex flex-col justify-center">
						<p className="description mb-5 text-sky-400">Hi there,</p>
						<p className="text-white header mb-4">I&apos;m Maya</p>
						<p className="text-sky-400 header header-margin">Full Stack Developer</p>
						<p className="description text-gray-300">
							I create <span className="text-sky-400">user-focused</span> applications
							that combine functionality with clean, modern design. I am currently living
							in <span className="text-sky-400">Leipzig, Germany.</span>
						</p>
						<Socials icons={socialsList} className="my-10" />
						<div className="flex space-x-4">
							<a href="/maya-reich-resume.pdf" download className="primary-button">
								Download CV
							</a>
							<a href="#contact" className="secondary-button">
								Say Hi
							</a>
						</div>
					</div>
					<div className="flex-1 flex justify-center items-center">
						<img
							src={ProfilePic}
							alt="Profile picture"
							width={500}
							height={500}
							loading="eager"
							decoding="async"
							className="border-sky-400 max-w-[400px] md:max-w-[500px] w-full h-auto"
						/>
					</div>
				</div>
			</FadeUpAnimation>
		</div>
	);
};

export default DesktopHero;
