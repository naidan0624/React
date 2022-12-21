import React, {useState} from "react";


export default function LocalStorage(){
    const [sampleData,setSampleData] = useState('')


return (
    <div style={{margin:20}}>
        {sampleData}
        <br/>
        <input placeholder=""
        ></input>
        LocalStorage
    </div>
    )
}