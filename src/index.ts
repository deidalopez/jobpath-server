import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './models/db';
import router from './router';

dotenv.config();

const app = express();

const { PORT } = process.env;

const corsConfig= {
  origin: process.env.CORS_ORIGIN,
  credentials: true
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

(async () => {
  try {
    await sequelize.sync();
    console.log('DB Connected!');
  } catch (err) {
    console.log('Error here!')
    console.error(err);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;