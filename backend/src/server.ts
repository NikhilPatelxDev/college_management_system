import app from "./app.js";
import { connectDb } from "./config/db.js";
import { env } from "./config/env.js";

const PORT = env.PORT;

const startServer = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Server starting error: ${error.message}`);
  }
};

startServer();
