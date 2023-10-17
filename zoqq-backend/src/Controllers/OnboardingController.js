import axios from "axios";
import * as Constants from "../Modules/Constant.js";
import crypto from "crypto";
import FormData from "form-data";

//Onboarding

/* <-- General Details Starts --> */
//Get Business List API
export const getBusinessList = async (req, res) => {
  const { region, businessRegistrationNumber } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/corporateDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-request-id": crypto.randomUUID(),
      "x-client-name": Constants.xclientId,
      "x-program-id": Constants.xProgramId_zoqq,
    };

    const body = {
      countryCode: region,
      businessRegistrationNumber: businessRegistrationNumber,
    };

    const response = await axios.post(url, body, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Get Business Details API
export const getBusinessDetails = async (req, res) => {
  const { region, businessRegistrationNumber } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/corporateDetailsByBusinessId";

    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-request-id": crypto.randomUUID(),
      "x-client-name": Constants.xclientId,
      "x-program-id": Constants.xProgramId_zoqq,
    };

    const body = {
      countryCode: region,
      searchReferenceId: businessRegistrationNumber,
    };

    const response = await axios.post(url, body, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const getBusinessIncorporationDetails = async (req, res) => {
  const { businessRegistrationNumber } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Post Business Incorporation Details
export const postBusinessIncorporationDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    businessName,
    businessType,
    tradeName,
    settlorName,
    trusteeName,
    email,
    partnerName,
    partnerState,
    partnerCountry,
    associationName,
    associationNumber,
    associationChairPerson,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
      "x-email-id": email,
    };

    const requestBody = {
      emailId: email,
      businessRegistrationNumber: businessRegistrationNumber,
      businessName: businessName,
      tradeName: tradeName,
      businessType: businessType,
      settlorName: settlorName,
      trusteeName: trusteeName,
      partnerName: partnerName,
      partnerState: partnerState,
      partnerCountry: partnerCountry,
      associationName: associationName,
      associationNumber: associationNumber,
      associationChairPerson: associationChairPerson,
    };

    const response = await axios.post(url, requestBody, { headers });
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Patch Business Incorporation Details
export const patchBusinessIncorporationDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    businessName,
    businessType,
    tradeName,
    settlorName,
    trusteeName,
    partnerName,
    partnerState,
    partnerCountry,
    associationName,
    associationNumber,
    associationChairPerson,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      businessName: businessName,
      tradeName: tradeName,
      businessType: businessType,
      settlorName: settlorName,
      trusteeName: trusteeName,
      partnerName: partnerName,
      partnerState: partnerState,
      partnerCountry: partnerCountry,
      associationName: associationName,
      associationNumber: associationNumber,
      associationChairPerson: associationChairPerson,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Post Registered Address Details
export const postRegisteredAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    businessName,
    businessType,
    tradeName,
    settlorName,
    trusteeName,
    email,
    partnerName,
    partnerState,
    partnerCountry,
    associationName,
    associationNumber,
    associationChairPerson,
    registrationAddress_1,
    registrationAddress_2,
    registrationCity,
    registrationState,
    registrationPostCode,
    registrationCountry,
    sameBusinessAddress,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-email-id": email,
    };

    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      email: email,

      //Business Details in body - temporary
      businessName: businessName,
      tradeName: tradeName,
      businessType: businessType,
      settlorName: settlorName,
      trusteeName: trusteeName,
      partnerName: partnerName,
      partnerState: partnerState,
      partnerCountry: partnerCountry,
      associationName: associationName,
      associationNumber: associationNumber,
      associationChairPerson: associationChairPerson,

      registrationAddress_1: registrationAddress_1,
      registrationAddress_2: registrationAddress_2,
      registrationCity: registrationCity,
      registrationState: registrationState,
      registrationPostCode: registrationPostCode,
      registrationCountry: registrationCountry,
      sameBusinessAddress: sameBusinessAddress,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Patch Registered Address Details
export const patchRegisteredAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    registrationAddress_1,
    registrationAddress_2,
    registrationCity,
    registrationState,
    registrationPostCode,
    registrationCountry,
    sameBusinessAddress,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      registrationAddress_1: registrationAddress_1,
      registrationAddress_2: registrationAddress_2,
      registrationCity: registrationCity,
      registrationState: registrationState,
      registrationPostCode: registrationPostCode,
      registrationCountry: registrationCountry,
      sameBusinessAddress: sameBusinessAddress,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Post Business Address Details
export const postBusinessAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    businessName,
    businessType,
    tradeName,
    settlorName,
    trusteeName,
    email,
    partnerName,
    partnerState,
    partnerCountry,
    associationName,
    associationNumber,
    associationChairPerson,
    registrationAddress_1,
    registrationAddress_2,
    registrationCity,
    registrationState,
    registrationPostCode,
    registrationCountry,
    sameBusinessAddress,
    businessAddress_1,
    businessAddress_2,
    businessCity,
    businessState,
    businessPostCode,
    businessCountry,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
      "x-email-id": email,
    };

    const requestBody = {
      emailId: email,
      businessRegistrationNumber: businessRegistrationNumber,
      businessName: businessName,
      tradeName: tradeName,
      businessType: businessType,
      settlorName: settlorName,
      trusteeName: trusteeName,
      partnerName: partnerName,
      partnerState: partnerState,
      partnerCountry: partnerCountry,
      associationName: associationName,
      associationNumber: associationNumber,
      associationChairPerson: associationChairPerson,

      //Address Details in body - temporary
      registrationAddress_1: registrationAddress_1,
      registrationAddress_2: registrationAddress_2,
      registrationCity: registrationCity,
      registrationState: registrationState,
      registrationPostCode: registrationPostCode,
      registrationCountry: registrationCountry,
      sameBusinessAddress: sameBusinessAddress,
      businessAddress_1: businessAddress_1,
      businessAddress_2: businessAddress_2,
      businessCity: businessCity,
      businessState: businessState,
      businessPostCode: businessPostCode,
      businessCountry: businessCountry,
    };

    const response = await axios.post(url, requestBody, { headers });
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Patch Business Address Details
export const patchBusinessAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    businessName,
    businessType,
    tradeName,
    settlorName,
    trusteeName,
    partnerName,
    partnerState,
    partnerCountry,
    associationName,
    associationNumber,
    associationChairPerson,
    registrationAddress_1,
    registrationAddress_2,
    registrationCity,
    registrationState,
    registrationPostCode,
    registrationCountry,
    sameBusinessAddress,
    businessAddress_1,
    businessAddress_2,
    businessCity,
    businessState,
    businessPostCode,
    businessCountry,
  } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    const requestBody = {
      businessName: businessName,
      tradeName: tradeName,
      businessType: businessType,
      settlorName: settlorName,
      trusteeName: trusteeName,
      partnerName: partnerName,
      partnerState: partnerState,
      partnerCountry: partnerCountry,
      associationName: associationName,
      associationNumber: associationNumber,
      associationChairPerson: associationChairPerson,

      //Address Details in body - temporary
      registrationAddress_1: registrationAddress_1,
      registrationAddress_2: registrationAddress_2,
      registrationCity: registrationCity,
      registrationState: registrationState,
      registrationPostCode: registrationPostCode,
      registrationCountry: registrationCountry,
      sameBusinessAddress: sameBusinessAddress,
      businessAddress_1: businessAddress_1,
      businessAddress_2: businessAddress_2,
      businessCity: businessCity,
      businessState: businessState,
      businessPostCode: businessPostCode,
      businessCountry: businessCountry,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

/* <-- General Details Ends --> */

/* <-- Business Details Starts --> */

//Get Additional Business Details
export const getAdditionalBusinessDetails = async (req, res) => {
  const { businessRegistrationNumber } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Legal Details
export const postLegalDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
    };
    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchLegalDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
    };
    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Website Details
