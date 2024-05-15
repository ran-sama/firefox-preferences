# firefox-preferences
This repository is simply selecting better default parameters for [built-in anti-fingerprinting](https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargets.inc) features and re-enabling old UI and UX features that advanced users like. It also disconnects from services such as "safebrowsing", which are unecessary if you are using just Firefox and uBlock Origin, which already provide great online safety.

## How it works:

Whilst not going into details about all 300+ settings, which you can read in the commented [user.js](https://github.com/ran-sama/firefox-preferences/blob/master/user.js), here is just the anti-fingerprinting module explained:
```user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.overrides", "-AllTargets,+CSSDeviceSize,+JSDateTimeUTC,+FontVisibilityBaseSystem,+MediaDevices,+SpeechSynthesis,+WebGLRenderInfo,+JSLocale,+NavigatorHWConcurrency");
```
You can either disable all with ```-AllTargets``` and only enable select features with ```+Example1,+Example2,+...``` or you can enable all with ```+AllTargets``` and only disable select features with ```-Example1,-Example2,-...``` . The current selection is ```CSSDeviceSize``` to obfuscate unique screen resolutions, ```JSDateTimeUTC``` to spoof the timezone, ```FontVisibilityBaseSystem``` to hide non-stock OS fonts, ```MediaDevices``` to show a mic and camera as peripherals regardless if they are there or not (pretend to be a laptop), ```SpeechSynthesis``` which can reveal non-english users by foreign TTS voices, ```WebGLRenderInfo``` to hide your graphics vendor, ```JSLocale``` to pretend being en-US, ```NavigatorHWConcurrency``` to hide your most likely excessive unique thread count of your enthousiast CPU.  

A comprehensive list of all current options is in the collapsed code-box below which you can expand with the triangle:  
<details>
<summary>
Click me
</summary>

```
AllTargets
AudioContext
AudioSampleRate
CSSColorInfo
CSSDeviceSize
CSSInvertedColors
CSSPointerCapabilities
CSSPrefersColorScheme
CSSPrefersContrast
CSSPrefersReducedMotion
CSSPrefersReducedTransparency
CSSResolution
CSSVideoDynamicRange
CanvasExtractionBeforeUserInputIsBlocked
CanvasExtractionFromThirdPartiesIsBlocked
CanvasImageExtractionPrompt
CanvasRandomization
DOMStyleOsxFontSmoothing
DeviceSensors
FontVisibilityBaseSystem
FontVisibilityLangPack
FontVisibilityRestrictGenerics
FrameRate
Gamepad
HttpUserAgent
IsAlwaysEnabledForPrecompute
JSDateTimeUTC
JSLocale
JSMathFdlibm
KeyboardEvents
MediaCapabilities
MediaDevices
MediaError
MouseEventScreenPoint
NavigatorAppVersion
NavigatorBuildID
NavigatorConnection
NavigatorHWConcurrency
NavigatorOscpu
NavigatorPlatform
NavigatorUserAgent
PointerEvents
ReduceTimerPrecision
RoundWindowSize
ScreenAvailRect
ScreenOrientation
ScreenPixelDepth
ScreenRect
SiteSpecificZoom
SpeechSynthesis
StreamTrackLabel
StreamVideoFacingMode
TouchEvents
UseStandinsForNativeColors
VideoElementMozFrameDelay
VideoElementMozFrames
VideoElementPlaybackQuality
WebGLRenderCapability
WebGLRenderInfo
WidgetEvents
WindowDevicePixelRatio
WindowInnerScreenXY
WindowOuterSize
WindowScreenXY
```

</details>

## Maintaining privacy without being marked as bot:

![alt text[]()](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/test_may_2024.png)

Many cloud-based cyber security providers (you know which one) try to lock you out if you disable too many APIs in your browser (bot-like behaviour). Automatically denying access to an API is safer than disabling it, else websites may lock you out.

## Installation and directories:
on Windows
```
%appdata%\Mozilla\Firefox\profiles\
```
on Linux
```
~/.mozilla/firefox/<profile directory>
```

1) Close Firefox and move the user.js in your profile directory where the pref.js resides.
2) On the next start Firefox parses the settings of the user.js and writes them into your prefs.js 

## The Firefox 78 look is still possible with version 121

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/classic_look_102.png)

