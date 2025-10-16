import type { IProduct } from "../types";

export const fetchData = async (): Promise<Array<IProduct>> => {
  const res = await fetch("../../data.json");
  const { data } = await res.json();
  return data;
};
