// Below are customized settings for myself, edit them to your liking before you enable
//user_pref("accessibility.typeaheadfind.flashBar", 0);
//user_pref("browser.bookmarks.defaultLocation", "menu________");
//user_pref("browser.cache.disk.parent_directory", "C:\\\\Users\\\\CENSORED\\\\AppData\\\\Local\\\\Temp\\\\firefox_cache");
//user_pref("browser.download.dir", "D:\\sorting");
//user_pref("browser.startup.homepage", "https://www.google.com/?hl=de&nfpr=1&safe=off&ucbcb=1");
//user_pref("browser.tabs.warnOnClose", true);
//user_pref("browser.toolbars.bookmarks.visibility", "always");
//user_pref("browser.uidensity", 1);
//user_pref("browser.urlbar.autoFill", false);
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
//user_pref("privacy.trackingprotection.cryptomining.enabled", false);
//user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", false);
//user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
//user_pref("privacy.trackingprotection.pbmode.enabled", false);

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
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");
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
user_pref("browser.urlbar.merino.endpointURL", "");
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);

// Prevent Firefox 97 download behaviour change
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.alwaysOpenPanel", true);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.improvements_to_download_panel", false);
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

// Enable Firefox's built in cookie banner auto-reject
user_pref("browser.promo.cookiebanners.enabled", true);
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// HTML5 beacons, browser pings, captive portal, connection checks
user_pref("beacon.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.send_pings", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("default-browser-agent.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Disable Firefox telemetry implants from spying on your browser usage
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.dap_helper", "");
user_pref("toolkit.telemetry.dap_leader", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

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
user_pref("browser.search.suggest.enabled.private", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.preconnect", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

/* DoH and ECH are good inventions, but the default providers have unclear privacy policies
0 = Firefox or Mozilla decides what is used
1 = ask System DNS + TRR and use the first result
2 = use TRR and System DNS only as fallback
3 = use only TRR if IP of the DoH server was found
4 = not used
5 = disabled due to the user's selection */
user_pref("network.trr.mode", 5);

// Disable the forced welcome page, studies and experiments
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.enabled", false);

// Disable bad extensions and restrictions
user_pref("extensions.experiments.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.quarantinedDomains.enabled", false);
user_pref("extensions.webextensions.restrictedDomains", "");

// Mitigate settings treating the user like a child
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.laterrun.enabled", false);
user_pref("browser.search.update", false);
user_pref("devtools.selfxss.count", 10);
user_pref("dom.block_download_insecure", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("security.family_safety.mode", 0);

// Allow customization of UI
user_pref("browser.compactmode.show", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disables tooltips, privacy leaking thumbnails, screenshots are local without upload, coverage ping
user_pref("browser.discovery.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.topsites.contile.enabled", false);
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

// Disable Notification API and Push Spam
user_pref("alerts.useSystemBackend", false);
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Disable Firefox View
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("browser.firefox-view.search.enabled", false);
user_pref("browser.firefox-view.virtual-list.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-newIcon", false);
user_pref("browser.tabs.firefox-view-next", false);

// Enrich your "experience" without suggestions and ads
user_pref("toolkit.shopping.environment", "");
user_pref("browser.shopping.experience2023.optedIn", 0);
user_pref("browser.shopping.experience2023.active", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.shopping.experience2023.ads.enabled", false);
user_pref("browser.shopping.experience2023.ads.userEnabled", false);
user_pref("browser.shopping.experience2023.survey.enabled", false);
user_pref("browser.shopping.experience2023.autoOpen.enabled", false);
user_pref("browser.shopping.experience2023.autoOpen.userEnabled", false);

// Ensure links opened from other applications don't end up in existing Temporary Containers
user_pref("browser.link.force_default_user_context_id_for_external_opens", true);

// Allow only latin charset URLs to prevent phishing with exotic chars
user_pref("network.IDN_show_punycode", true);

// Annoying translation popup, toogle it manually with urlbar icon
user_pref("browser.translations.automaticallyPopup", false);

// Disable running unsafe scripts in PDFs
user_pref("pdfjs.enableScripting", false);

// Spellcheck everything
user_pref("layout.spellcheckDefault", 2);

// Autoplay if tab gets into focus
user_pref("media.autoplay.default", 0);

// Pressing Backspace will go back a page in the session history as it always has been 
user_pref("browser.backspace_action", 0);

// Hide the List All Tabs icon in Firefox 106
user_pref("browser.tabs.tabmanager.enabled", false);

// Firefox Sync and Relay
user_pref("identity.fxaccounts.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");

// Disable promotional content
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.vpn_promo.enabled", false);

// Less BS from Mozilla
user_pref("accessibility.force_disabled", 1);
user_pref("breakpad.reportURL", "");
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.tabs.cardPreview.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.theme.colorway-closet", false);
user_pref("browser.topsites.contile.endpoint", "");
user_pref("devtools.debugger.remote-enabled", false);
user_pref("dom.image-lazy-loading.enabled", false);
user_pref("media.suspend-bkgnd-video.enabled", false);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("widget.windows.hide_cursor_when_typing", false);

/* How to completely destroy user trust and sink yourself:
https://blog.mozilla.org/en/products/firefox/firefox-search-update/
Don't want to share any of our private data, you absolute gobshites */
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("toolkit.shopping.ohttpRelayURL", "");
user_pref("toolkit.shopping.ohttpConfigURL", "");

/* ATTENTION! Check each setting carefully:
BELOW IS A SECTION WITH CHANGES THAT MIGHT BREAK STUFF */

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
user_pref("privacy.fingerprintingProtection.overrides", "-AllTargets,+CSSDeviceSize,+FontVisibilityBaseSystem,+MediaDevices,+SpeechSynthesis,+WebGLRenderInfo,+JSLocale,+NavigatorHWConcurrency");

/* https://searchfox.org/mozilla-release/source/toolkit/components/resistfingerprinting/FingerprintingWebCompatService.sys.mjs#22
[{"firstPartyDomain":"domain1.example.com","overrides":"-RuleA"},{"thirdPartyDomain":"domain2.example.com","overrides":"+RuleB"}]
Supported targets: firstPartyDomain, thirdPartyDomain, overrides */
//user_pref("privacy.fingerprintingProtection.granularOverrides", "[{\"firstPartyDomain\":\"cloudflare.com\",\"overrides\":\"+AllTargets\"},{\"thirdPartyDomain\":\"cloudflare.com\",\"overrides\":\"+AllTargets\"}]");

// If you are on Linux you can hide this fact as well
//user_pref("general.oscpu.override", "Windows NT 10.0; Win64; x64");
//user_pref("general.platform.override", "Win32");
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0");

/* Force hardware acceleration on a dedicated GPU
https://support.mozilla.org/en-US/kb/performance-settings */
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("layers.acceleration.disabled", false);

/* Whilst no site requires WebGPU it is used already for tracking:
https://arxiv.org/abs/2401.04349 */
user_pref("dom.webgpu.enabled", false);

// Never downgrade your secure Firefox certs to Windows certs and AV vendor certs
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.enterprise_roots.enabled", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);

/* https://labs.portcullis.co.uk/presentations/playback-a-tls-1-3-story-2/
Prevent TLS 1.3 replay attacks through 0-RTT data */
user_pref("security.tls.enable_0rtt_data", false);
user_pref("network.http.http3.enable_0rtt", false);

/* A Cross-Protocol Attack on the TLS Protocol (due to Google SSL False Start):
https://www.cosic.esat.kuleuven.be/publications/article-2216.pdf
extensions to the protocol such as the "False start" that try to reduce protocol round-trips by sending
the client's application data before the peer's finished message is verified, are at risk. This attack
may be used to obtain the encrypted client's data and decrypt it by calculating the shared key offline */
user_pref("security.ssl.enable_false_start", false);

/* Tracking Users across the Web via TLS Session Resumption:
https://arxiv.org/pdf/1810.07304v1.pdf
https://www.ssl.com/article/tracking-users-with-tls/
Their technique exploits the session resumption feature implemented in the TLS protocol */
user_pref("security.ssl.disable_session_identifiers", true);

// Require RFC 5746 to prevent MITM attacks
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Disable legacy cipher suites
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);//weak
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);//weak
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);//weak
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);//weak
user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false);//no forward secrecy
user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false);//no forward secrecy
user_pref("security.ssl3.rsa_aes_128_sha", false);//no forward secrecy
user_pref("security.ssl3.rsa_aes_256_sha", false);//no forward secrecy

// add search engines in about:preferences#search with aliases such as @myengine
user_pref("browser.urlbar.update2.engineAliasRefresh", true);

// New stuff
user_pref("browser.contentanalysis.default_allow", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("dom.min_background_timeout_value_without_budget_throttling", 0);
user_pref("dom.prefetch_dns_for_anchor_http_document", false);
user_pref("dom.prefetch_dns_for_anchor_https_document", false);
user_pref("dom.timeout.enable_budget_timer_throttling", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.prefetch_via_proxy", false);
user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);
user_pref("widget.windows.window_occlusion_tracking_display_state.enabled", false);
user_pref("widget.windows.window_occlusion_tracking_session_lock.enabled", false);
