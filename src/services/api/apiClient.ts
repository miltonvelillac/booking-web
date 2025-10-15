export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type FetchOptions = {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

export async function api(path: string, options: FetchOptions = {}) {
  const { method = 'GET', headers = {}, body } = options;
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${method} ${path} failed: ${res.status} ${text}`);
  }

  const contentType = res.headers.get('content-type') || '';
  return contentType.includes('application/json') ? res.json() : res.text();
}

