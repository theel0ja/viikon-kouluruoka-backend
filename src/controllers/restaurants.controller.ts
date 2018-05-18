import { Request, Response, Router } from "express";
import { IRestaurantOutput } from "../interfaces/IRestaurantOutput";

const router: Router = Router();

/**
 * List all restaurants.
 */
router.get("/", (req: Request, res: Response) => {
  const data: IRestaurantOutput[] = [
    {
      id: 1,
      name: "Lorem ipsum",
      location: {
        lat: 60.451813,
        lng: 22.266630,
      },
    },
  ];

  res.json(data);
});

export const RestaurantController: Router = router;
