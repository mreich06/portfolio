interface NavLinkProps {
	number: string;
	label: string;
}
const NavLink = ({ number, label }: NavLinkProps): JSX.Element => {
	return (
		<a href={`${label.toLowerCase()}`} className="flex items-center space-x-2 group">
			<span className="text-green-400 font-mono">{number}</span>
			<span className="text-white">{label}</span>
		</a>
	);
};

const NavLinks = (): JSX.Element => {
	return (
		<>
			<NavLink number={'01.'} label={'About'} />
			<NavLink number={'02.'} label={'Tools'} />
			<NavLink number={'03.'} label={'Experience'} />
			<NavLink number={'04.'} label={'Projects'} />
			<NavLink number={'05.'} label={'Contact'} />
		</>
	);
};

export default NavLinks;
