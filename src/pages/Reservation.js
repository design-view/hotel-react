import React,{ useState } from 'react';
import Title from '../components/Title';
import RoomContainer from '../containers/RoomContainer';
import './Reservation.css';
import ReservCalendar from './ReservCalendar';

const Reservation = () => {
    
    const [ isShow, setIsShow ] = useState(false);
    const [reservData, setReservData] = useState({
        rv_date:{
            rv_start:"",
            rv_end: ""
        },
        rv_adult: "",
        rv_child: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setReservData({
            ...reservData,
            [name]: value
        })
        console.log(reservData);
    }

    const hideDateDiv = (start,end) => {
        if(start && end){
            setReservData({
                ...reservData,
                rv_date: {
                    rv_start:start,
                    rv_end:  end
                }
            })
            console.log(start,end);
            setIsShow(false);
        }else { return;}
    }
   
    return (
        <div className='inner'>
            <Title title="Reservation"/>
            <div className='reservation'>
                <ul className='reservsearch'>
                    <li>
                        <div>
                            <span>Check in</span>
                            <input onClick={()=>setIsShow(!isShow)} value={reservData.rv_date.rv_start}/>
                        </div>
                        <div>
                            <span>Check out</span>
                            <input onClick={()=>setIsShow(!isShow)} value={reservData.rv_date.rv_end}/>
                        </div>
                        <div className='calendar'>
                           {isShow && <ReservCalendar hideDateDiv={hideDateDiv} /> } 
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Adults</span>
                            <select>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Children</span>
                            <select>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </li>
                    <li>검색</li>
                </ul>
            </div>
            <RoomContainer isreserv={true}/>
        </div>
    );
};

export default Reservation;