import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { IAromiMenu } from "../interfaces/IAromiMenu";
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
    .then((data: IAromiMenu) => {
      const days: IMenuOutput["days"] = [];

      data.Days.forEach((oldData) => {
        const meals: IMenuOutput["days"][0]["meals"] = [];

        oldData.Meals.forEach((oldMealData) => {
          const newMealData = {
            type: oldMealData.MealType,
            description: oldMealData.Name,
          };

          meals.push(newMealData);
        });

        const newData: IMenuOutput["days"][0] = {
          dateAsText: `${oldData.WeekDay} ${oldData.DateStr}`,
          meals,
        };
        days.push(newData);
      });

      const menu: IMenuOutput = {
        id,
        selectedTab: data.Selected,
        name: data.Name,
        startDate: data.Start, // FIXME: Convert
        endDate: data.End, // FIXME: Convert
        days,
      };

      res.jsonp(menu);
    })
    .catch(next);
});

export const MenuController: Router = router;
