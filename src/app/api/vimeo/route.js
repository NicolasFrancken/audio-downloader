import { NextResponse } from "next/server";

import downloadVimeo from "@/app/utils/downloadVimeo";
import convertVidToMp3 from "@/app/utils/convertVidToMp3";

export async function POST(req) {
  // 409999884 ESTE ANDA

  const { url } = await req.json();
  const videoId = url.match(/\d+/g);
  const configLink = `https://player.vimeo.com/video/${videoId[0]}/config`;

  try {
    await downloadVimeo(configLink);
    await convertVidToMp3();

    return NextResponse.json({ message: "Audio Downloaded" });
  } catch (e) {
    return NextResponse.json(
      { message: "There was an error" },
      { status: 500 }
    );
  }
}
