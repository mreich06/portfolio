import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
	className?: string;
	wrapperClassName?: string;
};

export const fadeUp = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
	viewport: { once: true, amount: 0.2 },
};

const FadeUpAnimation = ({ children, className, wrapperClassName }: Props) => {
	return (
		<div className={['overflow-hidden', wrapperClassName].filter(Boolean).join(' ')}>
			<motion.div
				className={className}
				initial={fadeUp.initial}
				whileInView={fadeUp.animate}
				transition={fadeUp.transition as any}
				viewport={fadeUp.viewport}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default FadeUpAnimation;
