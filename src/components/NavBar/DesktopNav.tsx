interface NavLinkProps {
	label: string;
	number: string;
}

const DesktopNavLink = ({ label, number }: NavLinkProps): JSX.Element => {
	return (
		<li>
			<a href="#about" className="flex items-center space-x-1 group">
				<span className="text-green-400 font-mono">{number}</span>
				<span className="text-white group-hover:text-green-400">{label}</span>
			</a>
		</li>
	);
};

const DesktopNav = (): JSX.Element => {
	return (
		<div className="mx-auto flex items-center justify-between px-6 py-4 ">
			<div className="text-lg font-bold cursor-pointer">
				<h1>MR</h1>
			</div>
			<ul className="hidden md:flex space-x-8">
				<DesktopNavLink number={'01.'} label={'About'} />
				<DesktopNavLink number={'02.'} label={'Tools'} />
				<DesktopNavLink number={'03.'} label={'Experience'} />
				<DesktopNavLink number={'04.'} label={'Projects'} />
				<DesktopNavLink number={'05.'} label={'Contact'} />
			</ul>
		</div>
	);
};

export default DesktopNav;
