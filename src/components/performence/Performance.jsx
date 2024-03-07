import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Section from '../section/Section';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InfoIcon from '@mui/icons-material/Info';


const Performance = () => {
    const [coinsData, setCoinsData] = useState([]);

    const fetchTrendingCoins = async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          setCoinsData(response.data.coins.slice(0, 1));
        } catch (error) {
          console.error("Error fetching trending coins:", error);
        }
      };

    useEffect(()=>{
        fetchTrendingCoins()
    },[])
  return (
    <div className='mt-3'>
    
      <Section heading={"Performance"}>
      <div className='w-[800px]'>
                <div className='flex gap-4 mt-4'>
                    <span>
                        <h1>Today's Low</h1>
                        <p className='m-2 text-gray-600 font-semibold'>85,522.55</p>
                    </span>
                    <hr className='w-[550px] h-1 my-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow'/>
                    <span>
                    <h1>Today's High</h1>
                        <p className='m-2 text-gray-600 font-semibold'>95,552.15</p>
                    </span>
                </div>
                <div className='flex gap-4 mt-4'>
                    <span>
                        <h1>52W Low</h1>
                        <p className='m-2 text-gray-600 font-semibold'>85,522.55</p>
                    </span>
                    <hr className='w-[550px] h-1 my-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow'/>
                    <span>
                    <h1>52W High</h1>
                        <p className='m-2 text-gray-600 font-semibold'>95,552.15</p>
                    </span>
                </div>
                <div className='text-center absolute top-[1124px] left-[520px]'>
                    <ArrowDropUpIcon/>
                    <h2 className='font-semibold'>$56,586.63</h2>
                </div>
                <hr />
        {coinsData.map((coins, index)=>(
            <div key={index} className='mt-4'>
                <h1 className='text-xl font-bold text-black'>Fundamentals <InfoIcon color="disabled"/> </h1>
                <div className='flex justify-between pl-8 pr-12 mt-4'>
                    <div className=''>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>Bitcoin Price</h1>
                            <p className='text-black font-medium'>${coins.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>24 Low / 24 High</h1>
                            <p className='text-black font-medium'>{coins.item.data.total_volume}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>7d Low 7d High</h1>
                            <p className='text-black font-medium'>{coins.item.data.total_volume}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>Trading Volume</h1>
                            <p className='text-black font-medium'>${coins.item.data.market_cap}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>Market Cap Rank</h1>
                            <p className='text-green-600 font-medium'>#{coins.item.market_cap_rank}</p>
                        </span>
                        <hr className='my-4'/>
                    </div>
                    <div className=''>
                        <span className='flex justify-between gap-[130px]'>
                            <h1>Market Cap</h1>
                            <p className='text-black font-medium'>{coins.item.data.market_cap}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[50px]'>
                            <h1>Market Cap Dominance</h1>
                            <p className='text-black font-medium'>${coins.item.data.market_cap_btc}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[50px]'>
                            <h1>Volume / Market Cap</h1>
                            <p className='text-black font-medium'>${coins.item.data.market_cap_btc}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[50px]'>
                            <h1>All Time High</h1>
                            <p className='text-black font-medium'>${coins.item.data.total_volume_btc}</p>
                        </span>
                        <hr className='my-4'/>
                        <span className='flex justify-between gap-[100px]'>
                            <h1>All Time Low</h1>
                            <p className='text-black font-medium'>{coins.item.data.price}</p>
                        </span>
                        <hr className='my-4'/>
                    </div>
                    
                </div>
            </div>
        ))}
        </div>
      </Section>
    </div>
  )
}

export default Performance
