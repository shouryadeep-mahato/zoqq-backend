import axios from "axios";
import * as Constants from "../Modules/Constant.js";
import { v4 as uuidv4 } from 'uuid';
const requestId = uuidv4();
const FormData = import('form-data');
const fs = import('fs');
import * as constant from '../Modules/Expensemodconstant.js'

export const listbills = async (req, res) => {
  const { 
    companyId
   } = req.query;
   console.log(companyId)
 
  try {
    const url = constant.baseurl+"/zoqq/api/v2/expense/bill/"+companyId;
    console.log(url);
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name":constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId

    };
    console.log(headers);
    

    const response = await axios.get(url, { headers });
    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    if (error instanceof SyntaxError) {
      res.status(400).json({ status: "Bad Request", message: "Invalid JSON" });
    } else{

    res
      .status(500)
      .json({ status: "Internal Server Error", message: "An error occurred" });
  }
}
};
export const listinvoices = async (req, res) => {
  
  const { 
    companyId
   } = req.query;
   console.log(companyId)
  try {
    
    const url = constant.baseurl+"/zoqq/api/v2/expense/invoice/"+companyId;
    console.log(url);
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name":constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId

    };
    console.log(headers);

    const response = await axios.get(url, { headers });
    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
export const docanalysis = async (req, res) => {
  try {
    const url = "https://93wewbvd36.execute-api.us-east-2.amazonaws.com/sandbox/internal/v1/docanalysis";
    console.log(url);
  const { objectKey} = req.query;
  console.log(objectKey)
    const requestData = {
      Bucket: 'stylopay-sandbox-ohio-dev-dump-public',
      Name: objectKey,
      queries: [
        'InvoiceNumber',
        'TotalAmount',
        'OrderNumber',
        'Address',
        'dueDate',
        'InvoiceDate'
      ]
    };
    console.log(requestData);

    const response = await axios.post(url,  requestData );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
   if(error.name=='AxiosError'){
    res.status(504).json([error])
   }
   else{
    res
      .status(500)
      .json({ status: "Internal Server Error", message: error.message});
  }
}
};
export const Createbill = async (req, res) => {
  console.log(req)
  const { id,
    companyId,
    date,
    dueDate,
    amount,
    currency,
    description,
    imgUrl,
    createdBy,
    sourceOfFund,
    recipientName} = req.query;
  try {
    const url = constant.baseurl+'/zoqq/api/v2/expense/bill';
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name": constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId
    }

    const requestBody = {
      id: id,
      companyId: companyId,
      date: date,
      dueDate: dueDate,
      amount: amount,
      currency: currency,
      description: description,
      imgUrl: imgUrl,
      createdBy: createdBy,
      sourceOfFund:sourceOfFund,
      recipientName: recipientName

    };
    console.log(requestBody)

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};

export const Uploadtos3 = async (req, res) => {
  try {
    const url ="https://93wewbvd36.execute-api.us-east-2.amazonaws.com/sandbox/internal/v1/-docupload"
    const uploadedFile = req.body;
    console.log(req.body)
    const requestBody = {
      uploadedFile
      
    };
    
    console.log(requestBody)
    console.log("body check")
      console.log(req.body); // Check if the body is received
     const headers={
      "Content-Type":"application/json",
      timeout: 40000
     }
     
      const response = await axios.post(url, uploadedFile, { headers });
      //res.status(200).json(response.data);
    if (response.status >= 200 && response.status < 300) {
      res.status(200).json(response.data);
    } else {
     
      res.status(response.status).json({ status: response.statusText, message: response.data });
    }
  } catch (error) {
      console.error(error);
      res.status(500).json(error);
      
  }
};
export const Createinvoice = async (req, res) => {
  console.log(req)
  const { id,
    customerEmail,
    customerName,
    date,
    companyId,
    dueDate,
    description,
    imgUrl,
    createdBy,
    sourceOfFund,
    itemDetails} = req.query;
  try {
    const url = constant.baseurl+'/zoqq/api/v2/expense/invoice';
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name": constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId
    }

    const requestBody = {
      id: id,
      companyId: companyId,
      date: date,
      dueDate: dueDate,
      customerEmail: customerEmail,
      customerName: customerName,
      description: description,
      imgUrl: imgUrl,
      createdBy: createdBy,
      itemDetails: itemDetails

    };
    console.log(requestBody)

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
};
export const Createinvoicedoc = async (req, res) => {
  console.log(req)
 
  const datatosend=req.body;
  try {
    const url = 'http://127.0.0.1:5000/generate_pdf';
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name": constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId
    }

    console.log(datatosend)

    const response = await axios.post(url, datatosend, { headers });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
   
    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  
  }
};

export const listcustomer = async (req, res) => {
  const { 
    companyId
   } = req.query;
   console.log(companyId)
  try {
    const url = constant.baseurl+"/zoqq/api/v2/expense/invoice/customer/"+companyId;
    console.log(url);
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name":constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId

    };
    console.log(headers);
    

    const response = await axios.get(url, { headers });
    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    if (error instanceof AxiosError) {
      res.status(504).json({ status: "ERR_BAD_RESPONSE", message: "AxiosError" });
    } else{

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
  }
};

export const Createcustomer = async (req, res) => {
  console.log(req)
  const { 
    customerEmail,
    customerName,
    companyId,
    address1,
    address2,
    address3,
    address4} = req.query;
  try {
    const url = constant.baseurl+'/zoqq/api/v2/expense/invoice/customer';
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": constant.xApikey,
      "x-client-name": constant.xClientname,
      "x-client-id":constant.xclientId,
      "x-program-id":constant.xProgramcode,
      "x-request-id":requestId
    }

    const requestBody = {
      companyId: companyId,
      
      customerEmail: customerEmail,
      customerName: customerName,
      address1: address1,
      address2: address2,
      address3: address3,
      address4: address4

    };
    console.log(requestBody)

    const response = await axios.post(url, requestBody, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      res.status(504).json({ status: "ERR_BAD_RESPONSE", message: "AxiosError" });
    } else{

    res
      .status(500)
      .json({ status: "BAD_REQUEST", message: "An error occurred" });
  }
}
};