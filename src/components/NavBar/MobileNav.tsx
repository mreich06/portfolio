import { Link } from 'react-scroll';
import CloseIcon from '../../assets/svgComponents/CloseIcon';
import HamburgerIcon from '../../assets/svgComponents/HamburgerIcon';
import { NavItems, NavLinkProps } from '../NavBar/utils';

interface MobileNavProps {
	onClose: () => void;
	isOpen: boolean;
}

interface NavBarSectionProps extends NavLinkProps {
	onClick: () => void;
}

const NavBarSection = ({
	number,
	label,
	id,
	onClick,
}: NavBarSectionProps): JSX.Element => {
	return (
		<li className="flex space-x-1">
			<Link
				to={id}
				spy={true}
				smooth={true}
				offset={-60}
				duration={500}
				onClick={onClick}
				className="flex space-x-2 items-center cursor-pointer"
			>
				<span className="text-sky-400 font-monomaniac">{number}</span>
				<span className="font-inter">{label}</span>
			</Link>
		</li>
	);
};

const MobileNav = ({ onClose, isOpen }: MobileNavProps): JSX.Element => {
	return (
		<>
			{isOpen ? (
				<div
					className="md:hidden flex flex-col justify-center items-center fixed top-0 left-0 w-full h-[350px] z-50 bg-gradient-to-b from-[#0a0f1c] to-[#1b1f2a]
"
				>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-3xl"
						aria-label="Close mobile menu"
					>
						<CloseIcon size={30} color={'#38bdf8'} />
					</button>
					<ul className="space-y-6 text-2xl mt-4">
						{NavItems.map((item) => (
							<NavBarSection
								key={item.label}
								number={item.number}
								label={item.label}
								id={item.id}
								onClick={onClose}
							/>
						))}
					</ul>
				</div>
			) : (
				<button
					className="md:hidden flex fixed top-4 right-4 z-50"
					onClick={onClose}
					aria-label="Open mobile menu"
				>
					<HamburgerIcon size={40} color={'#38bdf8'} />
				</button>
			)}
		</>
	);
};

export default MobileNav;
