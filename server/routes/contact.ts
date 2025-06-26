import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/contact', async (req: Request, res: Response): Promise<void> => {
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		res.status(400).json({ error: 'All fields are required' });
		return;
	}

	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_TO,
			subject: `Portfolio Contact Form Message from ${name}`,
			text: message,
		});

		res.status(200).json({ success: true });
	} catch (err) {
		console.error('Error sending email:', err);
		res.status(500).json({ error: 'Failed to send message' });
	}
});

export default router;
