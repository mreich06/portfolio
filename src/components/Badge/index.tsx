interface BadgeProps {
	name: string;
}

const Badge = ({ name }: BadgeProps): JSX.Element => {
	return (
		<div className="flex border-1 border-sky-400 px-4 py-2 rounded-xl h-10 items-center justify-center">
			<p className="text-white">{name}</p>
		</div>
	);
};

export default Badge;
