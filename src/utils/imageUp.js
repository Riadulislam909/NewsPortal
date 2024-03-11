export function getImageUrl(name) {
  //it's only work for vite- Url(file url, base url)
  return new URL(`/assets/${name}`, import.meta.url).href;
}
