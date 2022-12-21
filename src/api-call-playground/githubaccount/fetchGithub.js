import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useParams } from "react-router-dom";
import CardInfo from "./card";


export default function FetchGithub () {
    const {loginName} = useParams ()
        console.log(loginName)


    const [myaccount, setMyAccount] = useState ({})
   

    const fetchMyGithub =()=>{
        axios 
            .get (`https://api.github.com/users/${loginName}` )
            .then ((res)=>{
                if (res.status === 200) {
                    setMyAccount(res.data)
                } 
            })
            .catch((err)=>{
                if(err.status === 404) {
                    console.log ("Status is wrong")
                }
            })
            .finally((finallyP)=>{
                console.log('req is completedsss')
            })
    }
    useEffect(()=>{
        fetchMyGithub()
    },[])
    return (
        <div>
            <CardInfo hubinfo = {myaccount}/>
            
            </div>
    )
}