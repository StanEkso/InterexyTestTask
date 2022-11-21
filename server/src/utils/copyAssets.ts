import shelljs from "shelljs";
import fs from "fs";

fs.mkdirSync("./dist");
fs.mkdirSync("./dist/views");
fs.readdir("./src/views/", (err, files) => {
  files.forEach((value) =>
    fs.copyFileSync(`./src/views/${value}`, `./dist/views/${value}`)
  );
});
fs.readdir("dist/views", (err, files) => {
  if (err) console.log(err);
  console.log(files);
});
