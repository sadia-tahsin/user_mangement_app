import { app } from "./app";
import config from "./config";

// getting-started.js
const mongoose = require('mongoose');
const port = config.port;
async function main() {
    try {
      await mongoose.connect(config.DB_URL as string);
  
      app.listen(port, () => {
        console.log(`app is listening on port ${port}`);
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  main();