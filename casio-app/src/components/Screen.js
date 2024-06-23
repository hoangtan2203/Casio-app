import React from 'react';

const Screen = ({resutl, outPutt}) => {
    return (
        <div className='screen'>
        {outPutt.length>=19?<div className='input' style={{color:"84 73 73", fontSize:"40px"}}>...{outPutt[outPutt.length-1]}</div>:<div className='input' ><label className='content'>{outPutt}</label></div>}
         <div className='resutl'>{resutl}</div>
         </div>
    );
};

export default Screen;