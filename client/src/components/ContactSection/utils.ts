export const handleSubmit = async (formData: {
	name: string;
	email: string;
	title: string;
	message: string;
}): Promise<boolean> => {
	try {
		const res = await fetch('http://localhost:5000/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			alert('Message sent successfully');
			return true;
		} else {
			alert('Failed to send message.');
			return false;
		}
	} catch (err) {
		console.error('Error:', err);
		alert('Something went wrong.');
		return false;
	}
};
