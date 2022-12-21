import React from "react";
import {BsChevronRight} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import{BsChevronLeft} from 'react-icons/bs'

const HouseInfo = (props) => {
  return (
    <div className="house-section">
      <div className="">
        <img src={props.info.imageFile} alt="house picture" className="house-img" />
        <div className="house-hover-button">
            <BsHeart/>
            <BsChevronLeft/>
          <BsChevronRight />
         

        </div>
      </div>

      <div className="house-info">
        <div className=" row-1">
          <div className="address">{props.info.address}</div>
          <div className="star">{props.info.star}</div>
          <div className="price">{props.info.price}</div>
        </div>
      </div>
    </div>
  );
};
export default HouseInfo;
