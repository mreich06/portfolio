import { useState } from 'react';
import { handleSubmit } from './utils';
import React from 'react';

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		title: '',
	});
	const { name, email, message, title } = formData;

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const success = await handleSubmit(formData);
		if (success) {
			setFormData({ name: '', email: '', message: '', title: '' }); // clear form
		}
	};

	return (
		<section id="contact" className="section-spacing w-full max-w-[1300px] mx-auto">
			<h2 className="pt-10 section-text text-center">Let's work together!</h2>
			<p className="text-center description-highlight section-header-spacing">
				Feel free to reach out with any questions or opportunities
			</p>

			<form className="grid md:grid-cols-5 gap-3 md:gap-6" onSubmit={onSubmit}>
				<div className="md:col-span-2 flex flex-col space-y-3 md:space-y-6">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="input"
						value={name}
						onChange={onChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="input"
						value={email}
						onChange={onChange}
					/>
					<input
						type="text"
						name="title"
						placeholder="Message Title"
						className="input"
						value={title}
						onChange={onChange}
					/>
				</div>

				<div className="md:col-span-3 flex flex-col">
					<textarea
						name="message"
						placeholder="Message"
						className="text-sm md:text-base w-full p-3 h-full min-h-[180px] md:min-h-[280px] rounded-md bg-white/5 border border-white/10 text-white"
						value={message}
						onChange={onChange}
					/>
					<div className="flex justify-end mt-4">
						<button
							type="submit"
							className="px-6 py-1 md:py-2 border border-white/20 text-white rounded-md hover:bg-white/10 transition"
						>
							Send
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default ContactSection;
