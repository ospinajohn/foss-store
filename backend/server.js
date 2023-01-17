import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({ path: 'backend/config/config.env' });

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT} in ${NODE_ENV} mode`);
});
