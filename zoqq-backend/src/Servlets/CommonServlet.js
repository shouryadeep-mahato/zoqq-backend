// Common Routes
import express from "express";
import * as functions from "../Controllers/UtilityController.js";

const router = express.Router();

router.get("/listCountryCode", functions.listCountryCode);
router.get("/listCountry", functions.listCountry);
router.get("/listNationality", functions.listNationality);

router.get("/fetchenumvalues", functions.FetchEnumValues);

export default router;
