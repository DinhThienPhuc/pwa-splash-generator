#!/usr/bin/env node

const sharp = require("sharp");

const [, , desktopImageUrl, tabletImageUrl, mobileImageUrl] = process.argv;

const desktopImage = new Image();
desktopImage.src = desktopImageUrl;

const tabletImage = new Image();
tabletImage.src = tabletImageUrl;

const mobileImage = new Image();
mobileImage.src = mobileImageUrl;
