import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { AROMI_MENUS_JSON_DATA_URL } from "../settings";

import { IRestaurantOutput } from "../interfaces/IRestaurantOutput";

const router: Router = Router();

function handleRestaurantData(restaurant): IRestaurantOutput {
  const data: IRestaurantOutput = {
    id: 1,
    name: "Foo",
    location: {
      lat: 60,
      lng: 22,
    },
  };

  return data;
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

      data.forEach((restaurant) => {
        const newData: IRestaurantOutput = handleRestaurantData(restaurant);

        restaurants.push(newData);
      });

      res.json(restaurants);
    })
    .catch(next);

  /* const data: IRestaurantOutput[] = [
    {
      id: 1,
      name: "Lorem ipsum",
      location: {
        lat: 60.451813,
        lng: 22.266630,
      },
    },
  ];

  res.json(data); */
});

export const RestaurantController: Router = router;
