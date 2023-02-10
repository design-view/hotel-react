import React from 'react';
import RoomList from '../components/RoomList';
import Title from '../components/Title';

const RoomPage = ({data , isreserv}) => {
    const listitems = data.map(da=><RoomList data={da} key={da.r_no}/>);
    return (
        <div className='inner'>
            {/* 예약페이지가 아닐때만 타이틀 지정하기 */}
            { !isreserv &&  <Title title="Room"/> }
            { isreserv &&  <div style={{padding: "40px 0", fontSize:"18px"}}>객실</div> }
            <ul>
                {listitems}
            </ul>
        </div>
    );
};

export default RoomPage;