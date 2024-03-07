import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Section from '../section/Section';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);




    const fetchTrendingCoins = async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          setTrendingCoins(response.data.coins.slice(0, 3));
        } catch (error) {
          console.error("Error fetching trending coins:", error);
        }
      };

    useEffect(()=>{
        fetchTrendingCoins()
    },[])
  return (
    <Section className="trending-coins">
    <h1 className='text-black font-bold text-xl mb-4'>Trending Coins (24h)</h1>
    <ul>
      {trendingCoins.map((coin) => (

        <li key={coin.item.id} className="flex justify-between py-4 rounded-lg mb-2">
        <img src={coin.item.thumb} alt="coin logo" className='rounded-full w-8 mt-[-4px]'/>
          <p className="font-bold">{coin.item.name}</p>
          <p>({coin.item.symbol})</p>
          <div className='ml-[86px]'>
          <p className= {`mt-[-4px] px-2 rounded-md text-green-600 bg-green-100 pt-[8px]`} >{`^ ${coin.item.market_cap_rank}%`} </p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
  )
}

export default TrendingCoins
