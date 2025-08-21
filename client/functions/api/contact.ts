export const onRequestPost = async ({ request, env }) => {
	try {
		const { name, email, message } = (await request.json()) as {
			name?: string;
			email?: string;
			message?: string;
		};

		if (!name || !email || !message) {
			return json({ error: 'All fields are required' }, 400);
		}

		const html = `
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Message:</strong><br>${esc(message).replace(/\n/g, '<br>')}</p>
    `;

		const r = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: 'Maya Reich <maya@mayareich.dev>',
				to: [env.EMAIL_TO],
				subject: `Portfolio Contact Form Message from ${name}`,
				html,
			}),
		});

		if (!r.ok) {
			const body = await r.text();
			console.error('Resend error:', r.status, body);
			return json({ error: 'Failed to send message' }, 500);
		}

		return json({ success: true }, 200);
	} catch (err) {
		console.error('Handler error:', err);
		return json({ error: 'Invalid request' }, 400);
	}
};

function esc(s: string) {
	return s.replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
	);
}

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}
