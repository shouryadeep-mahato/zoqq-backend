import axios from "axios";
import * as Constants from "../Modules/Constant.js";
import crypto from "crypto";

//Signup
//Login
export const getLoginStatus = async (req, res) => {
  const { email, password } = req.query;
  try {
    const url = Constants.base_url_cognito + "signIn";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      username: email,
      password: password,
      clientId: Constants.cognito_client_id,
      phoneNumber: "",
      userPoolId: Constants.cognito_pool_id,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//Signup
export const signup = async (req, res) => {
  const { email, password, phoneNumber, countrycode } = req.query;
  try {
    const url = Constants.base_url_cognito + "signUp";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      email: email,
      password: password,
      clientId: Constants.cognito_client_id,
      phoneNumber: "+" + countrycode + phoneNumber,
      userPoolId: Constants.cognito_pool_id,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//Confirm Signup
export const confirmSignup = async (req, res) => {
  const { email, code } = req.query;
  try {
    const url = Constants.base_url_cognito + "confirmSignUp";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      email: email,
      emailOTP: code,
      clientId: Constants.cognito_client_id,
      userPoolId: Constants.cognito_pool_id,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//Resend Confirmation
export const resendConfirmation = async (req, res) => {
  const { email } = req.query;
  try {
    const url = Constants.base_url_cognito + "resendConfirmationCode";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      email: email,
      clientId: Constants.cognito_client_id,
      userPoolId: Constants.cognito_pool_id,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//GET User Status
export const GetUserStatus = async (req, res) => {
  const { email } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/UserStatusDetails";
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-email-id": email,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//GET User Status
export const GetCognitoUserInfo = async (req, res) => {
  const { email } = req.query;
  try {
    const url = Constants.base_url_cognito + "getUserInfo";
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      clientId: Constants.cognito_client_id,
      userPoolId: Constants.cognito_pool_id,
      email: email,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const UpdateCognitoAttributes = async (req, res) => {
  const { email, personName, businessName, countryCode, countryName, phoneNumber } = req.query;
  try {
    const url = Constants.base_url_cognito + "adminUpdateUserAttributes";
    const headers = {
      "Content-Type": "application/json",
    };

    const customAttr = {
      "custom:businessName": businessName,
      "custom:contactName": personName,
      "custom:isd_code": countryCode,
      phone_number: "+" + phoneNumber,
      "custom:countryName": countryName,
    };

    const requestBody = {
      clientId: Constants.cognito_client_id,
      userPoolId: Constants.cognito_pool_id,
      email: email,
      customAttributes: customAttr,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Get user persona and features details
export const UserPersonaDetails = async (req, res) => {
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/userPersonaDetails";
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": "Zv1Gdbt6b34zMvxQfKZKu1BEtffyw48y5p0hmUnK",
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const UserPersonaFeatures = async (req, res) => {
  const { userPersona } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/userPersonaFeatures";
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": "Zv1Gdbt6b34zMvxQfKZKu1BEtffyw48y5p0hmUnK",
      "x-profession-id": userPersona,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//GET User Status
export const GetUserOnboardingStatus = async (req, res) => {
  const { brn } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/OnboardingDetails";
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": brn,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};
