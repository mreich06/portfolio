import { Socials, socialsList } from '.';
import ProfilePic from '../../assets/photos/portfolio-pic.webp';
import FadeUpAnimation from '../Animation/FadeUpAnimation';
import FadeUpImage from '../Animation/FadeUpImage';
import { HeroButtons, HeroIntro, TagLine } from './HeroShared';

const MobileHero = (): JSX.Element => {
	return (
		<FadeUpAnimation>
			<div className="overflow-hidden">
				<div className="flex flex-col gap-6 md:hidden relative mt-12">
					<div className="w-full justify-center items-center relative z-10">
						<HeroIntro center />
					</div>
					<div className="flex w-full justify-center items-center relative z-10">
						<FadeUpImage
							src={ProfilePic}
							alt="Profile picture"
							width={400}
							height={400}
							loading="eager"
							className="border-sky-400 max-w-[300px] md:max-w-[400px] w-full h-auto"
						/>
					</div>
					<div className="text-center relative z-10">
						<p className="description text-center inline m-0 p-0">{TagLine}</p>
					</div>
					<div className="flex justify-center items-center relative z-10">
						<Socials icons={socialsList} />
					</div>
					<HeroButtons center />
				</div>
			</div>
		</FadeUpAnimation>
	);
};

export default MobileHero;
