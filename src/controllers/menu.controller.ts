import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { AROMI_JSON_DATA_URL } from "../settings";

const router: Router = Router();

/**
 * Information about a menu.
 */
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  /**
   * Download data from Aromi API and handle it.
   */
  /* axios.get(AROMI_JSON_DATA_URL)
    .then((response) => response.data.Categories)
    .then((data) => {
      const categories: ICategoryOutput[] = [];

      data.forEach((category: IAromiCategory) => {
        const newData: ICategoryOutput = handleData(category);

        categories.push(newData);
      });

      res.json(categories);
    })
    .catch(next); */

  res.json({id: req.params.id});
});

export const MenuController: Router = router;
