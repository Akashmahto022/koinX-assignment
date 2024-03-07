import React from "react";

const Section = ({
  heading,
  children,
  className = "",
  bgColor = "bg-white",
  textColor = "text-gray-500",
  ...props
}) => {
  return (
    <div
      className={`inline-block bg-white rounded-md p-6 ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      <h1 className="text-black text-2xl font-bold">{heading}</h1>
      {children}
    </div>
  );
};

export default Section;
