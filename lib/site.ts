const DEFAULT_SITE_URL = 'https://www.florafaunachile.cl';

function normalizeSiteUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL);
export const SITE_NAME = 'FloraFauna';