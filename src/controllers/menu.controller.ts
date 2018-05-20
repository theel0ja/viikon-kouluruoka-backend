import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { IMenuOutput } from "../interfaces/IMenuOutput";
import { AROMI_MENU_URL_PREFIX } from "../settings";

const router: Router = Router();

/**
 * Information about a menu.
 */
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  // Validate req.params.id
  const id = req.params.id;

  /**
   * Download data from Aromi API and handle it.
   */
  axios.get(AROMI_MENU_URL_PREFIX + id)
    .then((response) => response.data)
    .then((data) => {
      const menu: IMenuOutput = {
        name: "Week 21",
        startDate: "startDateAsUnixTimeStamp",
        endDate: "endDateAsUnixTimeStamp",
        days: [
          {
            dateAsText: "Monday 21/05/2018",
            meals: [
              {
                type: "Breakfast",
                description: "Porridge, juice",
              },
              {
                type: "Lunch",
                description: "Fish soup",
              },
            ],
          },
          {
            dateAsText: "Tuesday 22/05/2018",
            meals: [
              {
                type: "Breakfast",
                description: "Porridge, juice",
              },
              {
                type: "Lunch",
                description: "Fish soup",
              },
            ],
          },
        ],
      };

      res.json(menu);
    })
    .catch(next);
});

export const MenuController: Router = router;
