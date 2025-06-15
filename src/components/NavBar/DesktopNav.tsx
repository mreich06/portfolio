import { NavLinkProps, NavItems } from './utils';

const DesktopNavLink = ({ label, number }: NavLinkProps): JSX.Element => {
	return (
		<li>
			<a href={`#${label.toLowerCase()}`} className="flex items-center space-x-1 group">
				<span className="text-sky-400 font-mono text-xl">{number}</span>
				<span className="text-white group-hover:text-sky-400 text-xl">{label}</span>
			</a>
		</li>
	);
};

const DesktopNav = (): JSX.Element => {
	return (
		<div className="hidden md:block">
			<div className="mx-auto flex items-center justify-between px-6 py-4">
				<div className="text-4xl font-bold cursor-pointer">
					<h1>MR</h1>
				</div>
				<ul className="flex space-x-8">
					{NavItems.map((item) => (
						<DesktopNavLink number={item.number} label={item.label} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default DesktopNav;
