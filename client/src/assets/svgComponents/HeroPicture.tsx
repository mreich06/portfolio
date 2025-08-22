type HeroPictureProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

const HeroPicture = ({
	size = 24,
	width,
	height,
	color = 'white',
	...restProps
}: HeroPictureProps): JSX.Element => {
	const finalWidth = width ?? size;
	const finalHeight = height ?? size;

	return (
		<svg
			viewBox="0 0 24 24"
			width={finalWidth}
			height={finalHeight}
			fill={color}
			{...restProps}
		>
			<g filter="url(#a)">
				<path d="M366.945 188.013c-29.445 114.487-18.5 183.652-133.5 205C108 409-22 267 9.5 143.5 34.496 45.499 171.555-18.013 278 9.5 361 45 383.5 96 366.945 188.013" />
			</g>
			<mask id="b" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
				<path d="M366.945 188.013C333.759 294.513 357 368.5 231.5 394 110.5 409-26.447 264.111 4.445 143.013c25-98 162.555-162.013 274-136.5 88.5 33.487 107.055 94.987 88.5 181.5" />
			</mask>
			<g mask="url(#b)">
				<foreignObject x="22" y="-30">
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						style={{
							backdropFilter: 'blur(2px)',
							clipPath: 'url(#c)',
							height: '100%',
							width: '100%',
						}}
					/>
				</foreignObject>
				<path d="M26-26h335v447H26z" data-figma-bg-blur-radius="4" />
			</g>
			<defs>
				<clipPath id="c" transform="translate(-22 30)">
					<path d="M26-26h335v447H26z" />
				</clipPath>
				<pattern id="d" patternContentUnits="objectBoundingBox">
					<use xlinkHref="#e" transform="scale(.00043 .00032)" />
				</pattern>
				<filter
					id="a"
					x=".725"
					y="3.053"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_18" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_1_18" result="shape" />
				</filter>
				<image id="e" preserveAspectRatio="none" />
			</defs>
		</svg>
	);
};

export default HeroPicture;
