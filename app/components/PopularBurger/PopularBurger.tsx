"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[90%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {/* 1st PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="6"
            price="10.885"
          />
          {/* 2nd PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b2.png"
            reviews="6"
            price="10.885"
          />
          {/* 3rd PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b3.png"
            reviews="6"
            price="10.885"
          />
          {/* 4th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b4.png"
            reviews="6"
            price="10.885"
          />
          {/* 5th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b5.png"
            reviews="6"
            price="10.885"
          />
          {/* 6th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b6.png"
            reviews="6"
            price="10.885"
          />
          {/* 7th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b7.png"
            reviews="6"
            price="10.885"
          />
          {/* 8th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b8.png"
            reviews="6"
            price="10.885"
          />
          {/* 9th PopularBurger cart */}
          <BurgerCard
            title="Beefy Bite"
            image="/images/b9.png"
            reviews="6"
            price="10.885"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
