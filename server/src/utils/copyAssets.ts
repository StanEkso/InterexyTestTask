import shelljs from "shelljs";
import fs from "fs";
shelljs.cp("-r", "src/views", "dist");
fs.readdir("dist/views", (err, files) => {
  if (err) console.log(err);
  console.log(files);
});
