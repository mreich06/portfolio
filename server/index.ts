import { Resend } from 'resend';
import express from 'express';
import cors from 'cors';
import contactRoute from './routes/contact';

const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'OPTIONS'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	}),
);
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.use('/api', contactRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
