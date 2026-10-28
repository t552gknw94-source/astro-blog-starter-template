type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

/** Inlined at build time from astro.config.mjs. True when public/akai-portrait.jpg exists. */
declare const __HAS_PORTRAIT__: boolean;
