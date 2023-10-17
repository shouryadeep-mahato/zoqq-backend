// Common Routes
import express from "express";
import * as functions from "../Controllers/OnboardingController.js";
import multer from "multer";

// Define the storage for uploaded files (in-memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/getBusinessList", functions.getBusinessList);
router.get("/getBusinessDetails", functions.getBusinessDetails);

//General Details
router.get("/getBusinessIncorporationDetails", functions.getBusinessIncorporationDetails);
router.get("/postBusinessIncorporationDetails", functions.postBusinessIncorporationDetails);
router.get("/postRegisteredAddressDetails", functions.postRegisteredAddressDetails);
router.get("/postBusinessAddressDetails", functions.postBusinessAddressDetails);
router.get("/patchBusinessIncorporationDetails", functions.patchBusinessIncorporationDetails);
router.get("/patchRegisteredAddressDetails", functions.patchRegisteredAddressDetails);
router.get("/patchBusinessAddressDetails", functions.patchBusinessAddressDetails);

//Business Details
router.get("/getAdditionalBusinessDetails", functions.getAdditionalBusinessDetails);
router.get("/postLegalDetails", functions.postLegalDetails);
router.get("/postWebsiteDetails", functions.postWebsiteDetails);
router.get("/postTaxDetails", functions.postTaxDetails);
router.get("/postRegulatoryDetails", functions.postRegulatoryDetails);
router.get("/postRiskAssessmentInfo", functions.postRiskAssessmentInfo);
router.get("/patchLegalDetails", functions.patchLegalDetails);
router.get("/patchWebsiteDetails", functions.patchWebsiteDetails);
router.get("/patchTaxDetails", functions.patchTaxDetails);
router.get("/patchRegulatoryDetails", functions.patchRegulatoryDetails);
router.get("/patchRiskAssessmentInfo", functions.patchRiskAssessmentInfo);

//Applicant Details
router.get("/GetApplicantBusinessDetails", functions.GetApplicantBusinessDetails);
router.get("/postApplicantKYCDetails", functions.postApplicantKYCDetails);
router.get("/postApplicantProfessionalDetails", functions.postApplicantProfessionalDetails);
router.get("/postApplicantAddressDetails", functions.postApplicantAddressDetails);
router.get("/postApplicantContactDetails", functions.postApplicantContactDetails);
router.get("/patchApplicantKYCDetails", functions.patchApplicantKYCDetails);
router.get("/patchApplicantProfessionalDetails", functions.patchApplicantProfessionalDetails);
router.get("/patchApplicantAddressDetails", functions.patchApplicantAddressDetails);
router.get("/patchApplicantContactDetails", functions.patchApplicantContactDetails);

//Stakeholder Details
router.get("/GetStakeholderDetails", functions.GetStakeholderDetails);
router.get("/PostStakeholderDetails", functions.PostStakeholderDetails);
router.get("/PostStakeholderContactDetails", functions.PostStakeholderContactDetails);
router.get("/PostStakeholderProfessionalDetails", functions.PostStakeholderProfessionalDetails);
router.get("/PostStakeholderAddressDetails", functions.PostStakeholderAddressDetails);
router.get("/PostBusinessPartnerDetails", functions.PostBusinessPartnerDetails);
router.get("/PostBusinessPartnerAddressDetails", functions.PostBusinessPartnerAddressDetails);

router.get("/PatchStakeholderDetails", functions.PatchStakeholderDetails);
router.get("/PatchStakeholderContactDetails", functions.PatchStakeholderContactDetails);
router.get("/PatchStakeholderProfessionalDetails", functions.PatchStakeholderProfessionalDetails);
router.get("/PatchStakeholderAddressDetails", functions.PatchStakeholderAddressDetails);
router.get("/PatchBusinessPartnerDetails", functions.PatchBusinessPartnerDetails);
router.get("/PatchBusinessPartnerAddressDetails", functions.PatchBusinessPartnerAddressDetails);

//Business KYB Details
router.get("/GetBusinessKYBDetails", functions.GetBusinessKYBDetails);
router.get("/GetApplicantKYBDetails", functions.GetApplicantKYBDetails);
router.get("/GetStakeholderKYBDetails", functions.GetStakeholderKYBDetails);
router.post("/PostBusinessKYBDetails", upload.single("businessDocumentFile"), functions.PostBusinessKYBDetails);
router.post("/ApplicantKYBDetails", upload.single("applicantDocumentFile"), functions.PostApplicantKYBDetails);
router.post(
  "/PostStakeholderKYBDetails",
  upload.single("StakeholderDocumentFile"),
  functions.PostStakeholderKYBDetails
);
router.post("/PatchBusinessKYBDetails", upload.single("businessDocumentFile"), functions.PatchBusinessKYBDetails);
router.post("/PatchApplicantKYBDetails", upload.single("applicantDocumentFile"), functions.PatchApplicantKYBDetails);

//Submit to NIUM
router.get("/OnboardEKYCUser", functions.OnboardEKYCUser);
router.post("/OnboardEKYCUserTemporary", functions.OnboardEKYCUserTemporary);
router.get("/OnboardMKYCUser", functions.OnboardMKYCUser);

export default router;
