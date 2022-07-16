import { Router } from "express";

import { makeLoadLastRankkingController } from "../factories";
import { adaptRoute } from "./../adapters";

const router = (router: Router): void => {
  router.get("/rankings/last", adaptRoute(makeLoadLastRankkingController()));
};
export default router;
