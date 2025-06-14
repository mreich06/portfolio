import PlaceholderPic from '../../assets/photos/placeholder-image.png';

const About = (): JSX.Element => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-8 lg:px-12 header-container relative">
			<div className="absolute w-[900px] h-[900px] bg-green-400 opacity-20 blur-[300px] rounded-full z-0 top-[-40%] left-[50%]" />

			<div className="w-full max-w-[1800px] flex flex-col md:flex-row gap-8 relative z-10">
				<div className="flex-1 flex justify-center items-center">
					<img
						src={PlaceholderPic}
						className="max-w-[300px] md:max-w-[600px] w-full h-auto"
						alt="Profile picture"
					/>
				</div>

				<div className="flex-1 flex flex-col justify-center text-left max-w-[700px] px-0 md:ml-8 mt-12 md:mt-0">
					<h1 className="section-text leading-14">
						Blending design & functionality to build better digital experiences
					</h1>
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
		</div>
	);
};

export default About;
