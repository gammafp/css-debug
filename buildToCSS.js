const sass = require('node-sass');
const fs = require("fs");
const outputPath = "./css/debug.css";

console.log("--- start build ---");

sass.render({
  file: "./scss/debug.scss",
  outFile: outputPath,
  outputStyle: "compressed"
}, function (err, result) {
  if (err) {
    console.log("##### ", err);
  } else {
    fs.writeFile(outputPath, result.css, (err) => {
      if (err) {
        console.log("##### ", err);
      } else {
        console.log("--- build done --- ");
      }
    });
  }
});