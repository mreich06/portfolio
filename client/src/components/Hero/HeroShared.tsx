export const TagLine = (
	<>
		I create <span className="text-sky-400">user-focused</span> applications that combine
		functionality with clean, modern design. I am currently living in{' '}
		<span className="text-sky-400">Leipzig, Germany.</span>
	</>
);

export const HeroIntro = ({ center = false }: { center?: boolean }) => {
	return (
		<>
			<p className={`text-sky-400 description ${center ? 'text-center mb-4' : 'mb-5'}`}>
				Hi there,
			</p>
			<p className={`text-white header ${center ? ' mb-3 text-center' : 'mb-4'}`}>
				I'm Maya
			</p>
			<p className={`text-sky-400 header ${center ? 'text-center' : 'header-margin'}`}>
				Full Stack Developer
			</p>
		</>
	);
};

export const HeroButtons = ({ center = false }: { center: boolean }) => {
	return (
		<div className={`flex space-x-4 ${center ? 'justify-center relative z-10' : ''}`}>
			<a href="/maya-reich-resume.pdf" download className="primary-button">
				Download CV
			</a>
			<a href="#contact" className="secondary-button">
				Say Hi
			</a>
		</div>
	);
};

// @apply bg-sky-400 flex justify-center items-center rounded-2xl text-white font-inter w-full;
// 		@apply px-1 py-2 text-sm; /* Default size */
// 		@apply sm:px-2 sm:py-1 sm:text-base;
// 		@apply md:px-3 md:py-2 md:text-base;
// 		@apply lg:px-3 lg:py-2 lg:text-lg;
// 		@apply xl:px-8 xl:py-3 xl:text-xl;
// 	}

//     .secondary-button {
// 		@apply bg-black flex justify-center items-center rounded-2xl border-sky-400 border-2 text-white font-inter w-full;
// 		@apply px-1 py-2 text-sm; /* Default size */
// 		@apply sm:px-2 sm:py-1 sm:text-base;
// 		@apply md:px-3 md:py-2 md:text-base;
// 		@apply lg:px-3 lg:py-2 lg:text-lg;
// 		@apply xl:px-8 xl:py-3 xl:text-xl;
// 	}

// // mobile
// 		<div className="flex justify-center space-x-4 relative z-10">
// 						<a
// 							href="/maya-reich-resume.pdf"
// 							download
// 							className="  h-10   font-bold "
// 						>
// 							Download CV
// 						</a>
// 						<a
// 							href="#contact"
// 							className="h-10 text-white font-inter flex items-center justify-center"
// 						>
// 							Say Hi
// 						</a>
// 					</div>
