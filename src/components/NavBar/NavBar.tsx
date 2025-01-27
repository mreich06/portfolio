import { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-black text-white w-full">
			<DesktopNav />
			<MobileNav isOpen={isOpen} onClose={handleToggle} />
		</nav>
	);
};

export default NavBar;
