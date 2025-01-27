type SvgIconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

const CloseIcon = ({
	size = 24,
	width,
	height,
	color = 'white',
	...restProps
}: SvgIconProps): JSX.Element => {
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
			<g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
				<path d="M13 1 1 13M1 1l12 12"></path>
			</g>
		</svg>
	);
};

export default CloseIcon;
