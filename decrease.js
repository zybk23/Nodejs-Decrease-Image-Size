const compress_images = require("compress-images");

//let image=
const image = "./img/manzara.jpg";
const output_path = "build/img/";

compress_images(
  image,
  output_path,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "20"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
