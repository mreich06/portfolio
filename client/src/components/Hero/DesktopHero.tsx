import ProfilePic from '../../assets/svgs/portfolio-pic.png';
import { Socials, socialsList } from '.';
import FadeUpAnimation from '../Animation/FadeUpAnimation';
const DesktopHero = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center relative section-spacing xl:mt-0">
			<div className="absolute w-[1000px] h-[600px] bg-sky-400 opacity-25 blur-[230px] rounded-full z-0 top-[-10%] left-[-10%]" />
			<FadeUpAnimation>
				<div className="w-full max-w-[1800px] flex gap-10 relative z-10">
					<div className="flex-1 flex flex-col justify-center">
						<p className="description mb-5 text-sky-400">Hi there,</p>
						<p className="text-white header mb-4">I'm Maya</p>
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
							className="border-sky-400 max-w-[400px] md:max-w-[500px] w-full h-auto"
							alt="Profile picture"
						/>
					</div>
				</div>
			</FadeUpAnimation>
		</div>
	);
};

export default DesktopHero;
