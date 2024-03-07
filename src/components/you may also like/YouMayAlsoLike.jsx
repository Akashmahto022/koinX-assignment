import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const YouMayAlsoLike = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [trendingCoins, setTrendingCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setTrendingCoins(response.data.coins);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);
  return (
    <div className="bg-white mt-8 px-[60px] max-sm:px-0">
      <h1 className="p-8 text-2xl font-bold ">You May Also Like </h1>
      <div className="pl-[10px] max-sm:pl-[10px]">

      <Carousel responsive={responsive}>
        {trendingCoins.map((coin) => (
          <div
            key={coin.item.id}
            className="rounded-lg mr-2 border-2 p-4 w-[230px] max-sm:w-[170px]"
          >
            <div className="flex gap-2 max-sm:gap-1">
              <img src={coin.item.large} alt={coin.item.name} className="w-6" />
              <p className="font-bold">{coin.item.symbol}</p>
              <p className="mt-[-4px] px-2 rounded-md text-green-600 bg-green-100 pt-[8px]">
                {coin.item.market_cap_rank} Rank
              </p>
            </div>
            <div className="py-2">
              {/* Display price and price change */}
              {/* Use sparkline image for price graph */}
              <h2 className="text-xl text-black font-medium">
                ${coin.item.data.price_change_percentage_24h.usd.toFixed(3)}
              </h2>
              <img
                src={coin.item.data.sparkline}
                alt={`${coin.item.name} Sparkline`}
                className="mt-2 w-[140px] pl-[10px]"
              />
            </div>
          </div>
        ))}
      </Carousel>
      
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
