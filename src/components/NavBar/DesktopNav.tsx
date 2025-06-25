import { NavLinkProps, NavItems } from './utils';
import { Link } from 'react-scroll';

const DesktopNavLink = ({ label, number, id }: NavLinkProps): JSX.Element => {
	return (
		<li>
			<Link
				to={id}
				spy={true}
				smooth={true}
				offset={-60}
				duration={500}
				className="flex items-center space-x-1 cursor-pointer"
			>
				<span className="text-sky-400 font-mono text-sm lg:text-xl">{number}</span>
				<span className="text-white hover:text-sky-400 text-sm lg:text-xl">{label}</span>
			</Link>
		</li>
	);
};

const DesktopNav = (): JSX.Element => {
	return (
		<div className="hidden md:block px-4">
			<div className="mx-auto flex items-center justify-between px-3 py-7">
				<h1 className="text-xl lg:text-2xl cursor-pointer">Maya Reich</h1>
				<ul className="flex space-x-6">
					{NavItems.map((item) => (
						<DesktopNavLink
							key={item.id}
							number={item.number}
							label={item.label}
							id={item.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default DesktopNav;
