// Import everything from express and assign it to the express variable
import express from "express";
import sslRedirect from "heroku-ssl-redirect";
import Raven from "raven";

// Import RestaurantController from controllers entry point
import { CategoryController, MenuController, RestaurantController } from "./controllers";

if (process.env.NODE_ENV === "production") {
  Raven.config("https://fd3c65ae8bde436ca0b32183a6099b44@sentry.io/1209758").install();
}

// Create a new express application instance
const app: express.Application = express();
app.disable("x-powered-by");
app.use(sslRedirect(["production"], 301)); // Heroku

// The port the express app will listen on
const port: (string | number) = process.env.PORT || 3000;

// Mount the RestaurantController at the /restaurants route
app.use("/restaurants", RestaurantController);
app.use("/categories", CategoryController);
app.use("/menus", MenuController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:${port}/`);
});
