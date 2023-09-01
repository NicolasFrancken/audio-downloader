import Ffmpeg from "fluent-ffmpeg";

export default async function convertToMp3(audioStream) {
  const output = "audio.mp3";
  return new Promise((resolve, reject) => {
    Ffmpeg()
      .input(audioStream)
      .toFormat("mp3")
      .output(output)
      .on("end", () => {
        console.log("Audio downloaded");
        resolve();
      })
      .on("error", (e) => {
        reject();
      })
      .run();
  });
}
