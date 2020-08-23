"use strict";

var fs = require("fs");

var util = require("util");

var compress_images = require("compress-images");

var readdir = util.promisify(fs.readdir);
var unlink = util.promisify(fs.unlink);
var directory = "./public/uploads";
var output_path = "build/img/";

function toRun() {
  var files, list, unlinkPromises, index;
  return regeneratorRuntime.async(function toRun$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(readdir(directory));

        case 3:
          files = _context.sent;
          list = [];
          unlinkPromises = files.map(function (filename) {
            return list.push(filename);
          } //unlink(`${directory}/${"image_.jpeg"}`)
          );
          index = list.length - 1;
          console.log(list[index]);
          compress_images(directory + "/" + list[index], output_path, {
            compress_force: false,
            statistic: true,
            autoupdate: true
          }, false, {
            jpg: {
              engine: "mozjpeg",
              command: ["-quality", "5"]
            }
          }, {
            png: {
              engine: "pngquant",
              command: ["--quality=20-50"]
            }
          }, {
            svg: {
              engine: "svgo",
              command: "--multipass"
            }
          }, {
            gif: {
              engine: "gifsicle",
              command: ["--colors", "64", "--use-col=web"]
            }
          }, function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
          });
          setTimeout(function () {
            unlink("".concat(directory, "/").concat(list[index]));
          }, 3000);
          console.log(list[index]);
          return _context.abrupt("return", Promise.all(unlinkPromises));

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

module.exports = toRun;