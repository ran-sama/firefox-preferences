// Nuke high-entropy fingerprinting IDs on every launch
clearPref("app.installation.timestamp");//nanosecond precision timestamp for tracking
clearPref("app.normandy.user_id");
clearPref("browser.contextual-services.contextId");
clearPref("browser.newtabpage.activity-stream.impressionId");
clearPref("browser.search.totalSearches");
clearPref("datareporting.dau.cachedUsageProfileGroupID");//defaults to b0ba-cafe, harmless, just in case it changes
clearPref("datareporting.dau.cachedUsageProfileID");//defaults to beef-beef, harmless, just in case it changes
clearPref("nimbus.profileId");
clearPref("toolkit.telemetry.cachedClientID");
clearPref("toolkit.telemetry.cachedProfileGroupID");

/*
  CLEANING SECTION
  CLEANING SECTION
  CLEANING SECTION

  Sanitize history on Exit (hope you have bookmarks and know your logins)
*/

// Allow cookies because they are cleaned on exit or blocked by uBlock Origin and uMatrix anyway
user_pref("network.cookie.cookieBehavior", 0);
user_pref("network.cookie.lifetimePolicy", 2);

// Clean full history manually with CTRL+SHIFT+DEL
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", true);
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.clearHistory.cookiesAndStorage", true);
user_pref("privacy.clearHistory.formData", true);
user_pref("privacy.clearHistory.formdata", true);//because moz needed the setting twice with lowercase
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.clearHistory.siteSettings", true);

// Clean full history in settings menu
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", true);
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", true);
user_pref("privacy.clearSiteData.formData", true);
user_pref("privacy.clearSiteData.formdata", true);//because moz needed the setting twice with lowercase
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearSiteData.siteSettings", true);
user_pref("privacy.clearSiteDataHeader.cache.enabled", true);
user_pref("privacy.clearSiteDataHeader.cache.bfcache.enabled", true);//navigation back forward cache

// Clean full history on exit
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.formData", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);//because moz needed the setting twice with lowercase
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", true);
user_pref("privacy.history.custom", true);

// Sanitize settings
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.sanitize.cpd.hasMigratedToNewPrefs2", true);
user_pref("privacy.sanitize.cpd.hasMigratedToNewPrefs3", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs2", true);
user_pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs3", true);
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);//use old dialog below

// Old clear history dialog
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.openWindows", false);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);

/*
  DISCONNECT SECTION
  DISCONNECT SECTION
  DISCONNECT SECTION

  Prevent connecting to services that snoop on you with no real benefit
*/

// Disable Newtab advertisements trying to monetize Firefox
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.contextualContent.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.contextualContent.fakespot.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.endpoint", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.placements.spocs", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.placements.tiles", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.cards.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.cards.thumbsUpDown.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.interestPicker.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.user.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.topicSelection.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.shortcuts.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.startupCache.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.topicLabels.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.inferredpersonalizationfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.trendingsearchfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.weatherfeed", false);
user_pref("browser.newtabpage.activity-stream.newtabAdSize.billboard", false);
user_pref("browser.newtabpage.activity-stream.newtabAdSize.leaderboard", false);
user_pref("browser.newtabpage.activity-stream.newtabLogo.aprilfools", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customColor.enabled", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.system.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
user_pref("browser.newtabpage.activity-stream.weather.locationSearchEnabled", false);

// Remove Google implants that inspect your browsing under the pretense of security
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

// Disable Firefox telemetry implants that collect data how you use your browser
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.dap.helper.hpke", "");
user_pref("toolkit.telemetry.dap.helper.url", "");
user_pref("toolkit.telemetry.dap.leader.hpke", "");
user_pref("toolkit.telemetry.dap.leader.url", "");
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.dap_helper", "");
user_pref("toolkit.telemetry.dap_helper_owner", "");
user_pref("toolkit.telemetry.dap_leader", "");
user_pref("toolkit.telemetry.dap_leader_owner", "");
user_pref("toolkit.telemetry.dap_task1_enabled", false);
user_pref("toolkit.telemetry.dap_visit_counting_enabled", false);
user_pref("toolkit.telemetry.dap_visit_counting_experiment_list", "[]");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "data:, ");//dummy endpoint
user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);//seems to also scrape drivers in about:third-party
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.user_characteristics_ping.opt-out", true);

