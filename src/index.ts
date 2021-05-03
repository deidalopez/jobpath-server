import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './models/db';
import router from './router';

dotenv.config();

const app = express();

const { PORT } = process.env;
app.use(cors());
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
