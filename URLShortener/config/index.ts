import * as dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT! || 3000,
  db: {
    dbName: process.env.DB_NAME!,
    uri: process.env.MONGODB_URI!
  }
}

export default config;