import React from 'react';
import './../accesst/main.scss'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {sumItem} from './../redux/reducer/calculatorSlice';
import Screen from './Screen';
import Button from "./Button";
const Calculator = () => {

    const dispath = useDispatch();
    // const letdo = useSelector(state => state.cal);
    const letdo = useSelector(state => state.cal);
    
    // hiển thị phép tính
    const [outPutt, SetOutPutt] = useState([]);
    console.log(outPutt)
    // hiển thị kết quả

    const [resutl, setResutl] = useState();

    useEffect(()=>{
        setResutl(letdo.resutl)
    },[letdo.resutl])

    // mảng chứa số
    const number = [".","0","3","2","1","6","5","4","9","8","7"];
    const newNumber = [...number];

    // mảng chứa dấu
    const symbol = ["*","/","+","-","^"];
    const bracket = ["(",")"];
  

    // click vào số bất kì
    const hanldeSelectNumber = (value) => {
        const newArr = [...outPutt];
        const select = number.find(x=>x === value);
        newArr.push(select);
        SetOutPutt(newArr)
    };

    // thêm dấu 
    const handleAddfuncion = (val) => {
        const newVal = [...outPutt];
        const indexVal = symbol.find(x=>x === val);
        newVal.push(indexVal);
        SetOutPutt(newVal);
    }

    const handleAddBracket = (val) => {
        const newVal = [...outPutt];
        const indexVal = bracket.find(x=>x === val);
        newVal.push(indexVal);
        SetOutPutt(newVal);
    }
    
    // button submit
    const hanldeSubmit = () => {
            dispath(sumItem(outPutt));
    }

    const handleDelete = () => {
        const newArr = [...outPutt];
        newArr.splice(-1,1);
        SetOutPutt(newArr)
    }
    // xóa tất cả
    const hanldeClear = () => {
        SetOutPutt([])
        dispath(sumItem([]))
        setResutl("");
    }

    return (
        <div className='main'>
            <div className='center'>
                <Screen 
                resutl={resutl} 
                outPutt={outPutt}
                />
                <Button 
                handleAddBracket={handleAddBracket}
                hanldeClear={hanldeClear}
                handleDelete={handleDelete}
                hanldeSubmit={hanldeSubmit}
                handleAddfuncion={handleAddfuncion}
                hanldeSelectNumber={hanldeSelectNumber}
                newNumber={newNumber}
                symbol={symbol}
                bracket={bracket}
                />
            </div>
        </div>
    );
};

export default Calculator;