import ProfilePic from '../../assets/photos/portfolio-pic.svg';
import LinkedInIcon from '../../assets/photos/linkedin-icon.svg';

const DesktopHero = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center px-6 md:px-8 lg:px-18 relative mt-[150px]">
			<div className="absolute w-[1000px] h-[600px] bg-sky-400 opacity-25 blur-[230px] rounded-full z-0 top-[-10%] left-[-10%]" />
			<div className="w-full max-w-[1800px] flex gap-10 relative z-10">
				<div className="flex-1 flex flex-col justify-center">
					<p className="description mb-5 text-sky-400">Hi there,</p>
					<p className="text-white header mb-4">I'm Maya</p>
					<p className="text-sky-400 header header-margin">Full Stack Developer</p>
					<div>
						<p className="description text-gray-300">
							I create <span className="text-sky-400">user-focused</span> applications
							that combine functionality with clean, modern design. I am currently living
							in <span className="text-sky-400">Tokyo.</span>
						</p>
					</div>
					<div className="flex gap-7 my-10">
						<a
							href="https://www.linkedin.com/in/maya-reich/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
						</a>
						<a
							href="https://www.linkedin.com/in/maya-reich/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
						</a>
						<a
							href="https://www.linkedin.com/in/maya-reich/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
						</a>
						<a
							href="https://www.linkedin.com/in/maya-reich/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
						</a>
					</div>
					<div className="flex space-x-4">
						<button className="primary-button">Download CV</button>
						<button className="secondary-button">Say Hi</button>
					</div>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<img
						src={ProfilePic}
						className=" border-sky-400 max-w-[400px] md:max-w-[500px] w-full h-auto"
						alt="Profile picture"
					/>
				</div>
			</div>
		</div>
	);
};

export default DesktopHero;
