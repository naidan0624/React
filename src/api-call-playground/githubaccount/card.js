import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import './card.css'


export default function CardInfo({ hubinfo,getFollowers }) {
  
  const {loginName} = useParams ()
        console.log(loginName)
    const navigate = useNavigate ()

    return (

   
      <div className="apiContainer">
      {/* <pre>{JSON.stringify(hubinfo,null,2)}</pre> */}
      <div className="apitopcontainer">
        <img
          className="githublogo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
        <img
          className="apipic"
          src={hubinfo.avatar_url}
          style={{ margin: "0 auto" }}
        ></img>
      </div>
      <div className="apiinfo">
        <div>{hubinfo.login}</div>
        <div>@{hubinfo.login}</div>
        <h4>Bio:{hubinfo.bio} </h4>
      </div>
      <div className="apibottonborder">
        <div className="numbers">{hubinfo.followers} 
        <div>{hubinfo.following} </div>
        <div>{hubinfo.public_repos}</div></div>
        <br />
       
        <div className="words"> Following
        <div>Followers</div>
        <div>Repositories</div></div>
        <br/>
        {!loginName ? <button 
         onClick={()=>{
            navigate(hubinfo.login)
        }}>View Details</button>
      : 
      ''}
        
      </div>
    </div>
  
  );
}
