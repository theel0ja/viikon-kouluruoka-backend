// Import everything from express and assign it to the express variable
import dotenv from "dotenv";
import express from "express";
import sslRedirect from "heroku-ssl-redirect";
import lusca from "lusca";
import Raven from "raven";

dotenv.config();

// Import RestaurantController from controllers entry point
import { CategoryController, MenuController, RestaurantController } from "./controllers";

if (process.env.NODE_ENV === "production") {
  Raven.config("https://fd3c65ae8bde436ca0b32183a6099b44@sentry.io/1209758").install();
}

// Create a new express application instance
const app: express.Application = express();
app.use(sslRedirect(["production"], 301)); // Heroku
app.use(lusca.nosniff());

app.use(lusca.hsts({maxAge: 31536000, includeSubDomains: false, preload: false}));

// The port the express app will listen on
const port: (string | number) = process.env.PORT || 3000;

// Mount the RestaurantController at the /restaurants route
app.use("/restaurants", RestaurantController);
app.use("/categories", CategoryController);
app.use("/menus", MenuController);

export default app;
