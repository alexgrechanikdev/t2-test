import { PRODUCT_DATA } from "../constants";
import type { IProduct } from "../types";

async function getArrayAsync(): Promise<Array<IProduct>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCT_DATA);
    }, 1000);
  });
}

export const fetchData = async (): Promise<Array<IProduct>> => {
  const res = await getArrayAsync();
  return res;
};
