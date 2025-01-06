# PWA Splash Screen Generator

A CLI tool to automatically generate PWA splash screen images for all iOS and Android devices, supporting both local images and URLs as input sources.

## Features

- Generate splash screens for all iOS devices (iPhone, iPad)
- Support both portrait and landscape orientations
- Accept local image files or image URLs
- Maintain aspect ratios automatically
- Generate HTML markup for splash screens
- Built with Sharp for optimal image processing

## Requirements

### Image Dimensions

- Portrait: width ≥ 2084px, height ≥ 2796px
- Landscape: width ≥ 2796px, height ≥ 2084px

### System Requirements

- Node.js ≥ 14
- npm or pnpm package manager

## Installation

```bash
npm install -g pwa-image-generator
```

## Usage

Basic Command

```bash
pwa-gen-splash <landscape-image> <portrait-image>
```

Examples

```bash
# Using local images
pwa-gen-splash ./landscape.png ./portrait.png

# Using image URLs
pwa-gen-splash https://example.com/landscape.jpg https://example.com/portrait.jpg
```

## Implementation

- Copy generated splash-screens folder to your project root
- Add the generated HTML markup to your index.html

```html
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_14_Pro_Max_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_14_Pro_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_11__iPhone_XR_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/12.9__iPad_Pro_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/10.9__iPad_Air_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/10.5__iPad_Air_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/10.2__iPad_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
  href="<path>/splash_screens/8.3__iPad_Mini_landscape.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_14_Pro_Max_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_14_Pro_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_11__iPhone_XR_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/12.9__iPad_Pro_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/10.9__iPad_Air_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/10.5__iPad_Air_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/10.2__iPad_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
/>
<link
  rel="apple-touch-startup-image"
  media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  href="<path>/splash_screens/8.3__iPad_Mini_portrait.png"
/>
```

## Supported Devices

### iOS Devices

- iPhone 14 Pro Max
- iPhone 14 Pro
- iPhone 14 Plus
- iPhone 14
- iPhone 13 Series
- iPhone 12 Series
- iPhone 11 Series
- iPhone X/XS/XR
- iPad Pro (12.9", 11")
- iPad Air
- iPad Mini

## Technical Details

- [`sharp`](https://www.npmjs.com/package/sharp) for image processing
- [`image-downloader`](https://www.npmjs.com/package/image-downloader) for URL support

## License

MIT

## Author

@DinhThienPhuc
