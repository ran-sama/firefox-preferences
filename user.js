// Below are customized settings for myself, edit them to your liking before you enable
//user_pref("accessibility.typeaheadfind.flashBar", 0);
//user_pref("browser.bookmarks.defaultLocation", "menu________");
//user_pref("browser.cache.disk.parent_directory", "C:\\\\Users\\\\CENSORED\\\\AppData\\\\Local\\\\Temp\\\\firefox_cache");
//user_pref("browser.download.dir", "D:\\sorting");
//user_pref("browser.startup.homepage", "https://www.google.com/?hl=de&nfpr=1&safe=off");
//user_pref("browser.tabs.warnOnClose", true);
//user_pref("browser.toolbars.bookmarks.visibility", "always");
//user_pref("browser.uidensity", 1);
//user_pref("browser.urlbar.autoFill", false);
//user_pref("captivedetect.canonicalURL", "");
//user_pref("media.hardwaremediakeys.enabled", false);
//user_pref("network.dns.disableIPv6", true);
//user_pref("network.protocol-handler.external.mailto", false);
//user_pref("pdfjs.enabledCache.state", false);
//user_pref("pdfjs.migrationVersion", 2);
//user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
//user_pref("pdfjs.previousHandler.preferredAction", 4);
//user_pref("sidebar.position_start", false);
//user_pref("toolkit.winRegisterApplicationRestart", false);
//user_pref("ui.systemUsesDarkTheme", 0);

// Nuke high-entropy fingerprinting IDs on every launch
clearPref("app.installation.timestamp");//nanosecond precision timestamp for tracking
clearPref("app.normandy.user_id");
clearPref("browser.contextual-services.contextId");
clearPref("browser.newtabpage.activity-stream.impressionId");
clearPref("dom.push.userAgentID");
clearPref("toolkit.telemetry.cachedClientID");

// Remove Google implants in Firefox that rat out your browsing under the pretense of security
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Remove Newtab advertiser botnet that tries to monetize Firefox
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");

// Repair the URL-bar to a more sane behaviour
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.trimURLs", false);

// Spying and advertising
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.merino.endpointURL", "");

// Prevent Firefox 97 download behaviour change
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.alwaysOpenPanel", true);
user_pref("browser.download.improvements_to_download_panel", false);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);

// Clean full history manually with CTRL+SHIFT+DEL
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.sanitize.timeSpan", 0);

// Clean full history on exit
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Temporary allow cookies for functionality as they are cleared on exit and by addons anyway
user_pref("network.cookie.cookieBehavior", 0);
user_pref("network.cookie.lifetimePolicy", 2);

// HTML5 beacons, browser pings, captive portal, connection checks
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Disable Firefox telemetry implants from spying on your browser usage
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);

// No crash or error reporting
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Stop annoying pop-ups after updates informwing about new features
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Stop data leaks from search suggestions, webRTC and link prefetching
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.mode", 5);

// Disable the forced welcome page, "studies/experiments" and captive portal scanner
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.enabled", false);

// Disable bad extensions
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");

