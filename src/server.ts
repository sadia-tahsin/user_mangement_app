import { app } from "./app";
import config from "./config";
import mongoose from "mongoose";

const port = config.port;
async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    app.get("/", (req, res) => {
      res.send("app is running");
    });
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
