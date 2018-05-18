// Import everything from express and assign it to the express variable
import express from "express";

// Import RestaurantController from controllers entry point
import { RestaurantController } from "./controllers";

// Create a new express application instance
const app: express.Application = express();
app.disable("x-powered-by");

// The port the express app will listen on
const port: (string | number) = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use("/restaurants", RestaurantController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:${port}/`);
});
