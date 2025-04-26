import * as fs from "fs";
import path from "path";

export const readWriteFileStream = () => {
  const fileInputPath = path.join(__dirname, "input.txt");
  const fileOuputPath = path.join(__dirname, "output.txt");

  const fileRead = fs.createReadStream(fileInputPath, {
    highWaterMark: 15,
  });

  const fileWrite = fs.createWriteStream(fileOuputPath);

  fileRead.on("readable", () => {
    try {
      const text = `${fileRead.read()} \n`;
      fileWrite.write(text);
    } catch (error) {
      console.log(error);
    }
  });

  fileRead.on("end", () => {
    console.log("\n read done");
    fileWrite.end();
  });
};
