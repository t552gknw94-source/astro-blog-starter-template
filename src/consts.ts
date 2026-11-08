export const SITE_TITLE = "Akai Milson";
export const SITE_DESCRIPTION =
	"Akai Milson teaches 11th Grade English and AP Seminar at Olympia High School, designs inquiry-driven curriculum, and helps students think and write with clarity.";
export const EMAIL = "info@akaimilson.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/akaimilson";
export const SCHOOL = "Olympia High School";

export const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/teaching", label: "Teaching" },
	{ href: "/ap-seminar", label: "AP Seminar" },
	{ href: "/resources", label: "Resources" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
] as const;

export function pageTitle(title: string) {
	return title === SITE_TITLE ? `${SITE_TITLE} · Helping Students Become Better Thinkers` : `${title} | ${SITE_TITLE}`;
}
