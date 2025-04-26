import * as fs from "fs";
import path from "path";

const fileReadCallback = (err: any | null, data: string): void => {
  if (err) {
    console.log(err);
    console.log("Gagal membaca data");
    return;
  }
  console.log(data);
};

export const readFile = () => {
  const filePath = path.resolve(__dirname, "notes.txt");
  fs.readFile(filePath, "utf-8", fileReadCallback);
};
