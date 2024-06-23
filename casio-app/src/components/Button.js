import React from 'react';

const Button = ({ bracket,
    newNumber,
    hanldeSubmit,
    hanldeSelectNumber,
    handleAddfuncion,
    handleAddBracket,
    hanldeClear,
    handleDelete,
    symbol }) => {
    return (
        <div className='all-button'>
            <div className='all-number'>
                {newNumber.reverse().map(item => (
                    <button className='number' onClick={() => hanldeSelectNumber(item)}>{item}</button>
                ))}

                <button className='number 1' onClick={hanldeSubmit}>=</button>
            </div>
            <div className='functional-btn'>
                <button className='function' style={{ backgroundColor: "orange", color: "black" }} onClick={handleDelete}>DEL</button>
                <button className='function' style={{ backgroundColor: "orange", color: "black" }} onClick={hanldeClear}>AC</button>
                {
                    symbol.map(item => (
                        <button className='function' onClick={() => handleAddfuncion(item)}>{item}</button>
                    ))
                }
                <div className='bracket'>
                    {bracket.map(item => (
                        <button className='function' onClick={() => handleAddBracket(item)}>{item}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Button;