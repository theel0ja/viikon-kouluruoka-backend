import { Router, Request, Response } from "express";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  // Reply with a hello world when no name param is provided
  res.json({
    "restaurants": "foo"
  });
});

export const WelcomeController: Router = router;
