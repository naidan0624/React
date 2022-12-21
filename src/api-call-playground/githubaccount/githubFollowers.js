import React, { useEffect, useState } from "react";
import axios from "axios";
import CardInfo from "./card";

export default function FetchFollowers({ followers }) {
  const [myFollowers, setMyFollowers] = useState([]);

  const fetchMyFollowers = () => {
    axios
      .get("https://api.github.com/users/badishd-icodice-edu/followers")
      .then((res) => {
        if (res.status === 200) {
          console.log("api response", res.data);
          setMyFollowers(res.data);
        }
      })
      .catch((err) => {
        if (err.status === 404) {
          console.log("Something is wrong");
        }
      })
      .finally((finallyp) => {
        console.log("followers req is completed");
      });
  };
  useEffect(() => {
    fetchMyFollowers();
  }, []);

  //  const getFollowers = myFollowers.map((myFollowers) =>
  // <li>{myFollowers}</li>
  // )

  return (
    <div className="apiBigContainer">
      {/* <pre>{JSON.stringify(myFollowers, null, 2)}</pre>test */}
      {myFollowers.map((follower,idx) => {
        return <CardInfo 
        key={idx}
        hubinfo={follower} />;
      })}
    </div>
  );
}
