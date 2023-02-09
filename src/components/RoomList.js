import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './RoomList.css';
const RoomList = ({data}) => {
    const price = Number(data.r_price).toLocaleString('ko-KR');
    
    return (
        <li className='roomlist'>
            <div>
                <img src={`${API_URL}/upload/event/${data.r_img1}`} alt="" />
            </div>
            <div>
                <h3>{data.r_name}</h3>
                <p>기준인원 : 2 <br/> 최대인원 : 3</p>
            </div>
            <div>
                <div className='price'>{price}<br/><span>원/1박</span></div>
                <div>
                    <Link to={`/guestroom/${data.r_no}`}><button>객실 상세보기</button></Link>
                    <button>예약하기</button>
                </div>
            </div>
        </li>
    );
};

export default RoomList;