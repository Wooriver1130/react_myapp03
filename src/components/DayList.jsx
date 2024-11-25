import React from 'react';
import dummy from "../db/data.json"
import { Link } from 'react-router-dom';
function DayList(props) {
    // console.log("dummy: ", dummy);
    return (
        <div>
            <ul className='list_day'> {/* 라우트에서 a링크 대신 Link 태그를 사용한다.   */}
                {dummy.days.map(item => { 
                  return   <Link to={`/day/${item.day}`} > <li key={item.id}>Day {item.day}</li></Link>
                })}
            </ul>
        </div>
    );
}

export default DayList;