import PlaceholderPic from '../../assets/photos/placeholder-image.png';

const DesktopAbout = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center px-6 md:px-8 lg:px-12 header-container">
			<div className="w-full max-w-[1800px] flex gap-8">
				<div className="flex-1 flex justify-center items-center">
					<img
						src={PlaceholderPic}
						className="max-w-[400px] md:max-w-[600px] w-full h-auto"
						alt="Profile picture"
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center">
					<div className="mb-18 ml-8">
						<h1 className="section-text leading-14 text-left mt-12 max-w-[700px]">
							Blending design & functionality to build better digital experiences
						</h1>
						<p className="description mt-7">
							I am a <span className="description-highlight">detail oriented</span> and
							<span className="description-highlight"> highly adaptable</span> full stack
							web and mobile developer with 4 years of experience developing enterprise
							applications. I am proficient in all aspects of the software development
							life cycle including UI and architectural decisions, testing, deployments
							and maintenance. I am passionate about creating engaging, intuitive and
							responsive applications while continuously learning new technologies. Check
							out my <span className="description-highlight">GitHub </span>
							to see more of my works!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopAbout;
