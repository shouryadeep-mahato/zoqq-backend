import axios from "axios";
import * as Constants from "../Modules/Constant.js";

//List Country Code
export const subscriptionPlanDetails = async (req, res) => {
    try {
      const url = Constants.baseurl_v2_zoqq + "/zoqq/api/v2/subscription/planDetails";
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": Constants.xApikey_v2,
        "x-client-id": "shared by stylopay",
        "x-program-id": "EPMAAS0",
        "x-client-name": "Business",
        "x-request-id": "676767676"
      };
    
      const response = await axios.get(url, { headers });
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
  
      res
        .status(500)
        .json({ status: "BAD_REQUEST", message: "An error occurred" });
    }
  };
  