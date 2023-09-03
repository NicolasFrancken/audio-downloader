import { NextResponse } from "next/server";

import vimeoDownload from "@/app/utils/vimeoDownload";
import convertVidToMp3 from "@/app/utils/convertVidToMp3";

import Ffmpeg from "fluent-ffmpeg";

export async function POST(req) {
  // https://vimeo.com/409999884

  const { url } = await req.json();
  const videoId = url.match(/\d+/g);
  const configLink = `https://player.vimeo.com/video/${videoId[0]}/config`;

  try {
    const vimeoStream = await vimeoDownload(configLink);
    console.log(typeof vimeoStream);

    const output = await convertToMp3(vimeoStream);

    return NextResponse.json({ message: "Audio downloaded" });
  } catch (e) {
    return NextResponse.json(
      { message: "There was an error" },
      { status: 500 }
    );
  }
}

async function convertToMp3(audioStream) {
  const output = path.join(
    __dirname,
    "../../../../../src/uploads/VimeoAudio.mp3"
  );
  return new Promise((resolve, reject) => {
    Ffmpeg()
      .input(audioStream)
      .toFormat("mp3")
      .output(output)
      .on("end", () => {
        console.log("Audio downloaded");
        resolve(output);
      })
      .on("error", (e) => {
        reject();
      })
      .run();
  });
}
