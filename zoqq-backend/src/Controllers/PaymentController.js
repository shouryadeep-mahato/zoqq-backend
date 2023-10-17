import axios from "axios";
import * as Constants from "../Modules/Constant.js";
import crypto from "crypto";

//Add beneficiries
export const addBeneficiry = async (req, res) => {
  debugger;
  const customerHashId = req.params.customerHashId;
  console.log(req);
  const requestBody = req.body;

  const payoutMethod = requestBody.payoutMethod;
  const beneficiaryAccountNumber = requestBody.beneficiaryAccountNumber;
  const routingCodeType1 = requestBody.routingCodeType1;
  const routingCodeValue1 = requestBody.routingCodeValue1;
  const beneficiaryName = requestBody.beneficiaryName;
  const destinationCountry = requestBody.destinationCountry;

  console.log(requestBody);
  try {
    const url =
      Constants.baseurl_v2_zoqq +
      "/zoqq/api/v2/payment/beneficiary/" +
      customerHashId;
    console.log(url);
    const headers = {
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey,
      "x-client-id": Constants.xclientId,
      "x-request-id": crypto.randomUUID(),
      "x-client-name": Constants.xclientId,
    };
    console.log(headers);
    const response = await axios.post(url, requestBody, { headers });

    if (
      payoutMethod.toLowerCase() === "local" &&
      (destinationCountry.toLowerCase === "vn" ||
        destinationCountry.toLowerCase === "th" ||
        destinationCountry.toLowerCase === "in" ||
        destinationCountry.toLowerCase === "pk" ||
        destinationCountry.toLowerCase === "my" ||
        destinationCountry.toLowerCase === "id")
    ) {
      try {
        const url =
          Constants.baseurl_v2_zoqq +
          "/zoqq/api/v2/payment/beneficiary/payee/" +
          customerHashId;
        const headers = {
          "x-program-id": Constants.xProgramId_zoqq,
          "x-api-key": Constants.xApikey,
          "x-client-id": Constants.xclientId,
          "x-request-id": crypto.randomUUID(),
          "x-client-name": Constants.xclientId,
        };
        const confirmpayeerequestBody = {
          payoutMethod: payoutMethod,
          beneficiaryAccountNumber: beneficiaryAccountNumber,
          routingCodeType1: routingCodeType1,
          routingCodeValue1: routingCodeValue1,
          beneficiaryName: beneficiaryName,
          destinationCountry: destinationCountry,
        };
        const response = await axios.post(url, confirmpayeerequestBody, {
          headers,
        });
        res.status(200).json(response.data);
      } catch {
        console.error(error);
        res
          .status(500)
          .json({ status: "BAD_REQUEST", message: "An error occurred" });
      }
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//List Beneficiries

export const listBeneficiries = async (req, res) => {
  try {
    const customerHashId = req.params.customerHashId;
    const url =
      Constants.baseurl_v2_zoqq +
      "/zoqq/api/v2/payment/beneficiaryList/" +
      customerHashId;
    console.log(url);
    const headers = {
      "x-program-id": Constants.xProgramId_zoqq,
      "x-api-key": Constants.xApikey,
      "x-client-id": Constants.xclientId,
      "x-request-id": crypto.randomUUID(),
      "x-client-name": Constants.xclientId,
    };
    console.log(headers);
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

export const fetchDetails = async (req, res) => {
  debugger;
  try {
    const beneficiaryHashId = req.params.beneficiaryHashId;
    const url = `https://developer.sandbox.stylopay.com:8068/zoqq/api/v2/payment/beneficiaryDetails/1206c50d-7d95-4f3b-bf2d-1f089e857332/${beneficiaryHashId}`;
    console.log(url);
    const headers = {
      "x-program-id": "SNVAAM0",
      "x-api-key": Constants.xApikey,
      "x-client-id": "e47530cf-29ae-4e52-97a6-6d694aeea6fc",
      "x-request-id": "cccedc59-dece-4624-ac93-716392114e52",
      "x-client-name": "zoqqV2",
    };
    console.log(headers);
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
// delete beneficiary
export const deleteBeneficiary = async (req, res) => {
  debugger;
  try {
    const beneficiaryHashId = req.params.beneficiaryHashId;
    const url = `https://developer.sandbox.stylopay.com:8068/zoqq/api/v2/payment/beneficiaryDetails/1206c50d-7d95-4f3b-bf2d-1f089e857332/${beneficiaryHashId}`;
    console.log(url);
    const headers = {
      "x-program-id": "SNVAAM0",
      "x-api-key": Constants.xApikey,
      "x-client-id": "e47530cf-29ae-4e52-97a6-6d694aeea6fc",
      "x-request-id": "cccedc59-dece-4624-ac93-716392114e52",
      "x-client-name": "zoqqV2",
    };
    console.log(headers);
    // const response = await axios.delete(url, { headers });
    // res.status(200).json(response.data);
    if (response.status === 204) {
      res.status(204).send(); // No content
    } else {
      res.status(500).json({
        status: "BAD_REQUEST",
        message: "Failed to delete beneficiary",
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
//get country list
export const listCountry = async (req, res) => {
  debugger;

  const requestBody = {
    programCode: "SMMAAS0",
  };
  try {
    const url = "https://api.sandbox.stylopay.com/internal/v1/getcountrylists";
    console.log(url);
    console.log(requestBody); // This will show you the form data sent from the client

    const response = await axios.post(url, requestBody);
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

// currency list

export const listCurrency = async (req, res) => {
  try {
    const customerHashId = req.params.customerHashId;
    const url =
      Constants.baseurl_v2_zoqq +
      "/zoqq/api/v2/accounts/balance/" +
      customerHashId;
    console.log(url);
    const headers = {
      "x-client-id": Constants.xclientId,
      "x-program-id": Constants.xProgramId_zoqq,
      "x-client-name": Constants.xclientId,
      "x-request-id": crypto.randomUUID(),
      "x-api-key": Constants.xApikey,
    };
    const response = await axios.get(url, { headers });
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

export const sendMoney = async (req, res) => {
  try {
    const customerHashId = req.params.customerHashId;
    const requestBody = req.body;
    console.log(requestBody);
    const url =
      Constants.baseurl_v2_zoqq +
      "/zoqq/api/v2/payment/beneficiary/transferMoney/" +
      customerHashId +
      "/bc8e8251-0887-4866-949f-93e89b6c43b4";
    console.log(url);
    const headers = {
      "x-client-id": Constants.xclientId,
      "x-program-id": Constants.xProgramId_zoqq,
      "x-client-name": Constants.xclientId,
      "x-request-id": crypto.randomUUID(),
      "x-api-key": Constants.xApikey,
      "Content-Type": "application/json",
    };
    const response = await axios.post(url, requestBody, { headers });
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

export const fetchCorridors = async (req, res) => {
  try {
    // const customerHashId = req.params.customerHashId;
    const destinationCountry = req.query.destinationCountry;
    const destinationCurrency = req.query.destinationCurrency;
    const client_hash_id = Constants.x_client_id;
    const accounttype = req.query.accounttype;
    const url =
      Constants.niumdirectbaseURL +
      `/api/v2/client/` +
      client_hash_id +
      `/supportedCorridors?destinationCountry=${destinationCountry}&destinationCurrency=${destinationCurrency}`;
    console.log(url);
    const headers = {
      "Content-Type": "application/json",
      "x-request-id": crypto.randomUUID(),
      "x-client-name": Constants.xclientId,
      "x-api-key": Constants.xApikey,
    };
    const response = await axios.get(url, { headers });
    const corporateData = response.data.filter(
      (item) => item.customerType === "CORPORATE"
    );
    const result = corporateData.map((item) => ({
      routingCodeType: item.routingCodeType,
      payoutMethod: item.payoutMethod,
    }));
    const finalresult = result.filter(
      (item) => item.beneficiaryAccountType === accounttype
    );

    console.log(finalresult);
    res.status(200).json(finalresult);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
