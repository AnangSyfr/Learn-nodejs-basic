import * as fs from "fs";
import path from "path";

export const readFileStream = () => {
  const filePath = path.resolve(__dirname, "article.txt");
  const readableStream = fs.createReadStream(filePath, {
    highWaterMark: 10,
  });

  readableStream.on("readable", () => {
    try {
      process.stdout.write(`${readableStream.read()}`);
    } catch (err) {
      console.log(err);
    }
  });

  readableStream.on("end", () => {
    console.log("done");
  });
};
