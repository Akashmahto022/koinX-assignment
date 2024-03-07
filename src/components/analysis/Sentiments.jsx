import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import InfoIcon from '@mui/icons-material/Info';

const Sentiments = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white w-[850px] rounded-md mt-6 p-4">
    <h1 className="text-2xl font-bold mb-3">Sentiment</h1>
    <h1 className="text-gray-700 font-semibold mb-3">Key Events <InfoIcon color="disabled"/></h1>
      <Carousel responsive={responsive}>
        <div className="flex bg-sky-100 w-[400px] p-4 gap-4 rounded-xl">
          <span className="p-4 rounded-full inline">
            <DescriptionOutlinedIcon color="primary"/>
          </span>
          <span>

          <h2 className="mb-4 text-black font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusamus quasi id!
          </h2>
          <p className="text-[12px] mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ipsa odit obcaecati sit, temporibus hic illum iusto cupiditate, non
            voluptate consequatur cumque architecto et dicta fugit beatae minus
            quas totam.
          </p>
          </span>
        </div>
        <div className="flex bg-sky-100 w-[400px] p-4 gap-4 rounded-xl">
          <span className="p-4 rounded-full inline">
            <CallMadeOutlinedIcon color="success"/>
          </span>
          <span>

          <h2 className="mb-4 text-black font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusamus quasi id!
          </h2>
          <p className="text-[12px] mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ipsa odit obcaecati sit, temporibus hic illum iusto cupiditate, non
            voluptate consequatur cumque architecto et dicta fugit beatae minus
            quas totam.
          </p>
          </span>
        </div>
        <div className="flex bg-sky-100 w-[400px] p-4 gap-4 rounded-xl">
          <span className="p-4 rounded-full inline">
            <CallMadeOutlinedIcon color="primary"/>
          </span>
          <span>

          <h2 className="mb-4 text-black font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusamus quasi id!
          </h2>
          <p className="text-[12px] mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ipsa odit obcaecati sit, temporibus hic illum iusto cupiditate, non
            voluptate consequatur cumque architecto et dicta fugit beatae minus
            quas totam.
          </p>
          </span>
        </div>
        <div className="flex bg-sky-100 w-[400px] p-4 gap-4 rounded-xl">
          <span className="p-4 rounded-full inline">
            <DescriptionOutlinedIcon color="primary"/>
          </span>
          <span>

          <h2 className="mb-4 text-black font-semibold text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusamus quasi id!
          </h2>
          <p className="text-[12px] mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ipsa odit obcaecati sit, temporibus hic illum iusto cupiditate, non
            voluptate consequatur cumque architecto et dicta fugit beatae minus
            quas totam.
          </p>
          </span>
        </div>
        
      </Carousel>
      <div>
    <h1 className="text-gray-700 font-bold mb-3 mt-6">Analyst Estimates <InfoIcon color="disabled"/></h1>
    <div className="flex gap-6">
        <h1 className="p-8 bg-green-100 rounded-full inline-block text-green-700 text-2xl font-bold">76%</h1>
        <div>
            <span className="flex gap-4 text-gray-500 font-semibold">
                Buy <hr className="w-[320px] border-t-[5px] border-green-500 my-3"/> 76%
            </span>
            <span className="flex gap-4 text-gray-500 font-semibold">
                Hold <hr className="w-[60px] border-t-[5px] border-gray-300 my-3"/> 76%
            </span>
            <span className="flex gap-4 text-gray-500 font-semibold">
                Sell <hr className="w-[120px] border-t-[5px] border-red-500 my-3"/> 76%
            </span>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Sentiments;
