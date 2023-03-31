import React from 'react';

const Time = ({time}) => {
   

    let totalTime = 0
    for(let updateTime of time){
        totalTime += updateTime
    }
    
    return (
        <div className='mt-5' style={{background:'#c6c0ee9f',border:'1px solid #6047EC',position:'sticky',top:'100px'}}>
            <div className='p-4 text-center'><h6 style={{color:'#6047EC',cursor:'pointer'}}>time on read:{totalTime} min</h6></div>
        </div>
    );
};

export default Time;