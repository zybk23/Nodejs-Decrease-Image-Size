const fs = require("fs");
const util = require("util");
const compress_images = require("compress-images");
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);

const directory = "./public/uploads";
const output_path = "build/img/";

async function toRun() {
  try {
    const files = await readdir(directory);
    const list = [];
    const unlinkPromises = files.map(
      (filename) => list.push(filename)

      //unlink(`${directory}/${"image_.jpeg"}`)
    );
    const index = list.length - 1;
    console.log(list[index]);
    compress_images(
      directory + "/" + list[index],
      output_path,
      { compress_force: false, statistic: true, autoupdate: true },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", "5"] } },
      { png: { engine: "pngquant", command: ["--quality=20-50"] } },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: {
          engine: "gifsicle",
          command: ["--colors", "64", "--use-col=web"],
        },
      },
      function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
      }
    );

    setTimeout(() => {
      unlink(`${directory}/${list[index]}`);
    }, 3000);

    console.log(list[index]);
    return Promise.all(unlinkPromises);
  } catch (err) {
    console.log(err);
  }
}

module.exports = toRun;
