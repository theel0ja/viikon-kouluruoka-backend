// Import everything from express and assign it to the express variable
import express from "express";

// Import WelcomeController from controllers entry point
import {WelcomeController} from "./controllers";

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: (string | number) = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use("/restaurants", WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:${port}/`);
});
