import {Link} from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import React from 'react';
import Title from '../components/Title';
function SpecialList({list}){
    const { e_title, e_titledesc, e_img1 , e_no, e_time} = list;
    return (
        <li>
            <div className='imgdiv'>
                <img src={`${API_URL}/${e_img1}`} alt=""/>
            </div>
            <div className='textdiv'>
                <h3>{e_title}</h3>
                <p>
                    {e_titledesc}
                </p>
                <div>
                    기간 | {e_time}
                </div>
            </div>
        </li>
    )
}
const SpecialOfferPage = ({data}) => {
    return (
        <div className='specialpage'>
        <div className='inner'>
            <Title title="Special"/>
            <ul>
                {data.map(d=><SpecialList list={d} key={d.e_no}/>)}
            </ul>
        </div>
        </div> 
    );
};

export default SpecialOfferPage;