export const postWebsiteDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
    website,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
      website: website,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchWebsiteDetails = async (req, res) => {
  const { businessRegistrationNumber, website } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      website: website,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Tax Details
export const postTaxDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
    website,
    taxCountry,
    taxNumber,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
      website: website,
      country: taxCountry,
      taxNumber: taxNumber,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchTaxDetails = async (req, res) => {
  const {
    businessRegistrationNumber,

    taxCountry,
    taxNumber,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      country: taxCountry,
      taxNumber: taxNumber,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Regulatory Details
export const postRegulatoryDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
    website,
    taxCountry,
    taxNumber,
    regulatedTrustType,
    unregulatedTrustType,
    searchId,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
      website: website,
      country: taxCountry,
      taxNumber: taxNumber,
      regulatedTrustType: regulatedTrustType,
      unregulatedTrustType: unregulatedTrustType,
      searchId: searchId,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchRegulatoryDetails = async (req, res) => {
  const { businessRegistrationNumber, regulatedTrustType, unregulatedTrustType, searchId } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      regulatedTrustType: regulatedTrustType,
      unregulatedTrustType: unregulatedTrustType,
      searchId: searchId,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//Risk Assessment Info
export const postRiskAssessmentInfo = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
    website,
    taxCountry,
    taxNumber,
    regulatedTrustType,
    unregulatedTrustType,
    totalEmployees,
    annualTurnover,
    industrySector,
    countryOfOperation,
    travelRestrictedCountry,
    restrictedCountries,
    ofacLicencePresent,
    searchId,
    transactionCountries,
    intendedUseOfAccount,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
      website: website,
      country: taxCountry,
      taxNumber: taxNumber,
      regulatedTrustType: regulatedTrustType,
      unregulatedTrustType: unregulatedTrustType,
      totalEmployees: totalEmployees,
      annualTurnover: annualTurnover,
      industrySector: industrySector,
      countryOfOperation: countryOfOperation,
      travelRestrictedCountry: travelRestrictedCountry,
      restrictedCountry: restrictedCountries,
      ofacLicencePresent: ofacLicencePresent,
      searchId: searchId,
      transactionCountries: transactionCountries,
      intendedUseOfAccount: intendedUseOfAccount,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchRiskAssessmentInfo = async (req, res) => {
  const {
    businessRegistrationNumber,

    registeredCountry,
    registeredDate,
    listedExchange,
    registrationType,
    legislationName,
    legislationType,
    website,
    taxCountry,
    taxNumber,
    regulatedTrustType,
    unregulatedTrustType,
    totalEmployees,
    annualTurnover,
    industrySector,
    countryOfOperation,
    travelRestrictedCountry,
    restrictedCountries,
    ofacLicencePresent,
    searchId,
    transactionCountries,
    intendedUseOfAccount,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/AdditonalBusinessCorporationDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      regCountry: registeredCountry,
      registeredDate: registeredDate,
      listedExchange: listedExchange,
      regType: registrationType,
      legislationName: legislationName,
      legislationType: legislationType,
      website: website,
      country: taxCountry,
      taxNumber: taxNumber,
      regulatedTrustType: regulatedTrustType,
      unregulatedTrustType: unregulatedTrustType,
      totalEmployees: totalEmployees,
      annualTurnover: annualTurnover,
      industrySector: industrySector,
      countryOfOperation: countryOfOperation,
      travelRestrictedCountry: travelRestrictedCountry,
      restrictedCountry: restrictedCountries,
      ofacLicencePresent: ofacLicencePresent,
      searchId: searchId,
      transactionCountries: transactionCountries,
      intendedUseOfAccount: intendedUseOfAccount,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};
/* <-- Business Details Ends --> */

/* <-- Applicant Details Starts --> */
//POST Applicant Details
export const GetApplicantBusinessDetails = async (req, res) => {
  const { businessRegistrationNumber } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const postApplicantKYCDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDOB: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchApplicantKYCDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDOB: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const postApplicantProfessionalDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    //KYC Details
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,

    //Professional Details
    applicantPosition,
    applicantSharePercentage,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,

      //KYC Details
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDateOfBirth: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,

      //Professional Details
      applicantPosition: applicantPosition,
      applicantSharePercentage: applicantSharePercentage,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchApplicantProfessionalDetails = async (req, res) => {
  const { businessRegistrationNumber, applicantPosition, applicantSharePercentage } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      //Professional Details
      applicantPosition: applicantPosition,
      applicantSharePercentage: applicantSharePercentage,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const postApplicantAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    //KYC Details
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,

    //Professional Details
    applicantPosition,
    applicantSharePercentage,

    //Address Details
    applicantAddress1,
    applicantAddress2,
    applicantCity,
    applicantState,
    applicantPostcode,
    applicantCountry,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,

      //KYC Details
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDateOfBirth: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,

      //Professional Details
      applicantPosition: applicantPosition,
      applicantSharePercentage: applicantSharePercentage,

      //Address Details
      applicantAddress1: applicantAddress1,
      applicantAddress2: applicantAddress2,
      applicantCity: applicantCity,
      applicantState: applicantState,
      applicantPostcode: applicantPostcode,
      applicantCountry: applicantCountry,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchApplicantAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,

    //Address Details
    applicantAddress1,
    applicantAddress2,
    applicantCity,
    applicantState,
    applicantPostcode,
    applicantCountry,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      //Address Details
      applicantAddress1: applicantAddress1,
      applicantAddress2: applicantAddress2,
      applicantCity: applicantCity,
      applicantState: applicantState,
      applicantPostcode: applicantPostcode,
      applicantCountry: applicantCountry,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const postApplicantContactDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    //KYC Details
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,

    //Professional Details
    applicantPosition,
    applicantSharePercentage,

    //Address Details
    applicantAddress1,
    applicantAddress2,
    applicantCity,
    applicantState,
    applicantPostcode,
    applicantCountry,

    //Contact Details
    applicantCountryCode,
    applicantContactNumber,
    applicantEmail,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,

      //KYC Details
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDOB: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,

      //Professional Details
      applicantPosition: applicantPosition,
      applicantSharePercentage: applicantSharePercentage,

      //Address Details
      applicantAddress1: applicantAddress1,
      applicantAddress2: applicantAddress2,
      applicantCity: applicantCity,
      applicantState: applicantState,
      applicantPostcode: applicantPostcode,
      applicantCountry: applicantCountry,

      //Contact Details
      applicantCountryCode: applicantCountryCode,
      applicantContactNumber: applicantContactNumber,
      applicantEmail: applicantEmail,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const patchApplicantContactDetails = async (req, res) => {
  const {
    businessRegistrationNumber,

    //KYC Details
    applicantFirstName,
    applicantMiddleName,
    applicantLastName,
    applicantNationality,
    applicantDateOfBirth,
    applicantKycMode,
    applicantIsResident,

    //Professional Details
    applicantPosition,
    applicantSharePercentage,

    //Address Details
    applicantAddress1,
    applicantAddress2,
    applicantCity,
    applicantState,
    applicantPostcode,
    applicantCountry,

    //Contact Details
    applicantCountryCode,
    applicantContactNumber,
    applicantEmail,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };
    const requestBody = {
      //KYC Details
      applicantFirstName: applicantFirstName,
      applicantMiddleName: applicantMiddleName,
      applicantLastName: applicantLastName,
      applicantNationality: applicantNationality,
      applicantDOB: applicantDateOfBirth,
      applicantKycMode: applicantKycMode,
      applicantIsResident: applicantIsResident,

      //Professional Details
      applicantPosition: applicantPosition,
      applicantSharePercentage: applicantSharePercentage,

      //Address Details
      applicantAddress1: applicantAddress1,
      applicantAddress2: applicantAddress2,
      applicantCity: applicantCity,
      applicantState: applicantState,
      applicantPostcode: applicantPostcode,
      applicantCountry: applicantCountry,

      //Contact Details
      applicantCountryCode: applicantCountryCode,
      applicantContactNumber: applicantContactNumber,
      applicantEmail: applicantEmail,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

/* <-- Applicant Details Ends --> */

/* <-- Stakeholder Details Starts --> */
//POST Stakeholder Details
export const PostStakeholderDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PostStakeholderContactDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
    contactNoStakeholder,
    emailStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,

      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
      stakeholderEmail: emailStakeholder,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PostStakeholderProfessionalDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
    contactNoStakeholder,
    emailStakeholder,
    positionStakeholder,
    sharePercentageStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,

      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
      stakeholderEmail: emailStakeholder,

      //Professional Details
      stakeholderPosition: positionStakeholder,
      stakeholderSharePercentage: sharePercentageStakeholder,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PostStakeholderAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
    contactNoStakeholder,
    emailStakeholder,
    positionStakeholder,
    sharePercentageStakeholder,
    addressLine1Stakeholder,
    addressLine2Stakeholder,
    cityStakeholder,
    stateStakeholder,
    postcodeStakeholder,
    countryStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,

      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
      stakeholderEmail: emailStakeholder,

      //Professional Details
      stakeholderPosition: positionStakeholder,
      stakeholderSharePercentage: sharePercentageStakeholder,

      //Stakeholder Address Details
      stakeholderAddress_1: addressLine1Stakeholder,
      stakeholderAddress_2: addressLine2Stakeholder,
      stakeholderCity: cityStakeholder,
      stakeholderState: stateStakeholder,
      stakeholderPostcode: postcodeStakeholder,
      stakeholderCountry: countryStakeholder,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PostBusinessPartnerDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
    contactNoStakeholder,
    emailStakeholder,
    positionStakeholder,
    sharePercentageStakeholder,
    addressLine1Stakeholder,
    addressLine2Stakeholder,
    cityStakeholder,
    stateStakeholder,
    postcodeStakeholder,
    countryStakeholder,
    businessNameStakeholder,
    businessRegistrationNumberStakeholder,
    businessTypeStakeholder,
    businessEntityTypeStakeholder,
    registeredCountryStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };
    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,

      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
      stakeholderEmail: emailStakeholder,

      //Professional Details
      stakeholderPosition: positionStakeholder,
      stakeholderSharePercentage: sharePercentageStakeholder,

      //Stakeholder Address Details
      stakeholderAddress_1: addressLine1Stakeholder,
      stakeholderAddress_2: addressLine2Stakeholder,
      stakeholderCity: cityStakeholder,
      stakeholderState: stateStakeholder,
      stakeholderPostcode: postcodeStakeholder,
      stakeholderCountry: countryStakeholder,

      //Business Partner
      stakeholderBusinessName: businessNameStakeholder,
      stakeholderBusinessRegistrationNumber: businessRegistrationNumberStakeholder,
      stakeholderBusinessType: businessTypeStakeholder,
      stakeholderBusinessEntityType: businessEntityTypeStakeholder,
      stakeholderRegisteredCountry: registeredCountryStakeholder,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PostBusinessPartnerAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
    contactNoStakeholder,
    emailStakeholder,
    positionStakeholder,
    sharePercentageStakeholder,
    addressLine1Stakeholder,
    addressLine2Stakeholder,
    cityStakeholder,
    stateStakeholder,
    postcodeStakeholder,
    countryStakeholder,
    businessNameStakeholder,
    businessRegistrationNumberStakeholder,
    businessTypeStakeholder,
    businessEntityTypeStakeholder,
    registeredCountryStakeholder,
    addressLine1BusinessPartner,
    addressLine2BusinessPartner,
    cityBusinessPartner,
    stateBusinessPartner,
    postcodeBusinessPartner,
    countryBusinessPartner,
  } = req.query;

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
    };

    const requestBody = {
      businessRegistrationNumber: businessRegistrationNumber,
      emailId: email,
      stakeholderFirstName: firstNameStakeholder,
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,

      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
      stakeholderEmail: emailStakeholder,

      //Professional Details
      stakeholderPosition: positionStakeholder,
      stakeholderSharePercentage: sharePercentageStakeholder,

      //Stakeholder Address Details
      stakeholderAddress_1: addressLine1Stakeholder,
      stakeholderAddress_2: addressLine2Stakeholder,
      stakeholderCity: cityStakeholder,
      stakeholderState: stateStakeholder,
      stakeholderPostcode: postcodeStakeholder,
      stakeholderCountry: countryStakeholder,

      //Business Partner
      stakeholderBusinessName: businessNameStakeholder,
      stakeholderBusinessRegistrationNumber: businessRegistrationNumberStakeholder,
      stakeholderBusinessType: businessTypeStakeholder,
      stakeholderBusinessEntityType: businessEntityTypeStakeholder,
      stakeholderRegisteredCountry: registeredCountryStakeholder,

      //Business Partner Address Details
      stakeholderPartnerAddress_1: addressLine1BusinessPartner,
      stakeholderPartnerAddress_2: addressLine2BusinessPartner,
      stakeholderPartnerCity: cityBusinessPartner,
      stakeholderPartnerState: stateBusinessPartner,
      stakeholderPartnerPostCode: postcodeBusinessPartner,
      stakeholderPartnerCountry: countryBusinessPartner,

      //Created at
      createdAt: formattedDate,
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const GetStakeholderDetails = async (req, res) => {
  const { businessRegistrationNumber } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

//PATCH calls
export const PatchStakeholderDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    firstNameStakeholder,
    middleNameStakeholder,
    lastNameStakeholder,
    nationalityStakeholder,
    dateOfBirthStakeholder,
    kycModeStakeholder,
    isResidentStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };
    const requestBody = {
      stakeholderMiddleName: middleNameStakeholder,
      stakeholderLastName: lastNameStakeholder,
      stakeholderDateOfBirth: dateOfBirthStakeholder,
      stakeholderResident: isResidentStakeholder,
      stakeholderNationality: nationalityStakeholder,
      stakeholderKycMode: kycModeStakeholder,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PatchStakeholderContactDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    contactNoStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };
    const requestBody = {
      //Contact Details
      stakeholderContactNumber: contactNoStakeholder,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PatchStakeholderProfessionalDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    positionStakeholder,
    sharePercentageStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };
    const requestBody = {
      //Professional Details
      stakeholderPosition: positionStakeholder,
      stakeholderSharePercentage: sharePercentageStakeholder,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PatchStakeholderAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    addressLine1Stakeholder,
    addressLine2Stakeholder,
    cityStakeholder,
    stateStakeholder,
    postcodeStakeholder,
    countryStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };
    const requestBody = {
      //Stakeholder Address Details
      stakeholderAddress_1: addressLine1Stakeholder,
      stakeholderAddress_2: addressLine2Stakeholder,
      stakeholderCity: cityStakeholder,
      stakeholderState: stateStakeholder,
      stakeholderPostcode: postcodeStakeholder,
      stakeholderCountry: countryStakeholder,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PatchBusinessPartnerDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    businessNameStakeholder,
    businessRegistrationNumberStakeholder,
    businessTypeStakeholder,
    businessEntityTypeStakeholder,
    registeredCountryStakeholder,
  } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };
    const requestBody = {
      //Business Partner
      stakeholderBusinessName: businessNameStakeholder,
      stakeholderBusinessRegistrationNumber: businessRegistrationNumberStakeholder,
      stakeholderBusinessType: businessTypeStakeholder,
      stakeholderBusinessEntityType: businessEntityTypeStakeholder,
      stakeholderRegisteredCountry: registeredCountryStakeholder,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

export const PatchBusinessPartnerAddressDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    stakeholderEmail,

    addressLine1BusinessPartner,
    addressLine2BusinessPartner,
    cityBusinessPartner,
    stateBusinessPartner,
    postcodeBusinessPartner,
    countryBusinessPartner,
  } = req.query;

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessStakeHolderDetails";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
      "x-stakeholder-email": stakeholderEmail,
    };

    const requestBody = {
      //Business Partner Address Details
      stakeholderPartnerAddress_1: addressLine1BusinessPartner,
      stakeholderPartnerAddress_2: addressLine2BusinessPartner,
      stakeholderPartnerCity: cityBusinessPartner,
      stakeholderPartnerState: stateBusinessPartner,
      stakeholderPartnerPostCode: postcodeBusinessPartner,
      stakeholderPartnerCountry: countryBusinessPartner,

      //Created at
      createdAt: formattedDate,
    };

    const response = await axios.patch(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message });
  }
};

/* <-- Stakeholder Details Ends --> */

/* <-- KYB Details Starts --> */
//KYB Details
export const PostBusinessKYBDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    businessDocumentType,
    businessDocumentFilename,
    businessDocumentFiletype,
  } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessKybDetails";

    const headers = {
      // Remove "Content-Type" header, as it will be automatically set by Axios for form data
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    // Create a new FormData object and append the form fields
    const formData = new FormData();
    formData.append("emailId", email);
    formData.append("documentType", businessDocumentType);
    formData.append("businessDocumentFileName", businessDocumentFilename);
    formData.append("businessDocumentType", businessDocumentFiletype);

    // Read the file and append it to FormData
    const businessDocumentFile = req.file; // Assuming that you use middleware to handle file upload
    if (businessDocumentFile) {
      // Append the file to FormData
      formData.append("businessDocumentFile", businessDocumentFile.buffer, {
        filename: businessDocumentFile.originalname,
        contentType: businessDocumentFile.mimetype,
      });
    }

    const response = await axios.post(url, formData, {
      headers: {
        ...headers,
        // Set the "Content-Type" header to 'multipart/form-data' for form data
        ...formData.getHeaders(),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const PatchBusinessKYBDetails = async (req, res) => {
  const { businessRegistrationNumber, businessDocumentType } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessKybDetails";

    const headers = {
      // Remove "Content-Type" header, as it will be automatically set by Axios for form data
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    // Create a new FormData object and append the form fields
    const formData = new FormData();
    formData.append("businessDocumentType", businessDocumentType);

    // Read the file and append it to FormData
    const businessDocumentFile = req.file; // Assuming that you use middleware to handle file upload
    if (businessDocumentFile) {
      // Append the file to FormData
      formData.append("businessDocumentFile", businessDocumentFile.buffer, {
        filename: businessDocumentFile.originalname,
        contentType: businessDocumentFile.mimetype,
      });
    } else {
      formData.append("businessDocumentFile", "");
    }

    const response = await axios.patch(url, formData, {
      headers: {
        ...headers,
        // Set the "Content-Type" header to 'multipart/form-data' for form data
        ...formData.getHeaders(),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const PostApplicantKYBDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    applicantDocumentType,
    applicantDocumentNumber,
    applicantDocumentReferenceNumber,
    applicantDocumentHolderName,
    applicantDocumentIssuanceCountry,
    applicantDocumentIssuingAuthority,
    applicantDocumentIssueDate,
    applicantDocumentExpiryDate,
  } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantKybDetails";

    const headers = {
      // Remove "Content-Type" header, as it will be automatically set by Axios for form data
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    // Create a new FormData object and append the form fields
    const formData = new FormData();
    formData.append("emailId", email);
    formData.append("applicantKycMode", "MKYC");
    formData.append("applicantDocumentType", applicantDocumentType);
    formData.append("documentType", applicantDocumentType);
    formData.append("documentNumber", applicantDocumentNumber);
    formData.append("documentReferenceNumber", applicantDocumentReferenceNumber);
    formData.append("documentHolderName", applicantDocumentHolderName);
    formData.append("documentIssuanceCountry", applicantDocumentIssuanceCountry);
    formData.append("documentIssuingAuthority", applicantDocumentIssuingAuthority);
    formData.append("documentIssueDate", applicantDocumentIssueDate);
    formData.append("documentExpiryDate", applicantDocumentExpiryDate);

    // Read the file and append it to FormData
    const applicantDocumentFile = req.file; // Assuming that you use middleware to handle file upload
    if (applicantDocumentFile) {
      // Append the file to FormData
      formData.append("applicantDocumentFile", applicantDocumentFile.buffer, {
        filename: applicantDocumentFile.originalname,
        contentType: applicantDocumentFile.mimetype,
      });
    }

    const response = await axios.post(url, formData, {
      headers: {
        ...headers,
        // Set the "Content-Type" header to 'multipart/form-data' for form data
        ...formData.getHeaders(),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const PatchApplicantKYBDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    applicantDocumentType,
    applicantDocumentNumber,
    applicantDocumentReferenceNumber,
    applicantDocumentHolderName,
    applicantDocumentIssuanceCountry,
    applicantDocumentIssuingAuthority,
    applicantDocumentIssueDate,
    applicantDocumentExpiryDate,
  } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantKybDetails";

    const headers = {
      // Remove "Content-Type" header, as it will be automatically set by Axios for form data
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    // Create a new FormData object and append the form fields
    const formData = new FormData();
    formData.append("applicantKycMode", "MKYC");
    formData.append("applicantDocumentType", applicantDocumentType);
    formData.append("documentType", applicantDocumentType);
    formData.append("documentNumber", applicantDocumentNumber);
    formData.append("documentReferenceNumber", applicantDocumentReferenceNumber);
    formData.append("documentHolderName", applicantDocumentHolderName);
    formData.append("documentIssuanceCountry", applicantDocumentIssuanceCountry);
    formData.append("documentIssuingAuthority", applicantDocumentIssuingAuthority);
    formData.append("documentIssueDate", applicantDocumentIssueDate);
    formData.append("documentExpiryDate", applicantDocumentExpiryDate);

    // Read the file and append it to FormData
    const applicantDocumentFile = req.file; // Assuming that you use middleware to handle file upload
    if (applicantDocumentFile) {
      // Append the file to FormData
      formData.append("applicantDocumentFile", applicantDocumentFile.buffer, {
        filename: applicantDocumentFile.originalname,
        contentType: applicantDocumentFile.mimetype,
      });
    }

    const response = await axios.patch(url, formData, {
      headers: {
        ...headers,
        // Set the "Content-Type" header to 'multipart/form-data' for form data
        ...formData.getHeaders(),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const PostStakeholderKYBDetails = async (req, res) => {
  const {
    businessRegistrationNumber,
    email,
    StakeholderDocumentType,
    StakeholderDocumentNumber,
    StakeholderDocumentReferenceNumber,
    StakeholderDocumentHolderName,
    StakeholderDocumentIssuanceCountry,
    StakeholderDocumentIssuingAuthority,
    StakeholderDocumentIssueDate,
    StakeholderDocumentExpiryDate,
    stakeholderEmail,
  } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/StakeHolderKybDetails";

    const headers = {
      // Remove "Content-Type" header, as it will be automatically set by Axios for form data
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    // Create a new FormData object and append the form fields
    let data = new FormData();
    data.append("stakeholderDocumentType", StakeholderDocumentType);
    data.append("stakeholderKycMode", "MKYC");
    data.append("documentNumber", StakeholderDocumentNumber);
    data.append("documentReferenceNumber", StakeholderDocumentReferenceNumber);
    data.append("documentHolderName", StakeholderDocumentHolderName);
    data.append("documentIssuanceCountry", StakeholderDocumentIssuanceCountry);
    data.append("documentIssuingAuthority", StakeholderDocumentIssuingAuthority);
    data.append("documentIssueDate", StakeholderDocumentIssueDate);
    data.append("documentExpiryDate", StakeholderDocumentExpiryDate);
    data.append("stakeholderEmail", stakeholderEmail);
    data.append("emailId", email);
    data.append("documentType", StakeholderDocumentType);

    // Read the file and append it to FormData
    const stakeholderDocumentFile = req.file; // Assuming that you use middleware to handle file upload
    if (stakeholderDocumentFile) {
      // Append the file to FormData
      data.append("stakeholderDocumentFile", stakeholderDocumentFile.buffer, {
        filename: stakeholderDocumentFile.originalname,
        contentType: stakeholderDocumentFile.mimetype,
      });
    }

    const response = await axios.post(url, data, {
      headers: {
        ...headers,
        // Set the "Content-Type" header to 'multipart/form-data' for form data
        ...data.getHeaders(),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

//GET KYB DETAILS
export const GetBusinessKYBDetails = async (req, res) => {
  const { brn } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/BusinessKybDetails";

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
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const GetStakeholderKYBDetails = async (req, res) => {
  const { brn } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/StakeHolderKybDetails";

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
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const GetApplicantKYBDetails = async (req, res) => {
  const { brn } = req.query;
  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/ApplicantKybDetails";

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
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

/* <-- KYB Details Ends --> */

//Submit to NIUM
export const OnboardEKYCUser = async (req, res) => {
  const { businessRegistrationNumber } = req.query;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/OnboardEKYCUser";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.post(url, {}, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

export const OnboardMKYCUser = async (req, res) => {
  const { businessRegistrationNumber } = req.body;

  try {
    const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/onboarding/OnboardMKYCUser";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey_v2_zoqq,
      "x-profession-id": "Business_Onboard",
      "x-business-id": businessRegistrationNumber,
    };

    const response = await axios.post(url, {}, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.message.message });
  }
};

//Submit to NIUM
export const OnboardEKYCUserTemporary = async (req, res) => {
  const { businessRegistrationNumber } = req.query;
  const requestBody = req.body;
  try {
    const url = "https://apisandbox.spend.nium.com/api/v1/client/e47530cf-29ae-4e52-97a6-6d694aeea6fc/corporate";

    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": "Stylopay Corporate SG",
      "x-api-key": Constants.xApikey_v2_zoqq,
      region: "SG",
    };

    // Ensure that requestBody is a valid JSON object
    //let parsedRequestBody = JSON.parse(requestBody.toString());

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ status: "BAD_REQUEST", message: error.response.data });
  }
};
