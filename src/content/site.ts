/**
 * Pojedyncze miejsce z adresem domeny — do podmiany, gdy domena docelowa
 * zostanie przydzielona. Nic poza tym plikiem nie powinno zawierać
 * zapisanego na sztywno adresu.
 */
export const SITE_DOMAIN =
  process.env.NEXT_PUBLIC_SITE_DOMAIN?.trim() || "blimjoo.biz";

export const SITE_URL = `https://${SITE_DOMAIN}`;
export const CONTACT_EMAIL = `kontakt@${SITE_DOMAIN}`;

export const SITE_LOCALE = "pl_PL";
export const SITE_LANGUAGE = "pl";
