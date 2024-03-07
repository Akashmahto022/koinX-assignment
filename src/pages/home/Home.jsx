import React from "react";
import './Home.css'
import AboutBitcoin from "../../components/about/AboutBitcoin";
import PriceChart from "../../components/price chart/PriceChart";
import FeaturedCard from "../../components/cards/FeaturedCard";
import TrendingCoins from "../../components/trending coins/TrendingCoins";
import Tokenomics from "../../components/tokenomics/Tokenomics";
import Team from "../../components/team/Team";
import YouMayAlsoLike from "../../components/you may also like/YouMayAlsoLike";
import AllTrendingCoins from "../../components/trending coins/AllTrendingCoins";
import Sentiments from "../../components/analysis/Sentiments";
import Performance from "../../components/performence/Performance";

const Home = () => {
  return (
    <div className="">
      <div className="mx-[56px] gap-4 sm:w-[300px] max-sm:ml-4">
        <div className="text-gray-500 mt-[14px]">
          Cryptocurrenices >> <span className="text-black"> Bitcoin</span>
        </div>
        <div className="flex justify-between mt-4 gap-4">
          <PriceChart/>
          <div className="mt-[-14px] max-sm:hidden">
            <FeaturedCard />
            <div className="mt-6">
              <TrendingCoins />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6 max-sm:hidden">
            <ul className="list-none flex gap-4 mx-4 text-[18px] font-[500] text-gray-600 cursor-pointer overscroll-x-hidden">
              <li className="text-blue-600 underline">Overview</li>
              <li className="">Fundamentals</li>
              <li className="">News Insights</li>
              <li className="">Sentiments</li>
              <li className="">Team</li>
              <li className="">Technicals</li>
              <li className="">Tokenomics</li>
            </ul>
          </div>
          <hr className=" w-[800px] mx-3 max-sm:w-[380px]"/>
        </div>
        <div>
          <Performance />
          <Sentiments />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
      </div>
      <div className="bg-white">
        <YouMayAlsoLike />
        <AllTrendingCoins />
      </div>
      <div className="m-[14px] sm:hidden">
            <FeaturedCard />
            <div className="mt-6 bg-white sm:hidden">
              <TrendingCoins />
            </div>
          </div>
    </div>
  );
};

export default Home;
