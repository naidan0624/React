import React, {useState} from 'react';
import './index.css'
    const StatusPicker =()=>{
        const [picker, setpicker] = useState('Active');
    return (
        <div>
            My current status
            <div>
                <div className="status-wraper" >
                 <div className={
                    picker=== "Active" ? 'active ' 
                    : picker === 'Offline' ? 'offline' : 'away'}/>{picker}
                    </div>
            <button onClick={()=> setpicker ('Away')}>Away</button>
            <button onClick={()=> setpicker ('Active')}>Active</button>
            <button onClick={()=> setpicker ('Away')}>Offline</button>
            </div>
        </div>
    
      )
    }
     
export default StatusPicker