// Mitigate settings treating the user like a child
user_pref("devtools.selfxss.count", 10);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.laterrun.enabled", false);
user_pref("browser.search.update", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("dom.block_download_insecure", false);

// Disables tooltips, privacy leaking thumbnails, screenshots are local without upload, coverage ping
user_pref("browser.discovery.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.topsites.contile.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);

// Disable lockwise password generator and checking your passwords for leaks with a webservice
user_pref("signon.generation.enabled", false);
user_pref("signon.includeOtherSubdomainsInLookup", false);
user_pref("signon.management.page.breach-alerts.enabled", false);

// STOP THROTTLING HIGH-PERFORMANCE DESKTOPS YOU ABSOLUTE GOBSHITES
user_pref("media.decoder.skip-to-next-key-frame.enabled", false);
user_pref("network.http.throttle.enable", false);
user_pref("ui.caretBlinkCount", -1);
user_pref("widget.windows.window_occlusion_tracking.enabled", false);

/* Force hardware acceleration on a dedicated GPU
https://support.mozilla.org/en-US/kb/performance-settings */
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("layers.acceleration.disabled", false);

/* Prevent TLS 1.3 replay attacks through 0-RTT data, important read:
https://labs.portcullis.co.uk/presentations/playback-a-tls-1-3-story-2/
Also never downgrade your secure Firefox certs to Windows certs and AV vendor certs */
user_pref("security.tls.enable_0rtt_data", false);
user_pref("network.http.http3.enable_0rtt", false);
user_pref("security.enterprise_roots.enabled", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);

// Disable Notification API and Push Spam
user_pref("alerts.useSystemBackend", false);
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Enable Firefox's built in cookie banner auto-reject
user_pref("browser.promo.cookiebanners.enabled", true);
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// Deprecated from codebase thus probably not working in Firefox 121++
user_pref("dom.image-lazy-loading.enabled", false);
user_pref("media.suspend-bkgnd-video.enabled", false);
user_pref("security.family_safety.mode", 0);
user_pref("widget.windows.hide_cursor_when_typing", false);

// Firefox 116++ changes
user_pref("accessibility.force_disabled", 1);
user_pref("breakpad.reportURL", "");
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.theme.colorway-closet", false);
user_pref("browser.topsites.contile.endpoint", "");
user_pref("devtools.debugger.remote-enabled", false);
user_pref("extensions.quarantinedDomains.enabled", false);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("browser.tabs.cardPreview.enabled", false);

// Disable Firefox View and Sync
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-next", false);
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// New BS suggestions in Firefox 118+ to annoy users
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("signon.firefoxRelay.feature", "disabled");

// Allow only latin charset URLs to prevent phishing with exotic chars
user_pref("network.IDN_show_punycode", true);

// Annoying translation popup, toogle it manually with urlbar icon
user_pref("browser.translations.automaticallyPopup", false);

// Disable running unsafe scripts in PDFs
user_pref("pdfjs.enableScripting", false);

// Spellcheck everything
user_pref("layout.spellcheckDefault", 2);

// Mozilla has decided to deprecate compact mode and hide it
user_pref("browser.compactmode.show", true);

// Autoplay if tab gets into focus
user_pref("media.autoplay.default", 0);

// Disable the disgusting pingsender in Windows task scheduler
user_pref("default-browser-agent.enabled", false);

// Pressing Backspace will go back a page in the session history as it always has been 
user_pref("browser.backspace_action", 0);

// Hide the List All Tabs icon in Firefox 106
user_pref("browser.tabs.tabmanager.enabled", false);

/* ATTENTION! Check each setting carefully:
BELOW IS A SECTION WITH CHANGES THAT MIGHT BREAK STUFF */

/* Whilst no site requires WebGPU it is used already for tracking:
https://arxiv.org/abs/2401.04349 */
user_pref("dom.webgpu.enabled", false);

// Auto-reject access to Camera, Mic, VR, Geo, Notifications
user_pref("permissions.default.xr", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);

// Careful, this DISABLES all AUDIOCAPTURING and SCREENSHARING
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

// Careful, this DISABLES all PEERCONNECTIONS in WebRTC
user_pref("media.peerconnection.enabled", false);

// Blend in as American to evade tracking
user_pref("intl.accept_languages", "en-US, en");

/* Some new tracking protection methods to be tested
https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargets.inc */
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.overrides", "-AllTargets,+CSSDeviceSize,+JSDateTimeUTC,+FontVisibilityBaseSystem,+MediaDevices,+SpeechSynthesis,+WebGLRenderInfo,+JSLocale,+NavigatorHWConcurrency");

// If you are on Linux you can hide this fact as well
//user_pref("general.oscpu.override", "Windows NT 10.0; Win64; x64");
//user_pref("general.platform.override", "Win32");
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0");
