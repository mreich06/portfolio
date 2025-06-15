import React from 'react';

const ContactSection = () => {
	return (
		<section id="contact" className="py-20 px-4">
			<h2 className="text-3xl font-bold text-center text-white mb-4">
				Let's work together!
			</h2>
			<p className="text-center text-sky-400 mb-10">
				Feel free to reach out with any questions or opportunities
			</p>
			<form className="max-w-xl mx-auto space-y-4">
				<input
					type="text"
					placeholder="Name"
					className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white"
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white"
				/>
				<textarea
					placeholder="Message"
					className="w-full p-3 h-40 rounded-md bg-white/5 border border-white/10 text-white"
				/>
				<button
					type="submit"
					className="w-full py-3 bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-md hover:opacity-90 transition"
				>
					Send
				</button>
			</form>
		</section>
	);
};
export default ContactSection;
