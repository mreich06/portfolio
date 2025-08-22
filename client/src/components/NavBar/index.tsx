import { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import NavBarAnimation from '../Animation/NavBarAnimation';

const NavBar = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="text-white w-full">
			<NavBarAnimation>
				<DesktopNav />
			</NavBarAnimation>
			<MobileNav isOpen={isOpen} onClose={handleToggle} />
		</nav>
	);
};

export default NavBar;
