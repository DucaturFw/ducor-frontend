export const urlPropsToObject = (url: string): object =>
  url.split('?')[1] ? url.split('?')[1].split('&').reduce((prev, curr) =>
    ({ ...prev, [curr.split('=')[0]]: decodeURIComponent(curr.split('=')[1]) }), {}) :
    {}