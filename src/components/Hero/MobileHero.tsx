import ProfilePic from '../../assets/photos/profile-pic.png';

const MobileHero = (): JSX.Element => {
	return (
		<div className="flex flex-col gap-8 md:hidden relative px-4 pt-10">
			<div className="absolute w-[300px] h-[300px] bg-green-400 opacity-20 blur-[100px] rounded-full z-0 top-0 left-1/2 -translate-x-1/2" />
			<div className="w-full justify-center align-center relative z-10">
				<p className="text-sky-400 text-center description mb-4">Hi there,</p>
				<p className="text-white text-center header mb-3">I'm Maya</p>
				<p className="text-sky-400 text-center header">Full Stack Developer</p>
			</div>
			<div className="flex w-full justify-center items-center relative z-10">
				<img
					src={ProfilePic}
					className="rounded-full border-6 border-sky-400 max-w-[300px] md:max-w-[400px] w-full h-auto"
					alt="Profile picture"
				/>
			</div>
			<div className="text-center relative z-10">
				<p className="text-gray-400 text-center description inline m-0 p-0">
					I create <span className="text-sky-400">user-focused</span> applications that
					combine functionality with clean, modern design. I am currently living in
					<span className="text-sky-400"> Tokyo.</span>
				</p>
			</div>
			<div className="flex justify-center space-x-4 relative z-10">
				<button className="bg-sky-400 w-full h-10 rounded-2xl text-white font-inter font-bold">
					Download CV
				</button>
				<button className="bg-black w-full h-10 rounded-2xl border-sky-400 border-1 text-white font-inter">
					Say Hi
				</button>
			</div>
		</div>
	);
};

export default MobileHero;
