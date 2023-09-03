import Ffmpeg from "fluent-ffmpeg";
import path from "path";

import deleteMp4 from "./deleteMp4";

export default async function convertVidToMp3(vimeoStream) {
  await new Promise((resolve, reject) => {
    // const input = path.join(__dirname, "../../../../../src/temp/tempVid.mp4");
    const output = path.join(
      __dirname,
      "../../../../../src/uploads/VimeoVideo.mp3"
    );
    Ffmpeg()
      .input(input)
      .output(output)
      .on("end", () => {
        deleteMp4();
        console.log("Audio downloaded");
        resolve();
      })
      .on("error", (e) => {
        reject();
      })
      .run();
  });
}
