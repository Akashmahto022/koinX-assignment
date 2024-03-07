import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../section/Section";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const PriceChart = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  const changeClass = bitcoinData && bitcoinData.usd_24h_change < 0 ? 'bg-red-300 text-red-600' : 'bg-green-300 text-green-700';

  const fetchBitcoinData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
      );
      setBitcoinData(response.data.bitcoin);
    } catch (error) {
      console.error("Error fetching Bitcoin data:", error);
    }
  };

  useEffect(() => {
    fetchBitcoinData();
  }, []);
  return (
    <Section className="price-section font-sans	font-semibold text-gray-700 text-[18px]">
      <div className="flex gap-2 mb-4">
        <img
          src={
            "data:image/png;base64,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"
          }
          alt=""
          className="w-[30px] h-[32px] mt-2"
        />
        <h2 className="text-[30px] font-bold mb-4 ">
          Bitcoin{" "}
          <span className="text-gray-500 font-semibold text-[18px] font-sans">
            BTC
          </span>
        </h2>
      </div>
      <button className="bg-gray-500 text-[16px] px-3 py-2 ml-6 text-white rounded absolute top-[156px] left-[260px]">
        Rank #1
      </button>
      {bitcoinData && (
        <div className="p-4 rounded-lg">
        <div className="flex gap-4">
          <h1 className="mb-2 text-3xl text-black">${bitcoinData.usd}</h1>
          <p className= {`${changeClass} mt-[0px] px-2 rounded-md text-red-700 pt-[8px]`} >{`${bitcoinData.usd_24h_change.toFixed(2)}%`} </p>
          <p className="mt-[8px]">(24h)</p>
        </div>
          <p className="mb-2 text-[14px]"><CurrencyRupeeOutlinedIcon/> {bitcoinData.inr}</p>
        </div>
      )}
      <hr />
      {/* TradingView chart widget for BTCUSD */}
      <div className="tradingview-widget-container mt-4">
      <h1 className="mb-2">Bitcoin Price Chart (USD)</h1>
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8a9f5&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
          
          className="w-[800px] h-[600px] border-0 max-sm:w-[380px]"
          title="BTCUSD Chart"
        ></iframe>
      </div>
    </Section>
  );
};

export default PriceChart;
