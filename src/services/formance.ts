import { SDK } from "@formance/formance-sdk";
import config from "config";

export const getFormanceSDK = () => new SDK({
  authorization: `Bearer ${config.apiKey}`,
  serverURL: config.apiUrl,
})