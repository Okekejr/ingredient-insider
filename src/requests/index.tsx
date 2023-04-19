import { randomData } from "@/types";

export const RANDOM_DISH = "https://www.themealdb.com/api/json/v1/1/random.php";

export const SEARCH_DISH =
  "https://www.themealdb.com/api/json/v1/1/search.php?";

export const CATEGORIES_LIST =
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export const FILTERING_THINGS = (data: randomData, whatToFilter: string) => {
  const filtered = Object.keys(data)
    .map((key) => {
      if (key.startsWith(`str${whatToFilter}`)) {
        return data[key];
      }
      return null;
    })
    .filter((ingredient) => ingredient !== null && ingredient !== "");

  return filtered;
};
