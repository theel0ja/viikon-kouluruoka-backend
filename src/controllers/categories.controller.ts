import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { AROMI_JSON_DATA_URL } from "../settings";

import { IAromiCategory } from "../interfaces/IAromiCategory";
import { ICategoryOutput } from "../interfaces/ICategoryOutput";

const router: Router = Router();

function handleData(data: IAromiCategory): ICategoryOutput {
  const category: ICategoryOutput = {
    id: data.CategoryId,
    name: data.Name,
  };

  return category;
}

/**
 * List all categories.
 */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  /**
   * Download data from Aromi API and handle it.
   */
  axios.get(AROMI_JSON_DATA_URL)
    .then((response) => response.data.Categories)
    .then((data) => {
      const categories: ICategoryOutput[] = [];

      data.forEach((category: IAromiCategory) => {
        const newData: ICategoryOutput = handleData(category);

        categories.push(newData);
      });

      res.json(categories);
    })
    .catch(next);
});

export const CategoryController: Router = router;
