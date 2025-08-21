import toast from 'react-hot-toast';

export const handleSubmit = async (formData: {
	name: string;
	email: string;
	title: string;
	message: string;
}): Promise<boolean> => {
	try {
		const base = import.meta.env.DEV
			? 'http://localhost:5050'
			: import.meta.env.VITE_API_BASE;

		const res = await fetch(`${base}/api/contact`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			toast.success('Message sent successfully. I will be in touch soon!');
			return true;
		} else {
			toast.error('Failed to send message. Please try again.');
			return false;
		}
	} catch (err) {
		console.error('Error:', err);
		toast.error('Something went wrong.');
		return false;
	}
};
