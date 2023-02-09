import React from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
const RoomDetailPage = ({data}) => {
    return (
        <div className='inner'>
            <Title title={data.r_name}/>
            <div>
                <div><img src={`${API_URL}/upload/event/${data.r_img1}`} alt="" /></div>
                <h3>{data.r_name} <button>객실예약</button></h3>
                <ul>
                    <li>
                        <h4>기본정보</h4>
                        <ul>
                            <li>객실크기 | 14평</li>
                            <li>체크인 |  15:00 </li>
                            <li>이용요금 | {data.r_price}</li>
                            <li>베드타입 |  15:00 </li>
                            <li>객실크기 | 14평</li>
                            <li>체크인 |  15:00 </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RoomDetailPage;