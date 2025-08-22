import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
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

const NavBarSection = ({ number, label, id, onClick }: NavBarSectionProps) => (
	<motion.li variants={itemVariants} className="flex space-x-2 items-center">
		<Link
			to={id}
			smooth={true}
			duration={500}
			offset={-80}
			onClick={onClick}
			className="flex space-x-2 items-center cursor-pointer"
		>
			<span className="text-sky-400 font-monomaniac text-lg">{number}</span>
			<span className="font-inter text-white text-lg">{label}</span>
		</Link>
	</motion.li>
);

const MobileNav = ({ onClose, isOpen }: MobileNavProps): JSX.Element => {
	return (
		<>
			{/* toggle button */}
			{!isOpen ? (
				<button
					className="md:hidden fixed top-4 right-4 z-[70]"
					onClick={onClose}
					aria-label="Open mobile menu"
				>
					<HamburgerIcon size={40} color="#38bdf8" />
				</button>
			) : (
				<button
					className="md:hidden fixed top-4 right-4 z-[90]"
					onClick={onClose}
					aria-label="Close mobile menu"
				>
					<CloseIcon size={30} color="#38bdf8" />
				</button>
			)}

			<AnimatePresence>
				{isOpen && (
					<>
						{/* dim overlay in bg */}
						<motion.div
							className="fixed inset-0 z-50 bg-black/40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							onClick={onClose}
						/>

						<motion.div
							className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-b from-[#0c101c] to-[#1c2028] h-[350px]"
							initial={{ y: '-100%' }}
							animate={{ y: 0 }}
							exit={{ y: '-100%' }}
							transition={{ type: 'spring', stiffness: 140, damping: 25 }}
						>
							<motion.ul
								className="flex flex-col items-center justify-center h-full space-y-6 text-2xl"
								initial="hidden"
								animate="visible"
								exit="hidden"
								variants={listVariants}
							>
								{NavItems.map((item) => (
									<NavBarSection key={item.id} {...item} onClick={onClose} />
								))}
							</motion.ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNav;

// animation for items in Mobile navbar
const listVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 10, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};
