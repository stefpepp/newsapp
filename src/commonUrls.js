export const API_KEY_PARAM = "apiKey=73152c9df6644822b2f8624181b8ee23"; //  //d01598dbacf94080a1676351d1d6fe1c
export const COUNTRY_PARAM = "country=";
export const CATEGORY_PARAM = "category=";
export const TOP_HEADLINES_URL = "http://newsapi.org/v2/top-headlines";
export const TOP_NEWS_US_URL = "http://newsapi.org/v2/top-headlines?country=us";
export const TOP_NEWS_GB_URL = "http://newsapi.org/v2/top-headlines?country=gb";

export function urlBuilder(url, ...args) {
  var tempUrl = url.concat("?");
  let first = true;
  args.forEach((arg) => {
    if (!first) {
      tempUrl = tempUrl.concat("&");
    }
    tempUrl = tempUrl.concat(arg);
    first = false;
  });
  return tempUrl;
}
