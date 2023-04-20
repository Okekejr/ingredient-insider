import { CATEGORIES_DISHES, CATEGORIES_LIST } from "@/requests";
import { categoriesT, MealsT } from "@/types";
import { SlideFade } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Badge } from "../badge";
import { PopularFlex } from "../layout/popularFlex";
import { SearchCard } from "../search";

export const CategoriesList: FC = () => {
  const [list, setList] = useState<categoriesT["meals"]>([]);
  const [searchT, setSearchT] = useState<MealsT["meals"]>([]);

  useEffect(() => {
    categoryRequest();
  }, []);

  const categoryRequest = async () => {
    try {
      const request = await fetch(CATEGORIES_LIST);
      const resp = await request.json();
      setList(resp.meals);
    } catch (error) {
      alert(error);
    }
  };

  const searchRequest = async (searchText: string | undefined) => {
    try {
      const request = await fetch(`${CATEGORIES_DISHES}c=${searchText}`);
      const resp = await request.json();
      setSearchT(resp.meals);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {list.length
        ? list.map((item, i) => {
            return (
              <Badge newData={item} searchFunc={searchRequest} key={i} mr={4} />
            );
          })
        : ""}

      <PopularFlex w={{ base: "100%" }} mt={{ base: 4, md: 8 }}>
        {searchT.length
          ? searchT.map((item) => {
              return (
                <SlideFade in offsetY="20px" delay={0.2}>
                  <SearchCard data={item} key={item.idMeal} />
                </SlideFade>
              );
            })
          : ""}
      </PopularFlex>
    </>
  );
};

{
  /*  */
}
