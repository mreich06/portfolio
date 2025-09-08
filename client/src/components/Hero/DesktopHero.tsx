import ProfilePic from '../../assets/photos/portfolio-pic.webp';
import { Socials, socialsList } from '.';
import FadeUpAnimation from '../Animation/FadeUpAnimation';
import FadeUpImage from '../Animation/FadeUpImage';
import { TagLine, HeroButtons, HeroIntro } from './HeroShared';

const DesktopHero = (): JSX.Element => {
	return (
		<div className="hidden md:flex justify-center items-center relative section-spacing xl:mt-0">
			<div
				aria-hidden
				className="absolute pointer-events-none z-0"
				style={{
					width: '1100px',
					height: '500px',
					top: '-2%',
					left: '-15%',
					borderRadius: '50%',
					background: `
            radial-gradient(
              circle,
              rgba(56,189,248,0.14) 0%,
              rgba(56,189,248,0.09) 50%,
              rgba(56,189,248,0) 80%
            )
          `,
					filter: 'blur(60px)',
				}}
			/>
			<div className="w-full max-w-[1800px] flex gap-10 relative z-10">
				<FadeUpAnimation
					wrapperClassName="basis-0 flex-1 min-w-0"
					className="flex flex-col justify-center"
				>
					<HeroIntro />
					<p className="description">{TagLine}</p>
					<Socials icons={socialsList} className="my-10" />
					<HeroButtons center={false} />
				</FadeUpAnimation>

				<div className="flex-1 flex justify-center items-center">
					<FadeUpImage
						src={ProfilePic}
						alt="Profile picture"
						width={500}
						height={500}
						loading="eager"
						className="block border-sky-400 max-w-[400px] md:max-w-[500px] w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default DesktopHero;
