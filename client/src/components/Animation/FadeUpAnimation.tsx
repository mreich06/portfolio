import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

const FadeUpAnimation = ({ children }: Props) => {
	// overflow hidden to fix double scroll bar issue
	return (
		<div style={{ overflow: 'hidden' }}>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.2 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default FadeUpAnimation;
