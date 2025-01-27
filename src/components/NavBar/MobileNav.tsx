import CloseIcon from '../../assets/svgComponents/CloseIcon';
import HamburgerIcon from '../../assets/svgComponents/HamburgerIcon';
import { NavLinkProps, NavItems } from './utils';

interface MobileNavProps {
	onClose: () => void;
	isOpen: boolean;
}

const NavBarSection = ({ number, label }: NavLinkProps): JSX.Element => {
	return (
		<li className="flex space-x-1">
			<span className="text-green-400 font-inter">{number}</span>
			<span className="font-inter">{label}</span>
		</li>
	);
};
const MobileNav = ({ onClose, isOpen }: MobileNavProps): JSX.Element => {
	return (
		<>
			{!isOpen ? (
				<div className="md:hidden flex flex-col justify-center items-center fixed top-0 left-0 w-full h-[300px] z-50">
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-green-400 text-3xl"
						aria-label="Close mobile menu"
					>
						<CloseIcon size={30} color={'#2EEBAA'} />
					</button>
					<ul className="space-y-6 text-2xl text-white">
						{NavItems.map((item) => (
							<NavBarSection number={item.number} label={item.label} />
						))}
					</ul>
				</div>
			) : (
				<button
					className="md:hidden flex fixed top-4 right-4 z-50"
					onClick={onClose}
					aria-label="Open mobile menu"
				>
					<HamburgerIcon size={40} color={'#2EEBAA'} />
				</button>
			)}
		</>
	);
};

export default MobileNav;
