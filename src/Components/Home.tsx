import React from "react";
import HomeBanner from "./HomeBanner";
import Catagory from "./Catagory";
import BestSellingProducts from "./BestSellingProducts";
import ItemForSale from "./ItemForSale";
import FeaturedProducts from "./FeaturedProducts";
import BannerAdd from "./BannerAdd";

function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Catagory></Catagory>
      <BestSellingProducts></BestSellingProducts>
      <ItemForSale></ItemForSale>
      <FeaturedProducts></FeaturedProducts>
      <BannerAdd></BannerAdd>
    </>
  );
}

export default Home;