/* User tracking for ad companies:
https://web.archive.org/web/20240606001047/https://github.com/mozilla/explainers/tree/main/ppa-experiment
https://web.archive.org/web/20240514152430/https://blog.mozilla.org/en/products/firefox/firefox-search-update/
https://web.archive.org/web/20240617084245/https://blog.mozilla.org/en/mozilla/mozilla-anonym-raising-the-bar-for-privacy-preserving-digital-advertising/
Verdict: Clown feature to tell advertisers if their trash loaded */
user_pref("browser.search.serpMetricsRecordedCounter", 0);
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);

// Disable "enterprise" DLP (data loss prevention) agent, basically a remote sniffer in companies
user_pref("browser.contentanalysis.default_allow", false);
user_pref("browser.contentanalysis.default_result", 0);
user_pref("browser.contentanalysis.enabled", false);
user_pref("browser.contentanalysis.interception_point.clipboard.enabled", false);
user_pref("browser.contentanalysis.interception_point.drag_and_drop.enabled", false);
user_pref("browser.contentanalysis.interception_point.file_upload.enabled", false);
user_pref("browser.contentanalysis.interception_point.print.enabled", false);
user_pref("browser.contentanalysis.interception_point.download.enabled", false);
user_pref("browser.contentanalysis.max_connections", 0);

