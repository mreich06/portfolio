import { Resend } from 'resend';

export const onRequestPost: PagesFunction = async (context) => {
	const { request, env } = context;

	try {
		const body = await request.json();
		const { name, email, message } = body;

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'All fields are required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const resend = new Resend(env.RESEND_API_KEY);

		await resend.emails.send({
			from: 'Maya Reich <maya@mayareich.dev>',
			to: [env.EMAIL_TO],
			subject: `Portfolio Contact Form Message from ${name}`,
			html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
		});

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		console.error('Error sending email:', err);
		return new Response(JSON.stringify({ error: 'Failed to send message' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
