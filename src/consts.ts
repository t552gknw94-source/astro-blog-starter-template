export const SITE_TITLE = "Akai Milson";
export const SITE_DESCRIPTION =
	"Akai Milson teaches 11th Grade English and AP Seminar, and coaches varsity girls basketball, at Olympia High School.";
export const EMAIL = "info@akaimilson.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/akaimilson";
export const YOUTUBE_URL = "https://www.youtube.com/@akaimilson";
export const INSTAGRAM_URL = "https://www.instagram.com/_bigmil";
export const MAXPREPS_URL = "https://www.maxpreps.com/fl/orlando/olympia-titans/basketball/girls/";

/** Social profiles in display order: LinkedIn, YouTube, Instagram. */
export const SOCIAL_LINKS = [
	{ label: "LinkedIn", href: LINKEDIN_URL, contactLabel: "Connect on LinkedIn" },
	{ label: "YouTube", href: YOUTUBE_URL },
	{ label: "Instagram", href: INSTAGRAM_URL },
] as const;
export const SCHOOL = "Olympia High School";

export const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/teaching", label: "Teaching" },
	{ href: "/ap-seminar", label: "AP Seminar" },
	{ href: "/basketball", label: "Basketball" },
	{ href: "/resources", label: "Resources" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
] as const;

export function pageTitle(title: string) {
	return title === SITE_TITLE ? `${SITE_TITLE} · Helping Students Become Better Thinkers` : `${title} | ${SITE_TITLE}`;
}