/* More user tracking with pretend protection privacy:
https://web.archive.org/web/20231012132638/https://blog.mozilla.org/en/products/firefox/partnership-ohttp-prio/
Verdict: Clown feature for advertisers, simply send NO data at all */
user_pref("network.trr.use_ohttp", false);
user_pref("network.trr.ohttp.uri", "");
user_pref("network.trr.ohttp.relay_uri", "");
user_pref("network.trr.ohttp.config_uri", "");
user_pref("toolkit.shopping.ohttpConfigURL", "");
user_pref("toolkit.shopping.ohttpRelayURL", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.ohttp.configURL", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.ohttp.relayURL", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.ohttp.enabled", false);
user_pref("browser.urlbar.merino.ohttpConfigURL", "");
user_pref("browser.urlbar.merino.ohttpRelayURL", "");

// Clown feature: Mozilla Ad Routing Service (MARS) aka unified ads service
user_pref("toolkit.shopping.environment", "");
user_pref("browser.shopping.experience2023.active", false);
user_pref("browser.shopping.experience2023.ads.enabled", false);
user_pref("browser.shopping.experience2023.ads.userEnabled", false);
user_pref("browser.shopping.experience2023.autoOpen.enabled", false);
user_pref("browser.shopping.experience2023.autoOpen.userEnabled", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.shopping.experience2023.optedIn", 0);
user_pref("browser.shopping.experience2023.survey.enabled", false);
user_pref("browser.shopping.experience2023.shoppingSidebar", false);
user_pref("browser.shopping.experience2023.integratedSidebar", false);
user_pref("browser.shopping.experience2023.autoClose.userEnabled", false);
user_pref("toolkit.shopping.experience2023.defr", false);

// No crash or error reporting
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);

/*
  DISABLED FEATURES SECTION
  DISABLED FEATURES SECTION
  DISABLED FEATURES SECTION

  Turn off useless extensions and features
*/

// Disable studies and experiments
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
user_pref("extensions.recommendations.hideNotice", true);
user_pref("extensions.webextensions.restrictedDomains", "");

/* When they have to call themselves "trustworthy" you need to run away:
https://web.archive.org/web/20240223051719/https://blog.mozilla.ai/introducing-mozilla-ai-investing-in-trustworthy-ai/
Verdict: Generative AI tech bro crap */
user_pref("extensions.ml.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.checkForMemory", false);
user_pref("browser.ml.linkPreview.optin", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.provider", "");
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.chat.prompt.prefix", "");
user_pref("browser.ml.chat.prompts.0", "");
user_pref("browser.ml.chat.prompts.1", "");
user_pref("browser.ml.chat.prompts.2", "");
user_pref("browser.ml.chat.prompts.3", "");
user_pref("browser.ml.chat.prompts.4", "");
user_pref("browser.ml.modelHubRootUrl", "");

// Urlbar anti-features
user_pref("browser.urlbar.merino.endpointURL", "");
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("browser.urlbar.yelp.mlEnabled", false);
user_pref("browser.urlbar.yelp.serviceResultDistinction", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.amp.featureGate", false);

// Urlbar self-promotion
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);

// Urlbar privacy settings
user_pref("browser.urlbar.recentsearches.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.groupLabels.enabled", false);

// Urlbar annoyances
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);

// Urlbar suggestion spam
user_pref("browser.urlbar.quicksuggest.contextualOptIn.sayHello", false);
user_pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", false);
user_pref("browser.urlbar.quicksuggest.contextualOptIn", false);//cringe
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.mlEnabled", false);
user_pref("browser.urlbar.quicksuggest.sponsoredIndex", -1);
user_pref("browser.urlbar.suggest.amp", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.fakespot", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.yelp", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

// Disable promotional content
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.vpn_promo.enabled", false);

/*
  NETWORK SECTION
  NETWORK SECTION
  NETWORK SECTION

  Custom DNS behaviour and anti-prefetching
*/

/* DoH and ECH are good inventions, but the default providers have unclear privacy policies
0 = Firefox or Mozilla decides what is used
1 = ask System DNS + TRR and use the first result
2 = use TRR and System DNS only as fallback
3 = use only TRR if IP of the DoH server was found
4 = not used
5 = disabled due to the user's selection */
user_pref("network.trr.mode", 5);
user_pref("network.trr.confirmation_telemetry_enabled", false);

// Stop data leaks from search suggestions, webRTC and link prefetching
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("dom.prefetch_dns_for_anchor_http_document", false);
user_pref("dom.prefetch_dns_for_anchor_https_document", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.prefetch_via_proxy", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.preconnect", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

/*
  PERFORMANCE SECTION
  PERFORMANCE SECTION
  PERFORMANCE SECTION

  Stop stutter and turn off trashy laptop optimizations
*/

// Prevent memory leaks and high RAM usage
user_pref("accessibility.force_disabled", 1);

// These are currently disabled by default, but interesting for the future
//user_pref("dom.input_events.canSuspendInBCG.enabled", false);
//user_pref("dom.suspend_inactive.enabled", false);
//user_pref("media.test.video-suspend", false);

// STOP THROTTLING PLAYBACK HIGH-PERFORMANCE DESKTOPS
//user_pref("media.decoder.skip_when_video_too_slow_ms", 2500);
user_pref("media.decoder.skip-to-next-key-frame.enabled", false);
user_pref("media.suspend-background-video.delay-ms", 900000);
user_pref("media.suspend-background-video.enabled", false);
user_pref("media.suspend-bkgnd-video.enabled", false);
user_pref("widget.windows.window_occlusion_tracking.enabled", false);
user_pref("widget.windows.window_occlusion_tracking_display_state.enabled", false);
user_pref("widget.windows.window_occlusion_tracking_session_lock.enabled", false);

// Visual annoyances
user_pref("browser.spin_cursor_while_busy", false);
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("ui.caretBlinkCount", -1);

// This is known to cause media stutter if true, can they not do that?
user_pref("network.http.throttle.enable", false);

// Keep tabs loaded and blazing fast when selected
user_pref("browser.tabs.unloadOnLowMemory", false);

/*
  CRYPTOGRAPHY SECTION
  CRYPTOGRAPHY SECTION
  CRYPTOGRAPHY SECTION

  No AV vendor MITM certs, no 0-RTT replay attacks, no downgrades, no session trackers
*/

/* Disable legacy cipher suites, 0x9c is needed for Mega and Gibson Research to work
If a site doesn't work get the cipher name here https://www.ssllabs.com/ssltest/
And to test Firefox https://www.ssllabs.com/ssltest/viewMyClient.html */
//user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);//weak, 0xc009, off in 144
//user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);//weak, 0xc00a, off in 144
//user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);//weak, 0xc013
//user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);//weak, 0xc014
//user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false);//no FS, 0x9c
//user_pref("security.ssl3.rsa_aes_128_sha", false);//no FS, 0x2f
//user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false);//no FS, 0x9d
//user_pref("security.ssl3.rsa_aes_256_sha", false);//no FS, 0x35

// Use only secure Firefox NSS certs and ignore Wndows or AV vendor certs that MITM you
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
//user_pref("security.ssl.disable_session_identifiers", true);

// Post-quantum KEM (key encapsulation methods) and smaller certs
user_pref("network.http.http3.enable_kyber", true);
user_pref("security.tls.enable_kyber", true);
user_pref("security.tls.enable_certificate_compression_abridged", true);

// Expand cert errors and allow to set exceptions
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.certerrors.permanentOverride", false);

// Do not show "Not Secure" text for HTTP pages, we know this
user_pref("security.insecure_connection_text.enabled", false);
user_pref("security.insecure_connection_text.pbmode.enabled", false);

// Never downgrade TLS to deprecated 1.0 and 1.1 protocols
user_pref("security.tls.version.enable-deprecated", false);

// Require RFC 5746 to prevent MITM attacks
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

/*
  ANTI-FINGERPRINTING SECTION
  ANTI-FINGERPRINTING SECTION
  ANTI-FINGERPRINTING SECTION

  Use state of the art methods to be less identifiable
*/

// Fingerprinting device features
user_pref("media.devices.enumerate.legacy.enabled", false);
user_pref("permissions.media.query.enabled", false);

// Blend in as American to evade tracking
user_pref("intl.accept_languages", "en-US, en");

/* Some new tracking protection methods to be tested
https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargets.inc */
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);
user_pref("privacy.fingerprintingProtection.overrides", "-AllTargets,+CSSDeviceSize,+ScreenAvailRect,+ScreenRect,+WindowOuterSize,+CanvasRandomization,+FontVisibilityBaseSystem,+MediaDevices,+SpeechSynthesis,+WebGLRenderInfo,+JSLocale,+NavigatorHWConcurrency");

/* https://searchfox.org/mozilla-release/source/toolkit/components/resistfingerprinting/FingerprintingWebCompatService.sys.mjs#22
[{"firstPartyDomain":"domain1.example.com","overrides":"-RuleA"},{"thirdPartyDomain":"domain2.example.com","overrides":"+RuleB"}]
Supported targets: firstPartyDomain, thirdPartyDomain, overrides */
//user_pref("privacy.fingerprintingProtection.granularOverrides", "[{\"firstPartyDomain\":\"cloudflare.com\",\"overrides\":\"+AllTargets\"},{\"thirdPartyDomain\":\"cloudflare.com\",\"overrides\":\"+AllTargets\"}]");

// If you are on Linux you can hide this fact as well
//user_pref("general.oscpu.override", "Windows NT 10.0; Win64; x64");
//user_pref("general.platform.override", "Win32");
//user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0");

/* Whilst no site requires WebGPU it is used already for tracking:
https://arxiv.org/abs/2401.04349 */
user_pref("dom.webgpu.enabled", false);

/*
  DISABLED FIREFOX FEATURES SECTION
  DISABLED FIREFOX FEATURES SECTION
  DISABLED FIREFOX FEATURES SECTION

  May break FX accounts, firefox view, relay and features that are useless
*/

// Disable lockwise password generator and checking your passwords for leaks with a webservice
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.generation.enabled", false);
user_pref("signon.includeOtherSubdomainsInLookup", false);
user_pref("signon.management.page.breach-alerts.enabled", false);

// Hide Mozilla account panels when sync is disabled
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
user_pref("identity.fxaccounts.toolbar.syncSetup.enabled", false);
user_pref("identity.fxaccounts.toolbar.syncSetup.panelAccessed", false);

// Disable Firefox View
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("browser.firefox-view.search.enabled", false);
user_pref("browser.firefox-view.virtual-list.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-newIcon", false);
user_pref("browser.tabs.firefox-view-next", false);

// AI chat spyware sidebar
user_pref("sidebar.visibility", "hide-sidebar");
user_pref("sidebar.main.tools", "");
user_pref("sidebar.revamp", false);
user_pref("sidebar.verticalTabs", false);
user_pref("sidebar.animation.duration-ms", 0);
user_pref("sidebar.animation.enabled", false);

// Disable running unsafe scripts and ML spying in PDFs
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.enableML", false);
user_pref("pdfjs.enableAltText", false);
user_pref("pdfjs.enableAltTextModelDownload", false);
user_pref("pdfjs.enableGuessAltText", false);
user_pref("pdfjs.enableNewAltTextWhenAddingImage", false);

/*
  UI/UX IMPROVEMENT SECTION
  UI/UX IMPROVEMENT SECTION
  UI/UX IMPROVEMENT SECTION

  Better defaults for the interface and experience
*/

// Allow customization of UI
user_pref("browser.compactmode.show", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Prevent Firefox 97 download behaviour change
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.alwaysOpenPanel", true);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.improvements_to_download_panel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// No dumb full-screen warnings
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", -1);

// Stop annoying pop-ups after updates informing about new features
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Mitigate settings treating the user like a child
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.laterrun.enabled", false);
user_pref("browser.search.update", false);
user_pref("devtools.selfxss.count", 10);
user_pref("dom.block_download_insecure", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("security.family_safety.mode", 0);

// Disables tooltips, privacy leaking thumbnails, screenshots are local without upload, coverage ping
user_pref("browser.discovery.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.topsites.contile.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("browser.history.collectWireframes", false);

// Disable Notification API spam
user_pref("alerts.useSystemBackend", false);
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.webnotifications.privateBrowsing.enabled", false);

// Do not launch with windows
user_pref("browser.startup.windowsLaunchOnLogin.enabled", false);
user_pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", true);

// Condensed settings that all need their own explanation
user_pref("breakpad.reportURL", "");//disables about:crashes and reporting to breakpad
user_pref("browser.backspace_action", 0);//old normal backspace behaviour for history 
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);//block AV DLLs on about:third-party
user_pref("browser.link.force_default_user_context_id_for_external_opens", true);//external links open in new containers
user_pref("browser.search.widget.inNavBar", false);//navigation bar search widget or whatever
user_pref("browser.tabs.tabmanager.enabled", false);//hide the List All Tabs icon in Firefox 106
user_pref("browser.translations.automaticallyPopup", false);//tame translation popup, toogle manually with urlbar icon
user_pref("browser.urlbar.trimHttps", false);//show full HTTPS indicator
user_pref("browser.urlbar.trimURLs", false);//urlbar do no trim URLs
user_pref("browser.urlbar.update2.engineAliasRefresh", true);//search engine aliases such as (at)myengine
user_pref("general.smoothScroll", false);//no more rubberbanding jerky scrolling in the viewport
user_pref("layout.spellcheckDefault", 2);//spellcheck everything
user_pref("media.autoplay.default", 0);//autoplay if tab gets into focus
user_pref("network.http.basic_http_auth.enabled", true);//still allow legacy authentication
user_pref("network.IDN_show_punycode", true);//allow only latin charset URLs to prevent phishing with exotic chars
user_pref("network.security.ports.banned.override", "0-65535");//allow any port besides 80 and 443

// No ugly hover thumbnails and verbose text on tab mouseover
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

// Crisp clean GDI classic windows fonts
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "Arial,Consolas,Courier New,Microsoft Sans Serif,Segoe UI,Tahoma,Trebuchet MS,Verdana");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 15);

// No picture in picture for media playback
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Disable remotely toggled "experiments"
user_pref("messaging-system.rsexperimentloader.collection_id", "");
user_pref("messaging-system.rsexperimentloader.enabled", false);

/* Nimbus implant telemetry:
Feature API in Desktop Firefox to run experiments, set values remotely, and manage user preferences */
user_pref("nimbus.profilesdatastoreservice.enabled", false);
user_pref("nimbus.profileId", "");
user_pref("nimbus.profilesdatastoreservice.read.enabled", false);
user_pref("nimbus.profilesdatastoreservice.sync.enabled", false);
user_pref("nimbus.debug", false);
user_pref("nimbus.validation.enabled", false);
user_pref("nimbus.telemetry.targetingContextEnabled", false);
user_pref("startup.homepage_override_nimbus_disable_wnp", true);

/* Allowed Advertising and tracking called Smartblock:
https://web.archive.org/web/20241222152319/https://support.mozilla.org/en-US/kb/smartblock-enhanced-tracking-protection
Verdict: Seems not very smart to use at all */
user_pref("extensions.webcompat.smartblockEmbeds.enabled", false);

// "Smart" means AI tech bro features, which are not very smart to use
user_pref("browser.newtabpage.activity-stream.feeds.smartshortcutsfeed", false);
user_pref("browser.newtabpage.activity-stream.images.smart", false);
user_pref("browser.tabs.groups.smart.optin", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("browser.tabs.groups.smart.searchTopicEnabled", false);

/* A Firefox Suggestion for desktop from adMarketplace
https://searchfox.org/mozilla-central/source/mobile/android/android-components/components/feature/fxsuggest/README.md
Never change, Mozilla.. */
user_pref("browser.urlbar.quicksuggest.ampMatchingStrategy", 0);
user_pref("browser.urlbar.quicksuggest.ampTopPickCharThreshold", 0);

/*
  BREAKAGE SECTION
  BREAKAGE SECTION
  BREAKAGE SECTION

  CAREFUL! Breaks insecure sites, webcam, mic and screensharing
*/

// Auto-reject access to Camera, Mic, VR, Geo, Notifications
user_pref("permissions.default.xr", 2);//virtual reality
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);

// Careful, this DISABLES all AUDIOCAPTURING and SCREENSHARING
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

// Careful, this DISABLES all PEERCONNECTIONS in WebRTC
user_pref("media.peerconnection.enabled", false);

// Block Google as new geolocation provider
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_geoclue", false);

// HTML5 beacons, browser pings, captive portal, connection checks
user_pref("beacon.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.send_pings", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("default-browser-agent.enabled", false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.DNS_HTTPS.domain", "");
user_pref("network.connectivity-service.enabled", false);

/*
  PERSONAL SECTION
  PERSONAL SECTION
  PERSONAL SECTION

  Personal settings that I don't want to force on anyone


user_pref("browser.bookmarks.defaultLocation", "menu________");
user_pref("browser.cache.disk.parent_directory", "C:\\\\Users\\\\REDACTED\\\\AppData\\\\Local\\\\Temp\\\\firefox_cache");
user_pref("browser.download.dir", "D:\\sorting");
user_pref("browser.newtabpage.trainhopAddon.xpiBaseURL", "");
user_pref("browser.screenshots.dir", "D:\\sorting");
user_pref("browser.screenshots.folderList", 2);
user_pref("browser.startup.homepage", "https://www.google.com/?hl=en&nfpr=1&safe=off&udm=14");
user_pref("browser.tabs.groups.enabled", false);
user_pref("browser.tabs.unloadTabInContextMenu", false);
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.translations.enable", false);
user_pref("browser.uidensity", 1);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.unitConversion.enabled", false);
user_pref("devtools.chrome.enabled", true);
user_pref("dom.security.https_only_mode", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.webgpu.service-workers.enabled", false);
user_pref("extensions.ui.lastCategory", "addons://updates/recent");
user_pref("layout.css.scrollbar-width-thin.disabled", true);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.visible", false);
user_pref("media.hardwaremediakeys.enabled", false);
user_pref("network.dns.disableIPv6", true);
user_pref("network.protocol-handler.external.mailto", false);
user_pref("pdfjs.enabledCache.state", false);
user_pref("pdfjs.migrationVersion", 2);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
user_pref("pdfjs.previousHandler.preferredAction", 4);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
//user_pref("reader.character_spacing", 1);
//user_pref("reader.color_scheme", "custom");
//user_pref("reader.content_width", 5);
//user_pref("reader.custom_colors.background", "#e6dcd2");
//user_pref("reader.line_height", 2);
//user_pref("reader.word_spacing", 1);
user_pref("sidebar.position_start", false);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("ui.systemUsesDarkTheme", 0);
user_pref("browser.newtabpage.enabled", false);
// Test if forcing hw accel vs recommended defaults has noticable effects on a mem leak
user_pref("layers.acceleration.disabled", false);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
// The following settings fix a massive memory leak with AMD drivers, thanks for nothing Moz
user_pref("media.hevc.enabled", false);//disable Moz's broken HW decoding causing RAM+VRAM leak
//user_pref("dom.media.webcodecs.h265.enabled", true);//HEVC SW decoding doesn't work despite MS store codec
//user_pref("media.gpu-process-decoder", false);//fallback that keeps most functionality
//user_pref("media.hardware-video-decoding.enabled", false);//fallback that cripples all hw accel
//user_pref("media.hardware-video-decoding.force-enabled", false);//fallback that cripples all hw accel
user_pref("media.mkv.enabled", true);
*/
// We already declined the spying, thus we accept all TOS versions until 2030 to stop the nagging
user_pref("browser.termsofuse.prefMigrationCheck", true);
user_pref("termsofuse.acceptedDate", "1900000000000");
user_pref("termsofuse.acceptedVersion", 9999);

/* Limit allowed addons to single value or sum of values:
1  = Profile
2  = User
4  = Application
8  = System
16 = Temporary */
//user_pref("extensions.enabledScopes", 1);//this disables built-in addons hidden in omni.ja
//user_pref("extensions.autoDisableScopes", 15);//default value

// Uncategorized BS, please check yourself
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.search.totalSearches", 0);
user_pref("browser.tabs.cardPreview.enabled", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.theme.colorway-closet", false);
user_pref("browser.topsites.contile.endpoint", "");
user_pref("devtools.debugger.remote-enabled", false);
user_pref("network.http.network_error_logging.enabled", false);
user_pref("security.csp.reporting.enabled", false);
user_pref("sidebar.expandOnHover", false);
user_pref("sidebar.notification.badge.aichat", false);
user_pref("sidebar.revamp.defaultLauncherVisible", false);
user_pref("toolkit.aboutLogging.uploadProfileToCloud", false);
user_pref("widget.windows.hide_cursor_when_typing", false);

// Push API is needed for CRLite, clearing to default values
clearPref("dom.push.connection.enabled");
clearPref("dom.push.enabled");
clearPref("dom.push.serverURL");

// Firefox 143+ changes
user_pref("browser.taskbarTabs.enabled", false);//introduces new URI bar button
user_pref("browser.contextual-services.contextId.rotation-in-days", 1);//default 15 days in 144
user_pref("browser.ml.pageAssist.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.promoCard.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.promoCard.visible", false);
user_pref("browser.tabs.groups.hoverPreview.enabled", false);
user_pref("browser.urlbar.market.featureGate", false);
user_pref("browser.urlbar.importantDates.featureGate", false);
user_pref("browser.urlbar.suggest.importantDates", false);
user_pref("browser.urlbar.suggest.realtimeOptIn", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.dailyBrief.enabled", false);
user_pref("browser.search.suggest.ohttp.featureGate", false);
user_pref("browser.urlbar.suggest.yelpRealtime", false);
user_pref("browser.urlbar.yelpRealtime.featureGate", false);

// Whether container scroll-state queries are enabled
user_pref("layout.css.scroll-state.enabled", false);

// Disable Mozilla's VPN offer
user_pref("browser.ipProtection.enabled", false);
user_pref("browser.ipProtection.guardian.endpoint", "");

// Auto-decline websites to access you LAN and localhost or shortcut creation
user_pref("permissions.default.localhost", 2);
user_pref("permissions.default.local-network", 2);
user_pref("permissions.default.shortcuts", 2);
//user_pref("permissions.desktop-notification.postPrompt.enabled", true);
//user_pref("permissions.desktop-notification.notNow.enabled", false);
//user_pref("permissions.fullscreen.allowed", false);

// Remove new Google "safe"-browsing implants, we have uBlock Origin bad hosts already
user_pref("browser.safebrowsing.provider.google5.enabled", false);
user_pref("browser.safebrowsing.provider.google5.gethashURL", "");
user_pref("browser.safebrowsing.provider.google5.lists", "");
user_pref("browser.safebrowsing.provider.google5.updateURL", "");

// Don't allow clipboard data to be copied to the clipboard history/cloud, WTF Moz?
user_pref("clipboard.copyPrivateDataToClipboardCloudOrHistory", false);

/* Discontinued officially by Mozilla in January and May 2025
To avoid issues by now broken rules these prefs will be cleared
EasyList+uBO cookies works, AdGuard cookies had site breakage */
clearPref("browser.promo.cookiebanners.enabled", true);
clearPref("cookiebanners.ui.desktop.enabled", true);
clearPref("cookiebanners.service.mode", 2);
clearPref("cookiebanners.service.mode.privateBrowsing", 2);
clearPref("cookiebanners.bannerClicking.enabled", true);
clearPref("cookiebanners.cookieInjector.enabled", true);

// Firefox 145 changes
user_pref("browser.ml.smartAssist.endpoint", "");
user_pref("browser.ml.smartAssist.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.onDemand", false);
user_pref("browser.newtabpage.activity-stream.system.showWeatherOptIn", false);
user_pref("browser.newtabpage.activity-stream.weather.optInAccepted", false);
user_pref("browser.newtabpage.activity-stream.weather.staticData.enabled", false);
user_pref("browser.profiles.forceEnableRefresh", false);
user_pref("browser.search.visualSearch.featureGate", false);
user_pref("browser.urlbar.trustPanel.featureGate", false);
user_pref("places.semanticHistory.featureGate", false);

// Disable creepy "Digital Identity wallets"
user_pref("privacy.wallet_schemes", "");

/* Monitor changes to reader settings, etc
reader.character_spacing
reader.word_spacing
sidebar.animation.expand-on-hover.delay-duration-ms
*/
