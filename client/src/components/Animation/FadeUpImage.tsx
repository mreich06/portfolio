import { motion, HTMLMotionProps, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeUp } from './FadeUpAnimation';

type Props = Omit<HTMLMotionProps<'img'>, 'onDrag'> & { duration?: number };

// In order to prevent image popping in, we animate when image has been loaded
const FadeUpImage = ({ duration, ...rest }: Props) => {
	const ref = useRef<HTMLImageElement | null>(null);
	const controls = useAnimation();
	const inView = useInView(ref, fadeUp.viewport);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const img = ref.current;
		if (!img) return;
		if ('decode' in img) {
			(img as HTMLImageElement)
				.decode()
				.catch(() => {})
				.finally(() => setReady(true));
		} else {
			if ((img as HTMLImageElement).complete) setReady(true);
		}
	}, []);

	useEffect(() => {
		if (inView && ready) controls.start(fadeUp.animate);
	}, [inView, ready, controls]);

	return (
		<motion.img
			ref={ref}
			initial={fadeUp.initial}
			animate={controls}
			transition={{ ...fadeUp.transition, ...(duration ? { duration } : {}) } as any}
			decoding="async"
			{...({ fetchPriority: 'high' } as unknown as HTMLMotionProps<'img'>)}
			{...rest}
		/>
	);
};

export default FadeUpImage;
