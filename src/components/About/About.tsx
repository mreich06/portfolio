import Avatar from '../../assets/photos/avatar.png';

const About = (): JSX.Element => {
	return (
		<section
			id="about-me"
			className="flex flex-col md:flex-row justify-center items-center px-6 md:px-8 lg:px-12 relative scroll-mt-20"
		>
			<div className="w-full max-w-[1800px] flex flex-col md:flex-row gap-10 relative z-10">
				<div className="flex-1 flex justify-center items-center p-0">
					<img
						src={Avatar}
						className="max-w-[300px] md:max-w-[500px] w-full h-auto"
						alt="Profile picture"
					/>
				</div>

				<div className="flex-1 flex flex-col justify-center text-left max-w-[700px] p-0 md:mt-0">
					<h1 className="section-text leading-14">About Me</h1>
					<p className="description mt-5 md:mt-7">
						I am a <span className="description-highlight">detail oriented</span> and
						<span className="description-highlight"> highly adaptable</span> full stack
						web and mobile developer with 4 years of experience developing enterprise
						applications. I am proficient in all aspects of the software development life
						cycle including UI and architectural decisions, testing, deployments and
						maintenance. I am passionate about creating engaging, intuitive and responsive
						applications while continuously learning new technologies. Check out my{' '}
						<span className="description-highlight">GitHub </span>
						to see more of my works!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
