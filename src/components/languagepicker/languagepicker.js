import React,{useState} from "react";
import './index.css'

const LanguagePicker = () =>{
    const [selectedCountry,setSelectedCountry] = useState((countries[0]))
    const [showOtherFlags,setShowOtherFlags] = useState (false)
    return ( 
        
        <div className="container">
            <div>
                <button onClick={()=> setShowOtherFlags((curr)=> !curr)}>
                <img src={selectedCountry.flagSrc} width={200} alt='country flags'/>
                </button>
            </div>
            {showOtherFlags && (
                <div>
                    {countries 
                    .filter((c)=> c.country !== selectedCountry.country)
                    .sort((c1,c2) => (c1.country > c2.country ? 1:-1))
                    .map((c,cIdx)=>(
                        <button
                        key={cIdx}
                        onClick={()=>{
                            setSelectedCountry(c)
                            setShowOtherFlags(false)
                        }}>
                            <img src={c.flagSrc} width={60} alt='country flag'/>
                            <span>{c.country}</span>
                        </button>
                    ))
                    }

                </div>
            )}
        

    </div>
    )}


export default LanguagePicker

const mongoliaFlag = 'https://flagpedia.net/data/flags/w580/mn.webp'
const cambodiaFlag = 'https://flagpedia.net/data/flags/w580/kh.webp'
const bangladeshFlag = 'https://flagpedia.net/data/flags/w580/bd.webp'
const indonesiaFlag = 'https://flagpedia.net/data/flags/w580/id.webp'


const countries = [
   { flagSrc: mongoliaFlag, country: 'Mongolia' },
  { flagSrc: cambodiaFlag, country: 'Cambodia' },
  { flagSrc: bangladeshFlag, country: 'Bangladesh' },
  { flagSrc: indonesiaFlag, country: 'Indonesia' },
]