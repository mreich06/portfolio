import ProfilePic from '../../assets/photos/profile-pic.png';

const MobileHero = (): JSX.Element => {
	return (
		<div className="flex flex-col gap-8">
			<div className="w-full justify-center align-center">
				<p className="text-sky-400 text-center text-lg mb-4 md:">Hi there,</p>
				<p className="text-white text-center text-5xl mb-3">I'm Maya</p>
				<p className="text-sky-400 text-center text-5xl">Full Stack Developer</p>
			</div>
			<div className="flex w-full justify-center items-center">
				<img
					src={ProfilePic}
					className="rounded-full border-6 border-sky-400 max-w-[300px] md:max-w-[400px] w-full h-auto"
					alt="Profile picture"
				/>
			</div>
			<div className="text-center">
				<p className="text-gray-400 text-center text-lg inline m-0 p-0">
					I create <span className="text-sky-400">user-focused</span> applications that
					combine functionality with clean, modern design. I am currently living in
					<span className="text-sky-400"> Tokyo.</span>
				</p>
			</div>
			<div className="flex justify-center space-x-4">
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
