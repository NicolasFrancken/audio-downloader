import { NextResponse } from "next/server";

import vimeoDownload from "@/app/utils/vimeoDownload";
import convertVidToMp3 from "@/app/utils/convertVidToMp3";

export async function POST(req) {
  // 409999884 ESTE ANDA

  const { url } = await req.json();
  const videoId = url.match(/\d+/g);
  const configLink = `https://player.vimeo.com/video/${videoId[0]}/config`;

  try {
    await vimeoDownload(configLink);
    await convertVidToMp3();

    return NextResponse.json({ message: "Audio downloaded" });
  } catch (e) {
    return NextResponse.json(
      { message: "There was an error" },
      { status: 500 }
    );
  }
}
