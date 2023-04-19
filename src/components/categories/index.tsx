import { CATEGORIES_LIST } from "@/requests";
import { categoriesT } from "@/types";
import { FC, useEffect, useState } from "react";
import { Pills } from "./pills";

export const Categories: FC = () => {
  const [list, setList] = useState<categoriesT["meals"]>([]);

  useEffect(() => {}, []);

  const categoryRequest = async () => {
    try {
      const request = await fetch(CATEGORIES_LIST);
      const resp = await request.json();
      setList(resp.meals);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {list.length
        ? list.map((item, i) => {
            return <Pills data={item} key={i} mr={4} />;
          })
        : ""}
    </>
  );
};
