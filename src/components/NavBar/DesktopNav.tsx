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
				className="flex items-center space-x-1 group cursor-pointer"
			>
				<span className="text-sky-400 font-mono text-xl">{number}</span>
				<span className="text-white group-hover:text-sky-400 text-xl">{label}</span>
			</Link>
		</li>
	);
};

const DesktopNav = (): JSX.Element => {
	return (
		<div className="hidden md:block">
			<div className="mx-auto flex items-center justify-between p-7">
				<div className="text-4xl cursor-pointer">
					<h1>Maya Reich</h1>
				</div>
				<ul className="flex space-x-8">
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
