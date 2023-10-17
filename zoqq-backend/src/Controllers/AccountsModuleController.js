
import axios from "axios";
import * as Constants from "../Modules/AccountModuleConstants.js";
import crypto from "crypto";

//Get exchange rate API
export const getExchangeRate = async (req, res) => {
  const { convertAmount, convertCurrency, destinationCurrency } = req.query;
    try {
      const url = Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/exchangerate";
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": Constants.x_api_key,
        "x-request-id": crypto.randomUUID(),
        "x-client-id" : Constants.x_client_id,
        "x-client-name": Constants.x_client_name,
        "x-program-id" : Constants.x_program_id
      };
      
      const requestBody = {
        sourceAmount: convertAmount,
        sourceCurrencyCode: convertCurrency,
        destinationCurrencyCode: destinationCurrency,
      };
  
      const response = await axios.post(url,requestBody, { headers });
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
  
      res
        .status(500)
        .json({ status: "BAD_REQUEST", message: "An error occurred" });
    }
  };


  //Create Account API
export const createAccount = async (req, res) => {
  const { bankName, currencyCode, label, custHashId } = req.query;
    try {
      const url =Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/"+custHashId;
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": Constants.x_api_key,
        "x-request-id": crypto.randomUUID(),
        "x-client-id" : Constants.x_client_id,
        "x-client-name": Constants.x_client_name,
        "x-program-id" : Constants.x_program_id
      };
      
      const requestBody = {
        currencyCode: currencyCode,
        bankName: bankName,
        label: label,
      };
  
      const response = await axios.post(url,requestBody, { headers });
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
  
      res
        .status(500)
        .json({ status: "BAD_REQUEST", message: "An error occurred" });
    }
  };

  //Bank Name Dropdown
export const bankNames = async (req, res) => {
  const { currencyCode } = req.query;
  try {
    const url =
    Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/bankinfo";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.x_api_key,
      "x-request-id": crypto.randomUUID(),
      "x-client-id" : Constants.x_client_id,
      "x-client-name": Constants.x_client_name,
      "x-program-id" : Constants.x_program_id
    };

    const params = {
      currencyCode: currencyCode,
    };

    const response = await axios.get(url, { headers, params });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

//Get Trnsaction History
export const getTransactionHistory = async (req, res) => {
  const { page, size, startDate, endDate, transactionType, custHashId } = req.query;
  try {
    const url =
    Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/transactions/"+custHashId;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.x_api_key,
      "x-request-id": crypto.randomUUID(),
      "x-client-id" : Constants.x_client_id,
      "x-client-name": Constants.x_client_name,
      "x-program-id" : Constants.x_program_id
    };

    const requestBody = {
      page: page,
      size: size,
      startDate: startDate,
      endDate: endDate,
      transactionType: transactionType
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};


//Fetch Balance
export const getCurrenciesList = async (req, res) => {
  const { custHashId } = req.query;
  try {
    const url =
    Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/balance/"+custHashId;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.x_api_key,
      "x-request-id": crypto.randomUUID(),
      "x-client-id" : Constants.x_client_id,
      "x-client-name": Constants.x_client_name,
      "x-program-id" : Constants.x_program_id
    };
    console.log("i am here")
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};


 //Get Account Details
 export const getActivatedBankAccount = async (req, res) => {
  const { currencyCode, custHashId } = req.query;
  try {
    const url =
    Constants.baseUrl_Accounts+"/zoqq/api/v2/accounts/"+custHashId;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.x_api_key,
      "x-request-id": crypto.randomUUID(),
      "x-client-id" : Constants.x_client_id,
      "x-client-name": Constants.x_client_name,
      "x-program-id" : Constants.x_program_id
    };

    const params = {
      currencyCode: currencyCode,
    };

    const response = await axios.get(url, { headers, params });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};


// Amount Convert

export const amountConversion = async (req, res) => {
  const { amount, destinationAmount, destinationCurrency, sourceCurrency, customerComments, custHashId } = req.query;
  try {
    const url = Constants.baseUrl_Accounts+"/zoqq/api/v2/conversion/"+custHashId;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": Constants.x_api_key,
      "x-request-id": crypto.randomUUID(),
      "x-client-id" : Constants.x_client_id,
      "x-client-name": Constants.x_client_name,
      "x-program-id" : Constants.x_program_id
    };

    const requestBody = {
      amount: amount,
      destinationAmount: destinationAmount,
      destinationCurrency: destinationCurrency,
      sourceCurrency: sourceCurrency,
      customerComments: customerComments
    };

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
