import express, { Request, Response } from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/contact', async (req: Request, res: Response): Promise<void> => {
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		res.status(400).json({ error: 'All fields are required' });
		return;
	}

	try {
		await resend.emails.send({
			from: 'Your Name <your@yourdomain.com>',
			to: [process.env.EMAIL_TO!],
			subject: `Portfolio Contact Form Message from ${name}`,
			html: `<p><strong>Name:</strong> ${name}</p>
			       <p><strong>Email:</strong> ${email}</p>
			       <p><strong>Message:</strong><br>${message}</p>`,
		});

		res.status(200).json({ success: true });
	} catch (err) {
		console.error('Error sending email:', err);
		res.status(500).json({ error: 'Failed to send message' });
	}
});

export default router;
