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

app.use('/api', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
