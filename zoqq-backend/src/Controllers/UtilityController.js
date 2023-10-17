import axios from "axios";
import * as Constants from "../Modules/Constant.js";
import crypto from "crypto";

//List Country Code
export const listCountryCode = async (req, res) => {
  try {
    const url = Constants.baseurl_v2 + "/internal/v1/getmobilecountrylist";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      //programCode: xProgramId_zoqq,
      programCode: "SMMAAS0",
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//List Country Code
export const listCountry = async (req, res) => {
  try {
    const url = Constants.baseurl_v2 + "/internal/v1/getcountrylist";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      //programCode: xProgramId_zoqq,
      programCode: "SMMAAS0",
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//List Nationality
export const listNationality = async (req, res) => {
  try {
    const url = Constants.baseurl_v2 + "/internal/v1/getnationalitylist";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2,
    };

    const requestBody = {
      //programCode: xProgramId_zoqq,
      programCode: "SMMAAS0",
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//Fetch Enum Values - NIUM
export const FetchEnumValues = async (req, res) => {
  const { category } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/EnumDetails";
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
    };

    const requestBody = {
      category: category,
      region: "SG",
      type: "CORPORATE",
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
