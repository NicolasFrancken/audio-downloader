import ytdl from "ytdl-core";

//si esto es async no funciona!!
export default function youtubeDownload(url) {
  try {
    const video = ytdl(url, { filter: "audioonly" });
    console.log("\nDownloading audio\n");
    return video;
  } catch (e) {
    throw e;
  }
}
