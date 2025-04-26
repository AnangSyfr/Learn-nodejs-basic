import * as fs from "fs";
import path from "path";

export const writeFileStream = () => {
  const filePath = path.join(__dirname, "output.txt");
  const writableStream = fs.createWriteStream(filePath);
  writableStream.write("Ini merupakan teks baris pertama! \n");
  writableStream.write("Ini merupakan teks baris kedua! \n");
  writableStream.end();
};
