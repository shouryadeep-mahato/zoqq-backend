// Common Routes
import express from "express";

import * as functions from "../Controllers/ExpenseController.js";

//List Country Code



const router = express.Router();

router.get("/listbills", functions.listbills);
router.get("/listinvoices", functions.listinvoices);
router.get("/docanalysis", functions.docanalysis);
router.get("/createbill", functions.Createbill);
router.post("/uploadtos3", functions.Uploadtos3);
router.get("/createinvoice", functions.Createinvoice);
router.post("/createinvoicedoc", functions.Createinvoicedoc);
router.get("/listcustomers", functions.listcustomer);
router.get("/createcustomer", functions.Createcustomer);

export default router;
