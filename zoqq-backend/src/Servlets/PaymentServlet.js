import express from "express";
import * as functions from "../Controllers/PaymentController.js";

const router = express.Router();

router.post("/addBeneficeries/:customerHashId", functions.addBeneficiry);
router.get("/listBeneficiries/:customerHashId", functions.listBeneficiries);
router.get(
  "/fetchBeneficiryDetails/:beneficiaryHashId",
  functions.fetchDetails
);
router.get("/deleteBeneficiry/:beneficiaryHashId", functions.deleteBeneficiary);
router.get("/listCountry", functions.listCountry);
router.get("/listCurrency/:customerHashId", functions.listCurrency);
router.post("/sendMoney/:customerHashId", functions.sendMoney);
router.get("/fetchSupportedCorridors", functions.fetchCorridors);
export default router;
