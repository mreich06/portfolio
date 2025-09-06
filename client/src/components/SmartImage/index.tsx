// SmartImage has all the standard <img> properties + priority
interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	priority?: boolean;
}

// higher priority for more crucial elements such as Hero, lazy loading for less critical
// decoding async - decode image off of main thread
const SmartImage = ({ priority, decoding = 'async', ...rest }: SmartImageProps) => {
	return (
		<img
			{...rest}
			decoding={decoding}
			{...(priority
				? { fetchPriority: 'high' }
				: { loading: 'lazy', fetchPriority: 'low' })}
		/>
	);
};

export default SmartImage;
