export const SPLASH_SEEN_KEY = 'elbondi-splash-seen'

/*
 * Runs before first paint so that, once the splash has been shown in this
 * browser session, full page loads hide it via CSS without a purple flash.
 * Lives outside the 'use client' splash module so the server layout receives
 * the actual string rather than a client reference.
 */
export const splashSeenScript = `try{if(sessionStorage.getItem('${SPLASH_SEEN_KEY}')){document.documentElement.dataset.splashSeen=''}}catch(e){}`
