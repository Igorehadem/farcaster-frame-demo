// Utility helpers for Farcaster Frame project

export function getBaseUrl(req) {
  const url = new URL(req.url);
  return `${url.protocol}//${url.host}`;
}

export function getTimestamp() {
  return Date.now().toString();
}
