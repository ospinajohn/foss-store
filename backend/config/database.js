import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false); // Para que no me de error al hacer un find con un campo que no existe en la base de datos
		const con = await mongoose.connect(process.env.DB_LOCAL_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
	} catch (error) {
		console.log({
			msg: error,
		});
	}
};

export default connectDatabase;
