import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
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
      res.json(data);
    })
    .catch(next);
});

export const MenuController: Router = router;
