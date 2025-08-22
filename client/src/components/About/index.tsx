import Avatar from '../../assets/photos/avatar.png';
import FadeUpAnimation from '../Animation/FadeUpAnimation';

const About = (): JSX.Element => {
	return (
		<FadeUpAnimation>
			<section id="about-me" className="section-spacing scroll-mt-20">
				<div className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-centerlg:gap-1 xl:gap-1">
					<div className="flex-1 flex justify-center">
						<img
							src={Avatar}
							className="max-w-[300px] sm:max-w-[350px] xl:max-w-[420px] h-auto object-contain"
							alt="Profile picture"
						/>
					</div>

					<div className="flex-[1.2] text-center md:text-left mt-5 md:mt-0">
						<h1 className="section-text mb-4 leading-tight">About Me</h1>
						<p className="description">
							I am a <span className="description-highlight">detail-oriented</span> and
							<span className="description-highlight"> highly adaptable</span> Full Stack
							Web and Mobile Software Engineer with 4 years of experience developing
							enterprise applications. I am proficient in all aspects of the software
							development life cycle including UI and architectural decisions, testing,
							deployments, and maintenance.
							<br />
							<br />I am passionate about creating engaging, intuitive, and responsive{' '}
							<a
								href="https://github.com/mreich06"
								target="_blank"
								rel="noopener noreferrer"
								className="description-highlight underline hover:text-sky-300 transition"
							>
								GitHub
							</a>{' '}
							to see more of my works!
						</p>
					</div>
				</div>
			</section>
		</FadeUpAnimation>
	);
};

export default About;
