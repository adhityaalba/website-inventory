import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

var app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8000, () => console.log('server berjalan ..'));
