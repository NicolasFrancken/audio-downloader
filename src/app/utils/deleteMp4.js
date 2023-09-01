import path from "path";
import fs from "fs";

export default async function deleteMp4() {
  const filePath = path.join(__dirname, "../../../../../src/temp/tempVid.mp4");

  fs.unlink(filePath, (e) => {
    if (e) {
      throw e;
    }
  });
}
