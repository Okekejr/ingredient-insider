import { FC } from "react";
import { Footer } from "../footer";
import { Hero } from "../hero/hero";
import { PopularHero } from "../popularHero/popularHero";

const HomePage: FC = () => {
  return (
    <>
      <Hero mb={{ base: 12, md: 8 }} />
      <PopularHero mb={16} />
      <Footer />
    </>
  );
};

export default HomePage;
