import React, { useState } from 'react';

function Word({word}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleSee() {
        setIsVisible(!isVisible);
    }
    function toogleChk() {
        setIsDone(!isDone);
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toogleChk} /></td>
            <td>{word.eng}</td>
            <td>{isVisible && word.kor}</td>
            <td>
                <button onClick={toggleSee}>뜻 {isVisible ? "숨기기" : "보기"}</button>
                <button className='btn_del'>뜻 삭제</button>
            </td>
        </tr>
    );
}

export default Word;