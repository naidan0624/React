import React, { useState } from "react";

const SampleData = () => {
  const [data, setdata] = useState({
    name: "John",
    additionalData: {
      instructor: true,
      favoriteHobbies: ["Coding", "Playing Basketball"],
      favoriteFood: {
        type: "soup",
        includeNoodle: true,
      },
      moreDetails: {
        favoriteBasketballPlayer: "Kyrie Irving",
        numberOfSiblings: 5,
        isYoungest: true,
        hometown: {
          city: "Portland",
          state: "OR",
        },
        citiesLivedIn: ["Portland", "Chicago", "Ulaanbaatar"],
      },
    },
  });
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button
        onClick={() => {
          setdata((currState) => ({
            ...currState,
            name: "Jaagii",
          }));
        }}
      >
        Change the name
      </button>
      <button
        onClick={() =>
          setdata((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                favoriteHobbies: [
                  ...currState.additionalData.favoriteHobbies,
                  "new hobby",
                ],
              },
            };
          })
        }
      >
        New hobby
      </button>
      <button
        onClick={() =>
          setdata((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                favoriteFood: {
                  ...currState.additionalData.favoriteFood,
                  includeNoodle: false,
                },
              },
            };
          })
        }
      >
        includeNoodle false
      </button>
      <button
        onClick={() =>
          setdata((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                moreDetails: {
                  ...currState.additionalData.moreDetails,
                  isYoungest: false,
                },
              },
            };
          })
        }
      >
        isYoungest false
      </button>
      <button
        onClick={() =>
          setdata((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
            
                hometown: {
                  ...currState.additionalData.moreDetails.hometown,
                  state: "Illinois",
                },
              
              }}
          })
        }
      >
        state change
      </button>
      <button onClick={()=>{
         setdata((currState)=>{
            return{
               ...currState,
               additionalData:{
                  ...currState.additionalData,
                  moreDetails:{
                     ...currState.additionalData.moreDetails,
                     citiesLivedIn:
                        currState.additionalData.moreDetails.citiesLivedIn.filter(city => city !== 'Ulaanbaatar')
                     
                  }
               }
            }
         })
      }}>

      RemoveCity</button>
      <button onClick={()=>{
         setdata((currState)=>{
            return{
               ...currState,
               additionalData:{
                  ...currState.additionalData,
                  moreDetails:{
                     ...currState.additionalData.moreDetails,
                     citiesLivedIn:[
                        ...currState.additionalData.moreDetails.citiesLivedIn,
                        'Schaumburg,'
                     ]
                  }
               }
            }
         })
      }}>

     addcityname </button>
    </div>

  );
};

export default SampleData;
