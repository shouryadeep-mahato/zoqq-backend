// signup Routes
import express from "express";
import * as functions from "../Controllers/SignupController.js";

const router = express.Router();

router.get("/login", functions.getLoginStatus);
router.get("/signup", functions.signup);
router.get("/confirmSignup", functions.confirmSignup);
router.get("/resendConfirmation", functions.resendConfirmation);
router.get("/getuserstatus", functions.GetUserStatus);
router.get("/getcognitouserinfo", functions.GetCognitoUserInfo);
router.get("/updatecognitoattributes", functions.UpdateCognitoAttributes);
router.get("/getuseronboardingstatus", functions.GetUserOnboardingStatus);

//Get Feature and User Persona Details
router.get("/userpersonadetails", functions.UserPersonaDetails);
router.get("/userpersonafeatures", functions.UserPersonaFeatures);

export default router;
