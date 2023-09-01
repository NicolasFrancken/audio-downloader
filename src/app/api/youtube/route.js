import { NextResponse } from "next/server";

import youtubeDownload from "@/app/utils/youtubeDownload";
import convertToMp3 from "@/app/utils/converStreamToMp3";

export async function POST(req) {
  const { url } = await req.json();
  try {
    const audioStream = youtubeDownload(url);
    await convertToMp3(audioStream);

    return NextResponse.json({ message: "Audio Downloaded" });
  } catch (e) {
    return NextResponse.json(
      { message: "There was an error" },
      { status: 500 }
    );
  }
}
