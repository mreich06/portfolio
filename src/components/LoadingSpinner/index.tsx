import { motion } from 'framer-motion';

const LoadingSpinner = () => {
	return (
		<motion.div
			className="spinner"
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
			style={{
				width: '30px',
				height: '30px',
				border: '4px solid #ccc',
				borderTop: '4px solid #000',
				borderRadius: '50%',
				margin: 'auto',
			}}
		/>
	);
};

export default LoadingSpinner;
