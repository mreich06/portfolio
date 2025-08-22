import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

const FadeUpAnimation = ({ children }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80, scale: 0.98 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 1.6,
				ease: [0.22, 1, 0.36, 1], // cubic-bezier easing
			}}
			viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
		>
			{children}
		</motion.div>
	);
};

export default FadeUpAnimation;
