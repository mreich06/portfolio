// NavBarAnimation.tsx
import { motion, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = { children: React.ReactNode };

export default function NavBarAnimation({ children }: Props) {
	// ensure it animates AFTER first paint (prevents hydration/SSR quirks)
	const [ready, setReady] = useState(false);
	useEffect(() => setReady(true), []);

	return (
		<MotionConfig reducedMotion="never">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={ready ? { opacity: 1, y: 0 } : {}} // triggers once on refresh
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
			>
				{children}
			</motion.div>
		</MotionConfig>
	);
}
