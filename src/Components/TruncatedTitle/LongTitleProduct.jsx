import React from "react";

const LongTitleProduct = ({ title, maxLength }) => {
  const truncatedTitle =
    title.length > maxLength ? `${title.slice(0,maxLength)}...` : title;
  return (
    <div>
      <h1>{truncatedTitle}</h1>
    </div>
  );
};

export default LongTitleProduct;






