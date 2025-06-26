import express from 'express';
import cors from 'cors';
import contactRoute from './routes/contact';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
