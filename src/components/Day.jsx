import React from 'react';
import dummy from "../db/data.json"
import { useParams } from 'react-router-dom';
import Word from './Word';

function Day(props) {
    // const day = 1;

    // url에 포함된 day값을 받기 위해서 useParams() 사용
    const day = useParams().day; // useParams().넘어올떄의 이름

    const wordList = dummy.words.filter(item => {
        return item.day ===  Number(day);
    });
    
    return (
        <table>
            <tbody>
                 {/* {dummy.words.map(item => {  */}
                 {wordList.map(item => { 
                    return(
                        <Word key={item.id} word={item} /> 
                    );
                })}
            </tbody>
        </table>
    );
}

export default Day;