Follow these instructions to the letter to achieve it:
1) Leave "Proton" enabled in about:config, this way "Temporary Containers" can have the coloured underlines.
2) You must use the compact (dark) theme in customize toolbar menu.
3) Install this colour palette theme: [Classic Dark ESR 78](https://addons.mozilla.org/en-US/firefox/addon/classic-dark-esr-78/) or [Classic Dark ESR 78 Blue Tab](https://addons.mozilla.org/en-US/firefox/addon/classic-esr-78-blue-tab/)
4) You must use the userChrome.css provided in this repo with: [Aris-t2/CustomCSSforFx](https://github.com/Aris-t2/CustomCSSforFx/releases/tag/4.0.1) (tested with v4.0.1)

Future CustomCSSforFx versions may work as well, but may be subject to renamed configuration options.  
An optional [light theme](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/chrome/optional_light_theme.css) was added to be used with [ArcticFox Light Theme](https://addons.mozilla.org/en-US/firefox/addon/arcticfox-light-theme/).

## Useful Addons / Extensions

#### 1. uBlock Origin ([link](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)) or ([signed pre-releases](https://github.com/gorhill/uBlock/releases))
The last uncompromised adblocker.

#### 2. Smart HTTPS ([link](https://addons.mozilla.org/en-US/firefox/addon/smart-https-revived/))
This extension automatically changes HTTP web addresses to the secure HTTPS, whenever possible.

#### 3. I still don't care about cookies ([link](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/))
Must have for EU users, can automatically click GDPR cookie warnings now on sites that won't load without consent.

#### 4. Tampermonkey ([link](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)) or ([signed beta](https://www.tampermonkey.net/?browser=firefox))
Userscript manager with the best interface and editor. Use Violentmonkey if you want a FLOSS alternative. The beta has better cookie creation features.

#### 5. New Tab Override ([link](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/))
Fix for when Mozilla decided to hijack the new tab page to push their activity stream and pocket reader.

#### 6. Authenticator ([link](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/))
Generate login tokens based on HMAC (keyed-hash message authentication code). Has integrated QR reader to add accounts.

#### 7. Reload All Tabs ([link](https://addons.mozilla.org/en-US/firefox/addon/reload-all-tabs/))
Fix for when Mozilla decided to break workflow by doubling the amount of clicks to reload all tabs.

#### 8. Clickbait Remover for Youtube ([link](https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/))
Replaces thumbnails and modifies titles of videos on Youtube.

#### 9. Google Images Restored backup ([link](https://addons.mozilla.org/en-US/firefox/addon/google-images-restored-backup/))
Restores Google Images to how it appeared before August 6, 2019.

#### 10. Offline QR Code Generator ([link](https://addons.mozilla.org/en-US/firefox/addon/offline-qr-code-generator/))
This add-on allows you to quickly generate a QR code offline with the URL of the open tab or any (selected) other text.

#### 11. Close Tabs Shortcuts ([link](https://addons.mozilla.org/en-US/firefox/addon/close-tabs-shortcuts/))
Adds keyboard shortcuts for closing all not active tabs, all to the left of the active one, all to the right.

#### 12. Search by Image ([link](https://addons.mozilla.org/en-US/firefox/addon/search_by_image/))
A powerful reverse image search tool, with support for various search engines.

#### 13. Temporary Containers ([link](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/))
Prevent tracking by isolating tabs (and trackers inside them) from each other. Superior at clearing supercookies.

#### 14. uMatrix ([link](https://addons.mozilla.org/en-US/firefox/addon/umatrix/))
Powerful matrix based content blocker. For advanced users due to initial effort after installation.

#### 15. Downloads sidebar ([link](https://github.com/aesqe/firefox-downloads-sidebar/issues/24#issuecomment-1159643106))
Fix for when Mozilla decided it was a good idea to kill the sidebar for downloads.

#### 16. CanvasBlocker ([link](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/))
For experts only: Expect site breakage and maintaining whitelists. Randomizes Javascript APIs to prevent fingerprinting.

#### 17. Cookie Quick Manager ([link](https://addons.mozilla.org/en-US/firefox/addon/cookie-quick-manager/))
Fix for when Mozilla decided it was a good idea to make the user not see the content of individual cookies.

#### 18. Archive Page ([link](https://addons.mozilla.org/en-US/firefox/addon/archive-page/))
Archive webpage with archive.today

#### 19. View Image Context Menu Item ([link](https://addons.mozilla.org/en-US/firefox/addon/view-image-context-menu-item/))
Adds View Image to the image context menu.

#### 20. Stylus ([link](https://addons.mozilla.org/en-US/firefox/addon/styl-us/))
Redesign websites with Stylus and personalized CSS stylesheets.

#### 21. SponsorBlock ([link](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/))
Easily skip YouTube video sponsors.

#### 22. Don't "Accept" image/webp ([link](https://addons.mozilla.org/en-US/firefox/addon/dont-accept-webp/))
This extension removes image/webp from the list of formats Firefox tells sites that it accepts. 

#### 23. IndicateTLS ([link](https://addons.mozilla.org/en-US/firefox/addon/indicatetls/))
Displays negotiated SSL/TLS protocol version and additional security information in the address bar.

#### 24. Save webP as PNG or JPEG ([link](https://addons.mozilla.org/en-US/firefox/addon/save-webp-as-png-or-jpeg/))
Convert any image (WebP, AVIF, etc.) to PNG or JPEG (with choice of quality) for downloading.

## Structure of the profile directory

If you ever want to clean your profile, all of your important data can be reduced down to these files:

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_1.png)

Directories:
* chrome - stores Cascading Style Sheets that can alter the look of the UI and/or websites
* extensions - stores XPI archives (ZIP compressed) that contains your addons
* gmp-widevine - (optional) proprietary Digital Restrictions Management binaries for Netflix
* storage - important sqlite structure that contains all settings and data of your addons

Files:
* cert9.db - client certificates and CA certificates
* key4.db - contains data required to decrypt your stored passwords
* prefs.js - browser settings
* extension-preferences.json - permissions of extensions
* extensions.json - extension metadata
* extension-settings.json - controls activation state of addons
* logins.json - stores all your saved passwords
* xulstore.json - controls placements of UI elements like buttons of addons
* addonStartup.json.lz4 - compressed path info for extensions
* search.json.mozlz4 - search providers compressed with Mozilla's near proprietary implementation of LZ4
* cert_override.txt - (optional) surpresses certificate errors for sites you manually added as trustworthy
* favicons.sqlite - bookmark icons
* places.sqlite - bookmark database
* storage-sync-v2.sqlite - terrible addon devs store data here

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_2.png)

* userChrome.css - changes the style of the browser's UI
* userContent.css - changes styles of websites, like userthemes

## License
Licensed under the WTFPL license.
