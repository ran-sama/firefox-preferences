# firefox-preferences
This repository is simply selecting better default parameters for [built-in anti-fingerprinting](https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargets.inc) features and re-enabling old UI and UX features that advanced users like. It also disconnects from services such as "safebrowsing", which are unnecessary if you are using just Firefox and uBlock Origin, which already provide great online safety.

## How it works

Whilst not going into details about all 300+ settings, which you can read in the commented [user.js](https://github.com/ran-sama/firefox-preferences/blob/master/user.js), here is just the anti-fingerprinting module explained:
```user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.overrides", "-AllTargets,+CSSDeviceSize,+JSDateTimeUTC,+FontVisibilityBaseSystem,+MediaDevices,+SpeechSynthesis,+WebGLRenderInfo,+JSLocale,+NavigatorHWConcurrency");
```
You can either disable all with ```-AllTargets``` and only enable select features with ```+Example1,+Example2,+...``` or you can enable all with ```+AllTargets``` and only disable select features with ```-Example1,-Example2,-...``` . The current selection is ```CSSDeviceSize``` to obfuscate unique screen resolutions, ```JSDateTimeUTC``` to spoof the timezone, ```FontVisibilityBaseSystem``` to hide non-stock OS fonts, ```MediaDevices``` to show a mic and camera as peripherals regardless if they are there or not (pretend to be a laptop), ```SpeechSynthesis``` which can reveal non-english users by foreign TTS voices, ```WebGLRenderInfo``` to hide your graphics vendor, ```JSLocale``` to pretend being en-US, ```NavigatorHWConcurrency``` to hide your most likely excessive unique thread count of your enthusiast CPU.  

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
DiskStorageLimit
FontVisibilityBaseSystem
FontVisibilityLangPack
FontVisibilityRestrictGenerics
FrameRate
Gamepad
HttpUserAgent
IsAlwaysEnabledForPrecompute
JSDateTimeUTC
JSLocale
JSLocalePrompt
JSMathFdlibm
KeyboardEvents
MaxTouchPoints
MaxTouchPointsCollapse
MediaCapabilities
MediaDevices
MediaError
MouseEventScreenPoint
NavigatorAppVersion
NavigatorBuildID
NavigatorHWConcurrency
NavigatorOscpu
NavigatorPlatform
NavigatorUserAgent
NetworkConnection
PointerEvents
PointerId
ReduceTimerPrecision
RoundWindowSize
ScreenAvailRect
ScreenAvailToResolution
ScreenOrientation
ScreenPixelDepth
ScreenRect
SiteSpecificZoom
SpeechSynthesis
StreamVideoFacingMode
TouchEvents
UseHardcodedFontSubstitutes
UseStandinsForNativeColors
VideoElementMozFrameDelay
VideoElementMozFrames
VideoElementPlaybackQuality
WebCodecs
WebGLRenderCapability
WebGLRenderInfo
WebGPUIsFallbackAdapter
WebGPULimits
WebGPUSubgroupSizes
WebVTT
WidgetEvents
WindowDevicePixelRatio
WindowInnerScreenXY
WindowOuterSize
WindowScreenXY
```

</details>

## Site specific rules

For convenience [granular targets](https://searchfox.org/mozilla-release/source/toolkit/components/resistfingerprinting/FingerprintingWebCompatService.sys.mjs#22) can be set without having to change a setting for every website. This allows enabling or disabling specific rules for 1st and third-party domains.


```
[
   {
      "firstPartyDomain":"domain1.example.com",
      "overrides":"+Example1"
   },
   {
      "thirdPartyDomain":"domain2.example.com",
      "overrides":"-Example2"
   }
]
```
Minified:
```
[{"firstPartyDomain":"domain1.example.com","overrides":"+Example1"},{"thirdPartyDomain":"domain2.example.com","overrides":"-Example2"}]
```
You need valid JSON (RFC 8259) formatting, if set via ```about:config``` you don't have to escape characters and Firefox will automatically escape them in the ```prefs.js``` for you.

```
user_pref("privacy.fingerprintingProtection.granularOverrides", "[{\"firstPartyDomain\":\"abrahamjuliot.github.io\",\"overrides\":\"+JSDateTimeUTC\"}]");
```

## Minimizing metadata without being marked as bot

![alt text[]()](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/test_may_2024.png)

Many cloud-based cyber security providers (you know which one) try to lock you out if you disable too many APIs in your browser (bot-like behaviour). Automatically denying access to an API is safer than disabling it, whilst still not sending any sensitive data about your client.

![alt text[]()](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/blocked_not_disabled.png)

Allow me to illustrate why this behaviour looks way more "human" to a tracking script:  

If a website checks Firefox it will reply with "geolocation supported", however the readout is automatically blocked and the browser only returns "denied by user". This is the same outcome as in a real user interaction, when the access pop-up is rejected.

## Installation and directories
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

## The Firefox 78 look is still possible with version 150+

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/refs/heads/master/images/classic_look_141_test.png)

Follow these instructions to the letter to achieve it:
1) Leave "Proton" enabled in about:config, this way "Temporary Containers" can have the coloured underlines.
2) You must use the compact (dark) theme in customize toolbar menu.
3) Install this colour palette theme: [Classic Dark ESR 78](https://addons.mozilla.org/en-US/firefox/addon/classic-dark-esr-78/) or [Classic Dark ESR 78 Blue Tab](https://addons.mozilla.org/en-US/firefox/addon/classic-esr-78-blue-tab/)
4) To work, the provided userChrome.css requires: [Aris-t2/CustomCSSforFx](https://github.com/Aris-t2/CustomCSSforFx/releases/tag/4.5.4) (FF150 works fine with v4.5.4)

Future CustomCSSforFx versions may work as well, but may be subject to renamed configuration options.  
An optional [light theme](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/chrome/optional_light_theme.css) was added to be used with [ArcticFox Light Theme](https://addons.mozilla.org/en-US/firefox/addon/arcticfox-light-theme/).

## Useful Addons / Extensions

#### 1. uBlock Origin ([link](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)) or ([signed pre-releases](https://github.com/gorhill/uBlock/releases))
The last uncompromised adblocker.

#### 2. Smart HTTPS ([link](https://addons.mozilla.org/en-US/firefox/addon/smart-https-revived/))
This extension automatically changes HTTP web addresses to the secure HTTPS, whenever possible.

#### 3. Tampermonkey ([link](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)) or ([signed beta](https://www.tampermonkey.net/?browser=firefox))
Userscript manager with the best interface and editor. Use Violentmonkey if you want a FLOSS alternative. The beta has better cookie creation features.

#### 4. New Tab Override ([link](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/))
Fix for when Mozilla decided to hijack the new tab page to push their activity stream and pocket reader.

#### 5. Authenticator ([link](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/))
Generate login tokens based on HMAC (keyed-hash message authentication code). Has integrated QR reader to add accounts.

#### 6. User-Agent Switcher ([link](https://addons.mozilla.org/en-US/firefox/addon/uaswitcher/))
Easily override the browser's User-Agent string.

#### 7. Clickbait Remover for YouTube ([link](https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/))
Replaces thumbnails and modifies titles of videos on YouTube.

#### 8. Offline QR Code Generator ([link](https://addons.mozilla.org/en-US/firefox/addon/offline-qr-code-generator/))
This add-on allows you to quickly generate a QR code offline with the URL of the open tab or any (selected) other text.

#### 9. Close Tabs Shortcuts ([link](https://addons.mozilla.org/en-US/firefox/addon/close-tabs-shortcuts/))
Adds keyboard shortcuts for closing all not active tabs, all to the left of the active one, all to the right.

#### 10. Search by Image ([link](https://addons.mozilla.org/en-US/firefox/addon/search_by_image/))
A powerful reverse image search tool, with support for various search engines.

#### 11. Temporary Containers ([link](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/))
Prevent tracking by isolating tabs (and trackers inside them) from each other. Superior at clearing supercookies.

#### 12. uMatrix ([link](https://addons.mozilla.org/en-US/firefox/addon/umatrix/))
Powerful matrix based content blocker. For advanced users due to initial effort after installation.

#### 13. Downloads sidebar ([signed backup](https://github.com/aesqe/firefox-downloads-sidebar/issues/24#issuecomment-1159643106))
Fix for when Mozilla decided it was a good idea to kill the sidebar for downloads.

#### 14. View Image Context Menu Item ([link](https://addons.mozilla.org/en-US/firefox/addon/view-image-context-menu-item/))
Adds View Image to the image context menu.

#### 15. Cookie Quick Manager ([link](https://addons.mozilla.org/en-US/firefox/addon/cookie-quick-manager/))
Fix for when Mozilla decided it was a good idea to make the user not see the content of individual cookies.

#### 16. LocalStorage Editor ([link](https://addons.mozilla.org/en-US/firefox/addon/localstorage-editor/))
Add, edit, copy, remove, export and import local and session storage data.

#### 17. Web Archives ([link](https://addons.mozilla.org/en-US/firefox/addon/view-page-archive/))
View archived and cached versions of web pages on 10+ search engines, such as the Wayback Machine, Archive․is, Google, Bing and Yandex.

#### 18. Stylus ([link](https://addons.mozilla.org/en-US/firefox/addon/styl-us/))
Redesign websites with Stylus and personalized CSS stylesheets.

#### 19. SponsorBlock ([link](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/))
Easily skip YouTube video sponsors.

#### 20. Don't "Accept" image/webp ([link](https://addons.mozilla.org/en-US/firefox/addon/dont-accept-webp/))
This extension removes image/webp from the list of formats Firefox tells sites that it accepts. 

#### 21. IndicateTLS ([link](https://addons.mozilla.org/en-US/firefox/addon/indicatetls/))
Displays negotiated SSL/TLS protocol version and additional security information in the address bar.

#### 22. Save webP as PNG or JPEG ([link](https://addons.mozilla.org/en-US/firefox/addon/save-webp-as-png-or-jpeg/))
Convert any image (WebP, AVIF, etc.) to PNG or JPEG (with choice of quality) for downloading.

#### 23. YouTube No Translation ([link](https://addons.mozilla.org/en-US/firefox/addon/youtube-no-translation/))
Keep YouTube content (titles, audio tracks, descriptions) in the original language.

#### 24. Disable Page Visibility API (Android compatible) ([link](https://addons.mozilla.org/en-US/firefox/addon/disable_page_visibility_api/))
Firefox add-on to disable the Page Visibility API. This prevents e.g. video conferencing systems from tracking whether you are currently in another window.

#### 25. ff2mpv (for Windows) ([link](https://addons.mozilla.org/en-US/firefox/addon/ff2mpv-for-windows/)) you need to ([set this](https://kb.mozillazine.org/Register_protocol#Windows))
Send videos from Firefox to the mpv player using a toolbar button, context menu or keyboard shortcut (Ctrl+Shift+Space).

#### 26. Don't track me Google ([link](https://addons.mozilla.org/en-US/firefox/addon/dont-track-me-google1/))
Removes the annoying link-conversion at Google Search / maps / ...

#### 27. British English Dictionary (Marco Pinto) ([link](https://addons.mozilla.org/en-US/firefox/addon/british-english-dictionary-2/))
British Dictionary with 140,000+ words for basic literacy and washed online discourse.

## Hidden settings

```
https://searchfox.org/mozilla-central/source/netwerk/base/nsIOService.cpp#115
user_pref("network.security.ports.banned.override", "0-65535");
https://searchfox.org/mozilla-central/search?q=network.security.ports.banned.override&path=&case=false&regexp=false
https://searchfox.org/mozilla-esr60/source/dom/ipc/ContentPrefs.cpp#283
```
For some peculiar reason certain settings these days are split and later concatenated/compared via ```strcmp``` making a search in source code hard. In consideration of them being searchable in past (ESR 60) this has a certain ring to it.  

## Enterprise Policies
```
https://searchfox.org/mozilla-central/source/browser/components/enterprisepolicies/schemas/policies-schema.json#177
https://searchfox.org/mozilla-central/source/browser/locales/en-US/browser/policies/policies-descriptions.ftl#46
```
In the optional directory of this repo is a registry file for Windows, as some settings can be also disabled for extra safety via an enterprise policy. You can review these in ```about:policies``` if any are set.  
```
DisablePocket
DisableProfileRefresh
DisableTelemetry
DisableFirefoxStudies
ImportEnterpriseRoots
etc.
```
Here is a selection I deemed safe to upload, there are many more. If you don't like bad anti-virus software install their terrible AV certs you can block hostile certs with ```ImportEnterpriseRoots``` set to disabled. It should be clear that Firefox brings all the required approved and safe certs with their own NSS library. Any software that messes with the browser is snake oil.

## Structure of the profile directory

If you ever want to clean your profile, all of your important data can be reduced down to these files:

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_1_new.png)

Directories:
* chrome - stores Cascading Style Sheets that can alter the look of the UI and/or websites
* extensions - stores XPI archives (ZIP compressed) that contains your addons
* extension-store-menus - NEW hipster binary swamp to store your extension's menus!
* extension-store-permissions - NEW hipster binary swamp to store your extension's permissions!
* gmp-gmpopenh264 - (optional) proprietary AVC codec for video calls and WebRTC
* gmp-widevine - (optional) proprietary Digital Restrictions Management binaries for streaming services
* storage - important SQLite structure that contains all settings and data of your addons

Files:
* cert9.db - client certificates and CA certificates
* key4.db - contains data required to decrypt your stored passwords
* prefs.js - browser settings
* extensions.json - extension metadata
* extension-settings.json - controls activation state of addons
* handlers.json - preferences how to open or save specific file formats
* logins.json - stores all your saved passwords
* xulstore.json - controls placements of UI elements like buttons of addons
* addonStartup.json.lz4 - compressed path info for extensions
* search.json.mozlz4 - search providers compressed with Mozilla's near proprietary implementation of LZ4
* favicons.sqlite - bookmark icons
* places.sqlite - bookmark database
* storage-sync-v2.sqlite - terrible addon devs store data here

![alt text](https://raw.githubusercontent.com/ran-sama/firefox-preferences/master/images/profile_structure_2.png)

* userChrome.css - changes the style of the browser's UI
* userContent.css - changes styles of websites akin to userstyles

## License
Licensed under the WTFPL license.
