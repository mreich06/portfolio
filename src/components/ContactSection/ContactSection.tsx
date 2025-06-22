const ContactSection = () => {
	return (
		<section
			id="contact"
			className="py-20 px-4 md:px-12 lg:px-24 w-full max-w-[1300px] mx-auto "
		>
			<h2 className="text-3xl font-bold text-center text-white mb-2">
				Let's work together!
			</h2>
			<p className="text-center description-highlight mb-10">
				Feel free to reach out with any questions or opportunities
			</p>

			<form className="grid md:grid-cols-5 gap-6">
				<div className="md:col-span-2 flex flex-col space-y-6">
					<input
						type="text"
						placeholder="Name"
						className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white"
					/>
					<input
						type="text"
						placeholder="Message Title"
						className="w-full p-4 rounded-md bg-white/5 border border-white/10 text-white"
					/>
				</div>

				<div className="md:col-span-3 flex flex-col">
					<textarea
						placeholder="Message"
						className="w-full p-3 h-full min-h-[280px] rounded-md bg-white/5 border border-white/10 text-white"
					/>
					<div className="flex justify-end mt-4">
						<button
							type="submit"
							className="px-6 py-2 border border-white/20 text-white rounded-md hover:bg-white/10 transition"
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
