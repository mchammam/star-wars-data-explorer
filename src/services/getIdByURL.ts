export function getIdByURL(url: string): string {
  const id = url.split('/').at(-2);
  return id ? id : '0';
}
