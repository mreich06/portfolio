import { NavLinkProps, NavItems } from './utils';
import { Link } from 'react-scroll';

const DesktopNavLink = ({ label, number, id }: NavLinkProps): JSX.Element => {
	return (
		<li>
			<Link
				to={id}
				spy={true}
				smooth={true}
				offset={-80}
				duration={500}
				className="flex items-center space-x-1 cursor-pointer"
			>
				<span className="text-sky-400 font-mono text-sm lg:text-lg">{number}</span>
				<span className="text-gray-300 hover:text-sky-400 text-sm lg:text-lg">
					{label}
				</span>
			</Link>
		</li>
	);
};

const DesktopNav = (): JSX.Element => {
	return (
		<div className="hidden md:block px-4">
			<div className="mx-auto flex items-center justify-between px-3 py-7">
				<h1 className="text-lg lg:text-xl cursor-pointer">
					<span className="hidden lg:inline">Maya Reich</span>
					<span className="lg:hidden border-b-3 border-sky-400 pb-1">MR</span>
				</h1>
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
