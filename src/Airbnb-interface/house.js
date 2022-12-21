import React from "react";
import HouseInfo from "./detail";

const names = [
    { imageFile :"https://a0.muscache.com/im/pictures/ab4eeac8-b337-4456-951d-2a1df7dc1074.jpg?im_w=720",
      
       address: 'Cabin . RockBridge ', star: '★ 4',
      price:'$673 night'},
      
      { imageFile :"https://a0.muscache.com/im/pictures/4316b6ec-2afd-4d03-bc3e-8b2887304fc3.jpg?im_w=1200",
      address: '2814 Brindle , WI',
      star: ' ★ 4.96',
      price:'$673 night' },
      { imageFile :"https://a0.muscache.com/im/pictures/e7e72c42-3268-4e06-992b-bb75b6aa0a00.jpg?im_w=1200",
      address: '2814 Brindle , WI',
      star: '★ 4.6',
      price:'$673 night'},
      { imageFile :"https://a0.muscache.com/im/pictures/942f695e-7ce5-46f6-92ce-3aafa44e0fa9.jpg?im_w=1200",
      address: '2814 Brindle , WI',
      star: '★ 5.96',
      price:'$673 night' }
]

const HouseParent = () => {
    return (
        <>
        {/* <h1>Just Booked in United States</h1> */}
        {names.map((info,infoIdx)=>{
            return<HouseInfo info={info} key={infoIdx}></HouseInfo>
        })}
    </>
    )
}
export default HouseParent