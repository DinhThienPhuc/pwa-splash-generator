#!/usr/bin/env node
import fs from "fs";
import download from "image-downloader";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { MAX_SIZE, SPLASH_IMAGES } from "../utils/constants.js";

const [, , landscapeImageUrl, portraitImageUrl] = process.argv;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __tempDirname = [...__dirname.split("/").slice(0, -1), "temp"].join("/");
const __currentDir = process.cwd();

const exec = async (url, orientation) => {
  let image = {
    filename: url,
  };
  if (!fs.existsSync(url)) {
    image = await download.image({
      url,
      dest: `./${__tempDirname}/${orientation}.png`,
    });
  }

  const metadata = await sharp(image.filename).metadata();

  if (
    MAX_SIZE[orientation].width > metadata.width ||
    MAX_SIZE[orientation].height > metadata.height
  ) {
    console.warn(
      `You need to provide a ${orientation} image with width greater than ${MAX_SIZE[orientation].width}px and height greater than ${MAX_SIZE[orientation].height}px`,
    );
    return;
  }

  if (
    metadata.format !== "png" &&
    metadata.format !== "jpg" &&
    metadata.format !== "jpeg"
  ) {
    console.warn("Only accept image with format jpg/jpeg/png");
    return;
  }

  const splashDir = `${__currentDir}/splash-screens`;
  if (!fs.existsSync(splashDir)) {
    fs.mkdirSync(splashDir);
  }

  SPLASH_IMAGES.filter((imageConfig) => {
    return imageConfig.orientation === orientation;
  }).forEach(async (imageConfig) => {
    try {
      const configRatio = imageConfig.width / imageConfig.height;
      const imageRatio = metadata.width / metadata.height;

      let option = null;
      if (imageRatio >= configRatio) {
        option = {
          left: Math.floor(
            (metadata.width - configRatio * metadata.height) / 2,
          ),
          width: Math.floor(configRatio * metadata.height),
          height: metadata.height,
          top: 0,
        };
      } else {
        option = {
          left: 0,
          width: metadata.width,
          height: Math.floor(metadata.width / configRatio),
          top: Math.floor((metadata.height - metadata.width / configRatio) / 2),
        };
      }

      await sharp(image.filename)
        .extract(option)
        .resize(imageConfig.width, imageConfig.height)
        .toFile(`${__currentDir}/splash-screens/${imageConfig.name}.png`);
    } catch (err) {
      console.error(err);
    }
  });
};

(async () => {
  await exec(landscapeImageUrl, "landscape");
  await exec(portraitImageUrl, "portrait");
})();
