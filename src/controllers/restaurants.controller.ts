import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { AROMI_MENUS_JSON_DATA_URL } from "../settings";

import { IAromiRestaurant } from "../interfaces/IAromiRestaurant";
import { IRestaurantOutput } from "../interfaces/IRestaurantOutput";

const router: Router = Router();

function handleRestaurantData(data: IAromiRestaurant): IRestaurantOutput {
  const restaurant: IRestaurantOutput = {
    id: 1,
    name: data.Name,
    /* location: {
      lat: 60,
      lng: 22,
    }, */
  };

  return restaurant;
}

/**
 * List all restaurants.
 */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  /**
   * Download data from Aromi API and handle it.
   */
  axios.get(AROMI_MENUS_JSON_DATA_URL)
    .then((response) => response.data.Restaurants)
    .then((data) => {
      const restaurants: IRestaurantOutput[] = [];

      data.forEach((restaurant: IAromiRestaurant) => {
        const newData: IRestaurantOutput = handleRestaurantData(restaurant);

        restaurants.push(newData);
      });

      res.json(restaurants);
    })
    .catch(next);
});

export const RestaurantController: Router = router;
