import { RANDOM_DISH } from "@/requests";
import { randomData } from "@/types";
import { Image, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { PopularFlex } from "../layout/popularFlex";

export const PopularMeals: FC = () => {
  const [dish, setDish] = useState<randomData[]>([]);

  const random = async () => {
    try {
      const newData = [];
      for (let i = 0; i < 9; i++) {
        const request = await fetch(RANDOM_DISH);
        const resp = await request.json();
        newData.push(resp.meals[0]);
      }

      setDish(newData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <PopularFlex>
      <>
        {dish.length
          ? dish.map((item, i) => {
              return (
                <Image
                  borderRadius="full"
                  borderColor="green.500"
                  borderWidth="2px"
                  boxSize="150px"
                  borderStyle="solid"
                  src={item.strMealThumb}
                  key={i}
                />
              );
            })
          : "...looks like something went wrong 😥"}
      </>
    </PopularFlex>
  );
};
