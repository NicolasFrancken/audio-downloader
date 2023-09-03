import https from "https";
import fs from "fs";
import path from "path";
import axios from "axios";

export default async function vimeoDownload(configLink) {
  try {
    const videoConfig = await axios.get(configLink);

    const videoQualityItems = videoConfig.data.request.files.progressive;

    const targetItem = videoQualityItems[0];
    const targetVideoFileUrl = targetItem.url;

    const response = await axios.get(targetVideoFileUrl, {
      responseType: "stream",
    });
    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
