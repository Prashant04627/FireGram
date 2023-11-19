import React from "react";

const ImageView = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if(e.target.classList.contains("background-img"))
    setSelectedImg(null);
  };
  return (
    <div onClick={handleClick} className="background-img">
      <img className="enlarged-img" src={selectedImg} alt="enlarged pic"></img>
    </div>
  );
};

export default ImageView;
