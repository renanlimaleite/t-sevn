import express from 'express';
import ErrorHandler from './middlewares/errorHandler';
import router from './routes';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(router);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
