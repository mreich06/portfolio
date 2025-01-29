import ProfilePic from '../../assets/photos/profile-pic.png';

const DesktopHero = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center px-6 md:px-8 lg:px-12 header-container">
			<div className="w-full max-w-[1800px] flex gap-8">
				<div className="flex-1 flex flex-col justify-center">
					<p className="description mb-5">Hi there,</p>
					<p className="text-white header mb-4">I'm Maya</p>
					<p className="text-sky-400 header header-margin">Full Stack Developer</p>
					<div className="mb-18">
						<p className="description">
							I create <span className="text-sky-400">user-focused</span> applications
							that combine functionality with clean, modern design. I am currently living
							in
							<span className="text-sky-400"> Tokyo.</span>
						</p>
					</div>
					<div className="flex space-x-4 mt-10">
						<button className="primary-button">Download CV</button>
						<button className="secondary-button">Say Hi</button>
					</div>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<img
						src={ProfilePic}
						className="rounded-full border-6 border-sky-400 max-w-[400px] md:max-w-[600px] w-full h-auto"
						alt="Profile picture"
					/>
				</div>
			</div>
		</div>
	);
};

export default DesktopHero;
