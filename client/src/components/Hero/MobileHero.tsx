import { Socials, socialsList } from '.';
import ProfilePic from '../../assets/photos/portfolio-pic.webp';
import FadeUpAnimation from '../Animation/FadeUpAnimation';

const MobileHero = (): JSX.Element => {
	return (
		<FadeUpAnimation>
			<div className="overflow-hidden">
				<div className="flex flex-col gap-6 md:hidden relative mt-12">
					<div className="w-full justify-center items-center relative z-10">
						<p className="text-sky-400 text-center description mb-4">Hi there,</p>
						<p className="text-white text-center header mb-3">I&apos;m Maya</p>
						<p className="text-sky-400 text-center header">Full Stack Developer</p>
					</div>
					<div className="flex w-full justify-center items-center relative z-10">
						<img
							src={ProfilePic}
							alt="Profile picture"
							width={400}
							height={400}
							loading="eager"
							decoding="async"
							className="border-sky-400 max-w-[300px] md:max-w-[400px] w-full h-auto"
						/>
					</div>
					<div className="text-center relative z-10">
						<p className="text-gray-400 text-center description inline m-0 p-0">
							I create <span className="text-sky-400">user-focused</span> applications
							that combine functionality with clean, modern design. I am currently living
							in <span className="text-sky-400">Leipzig, Germany.</span>
						</p>
					</div>
					<div className="flex justify-center items-center relative z-10">
						<Socials icons={socialsList} />
					</div>

					<div className="flex justify-center space-x-4 relative z-10">
						<a
							href="/maya-reich-resume.pdf"
							download
							className="bg-sky-400 w-full h-10 rounded-2xl text-white font-inter font-bold flex items-center justify-center"
						>
							Download CV
						</a>
						<a
							href="#contact"
							className="bg-black w-full h-10 rounded-2xl border border-sky-400 text-white font-inter flex items-center justify-center"
						>
							Say Hi
						</a>
					</div>
				</div>
			</div>
		</FadeUpAnimation>
	);
};

export default MobileHero;
