import mongoose from "mongoose";
// Get your connection string from .env.local


const MONGODB_CONN_STR = process.env.REACT_APP_DB_connection;

const databaseMiddleware = async (req, res, next) => {
  try {
     await mongoose.connect(MONGODB_CONN_STR, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      }, ()=> {
        console.log('DB Connected');
      });

  } catch (ex) {
    console.error(ex);
  }

  // You could extend the NextRequest interface
  // with the mongoose instance as well if you wish.
  // req.mongoose = global.mongoose;

  return next();
};

export default databaseMiddleware;
