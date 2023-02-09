import React from 'react';
import RoomList from '../components/RoomList';
import Title from '../components/Title';

const RoomPage = ({data}) => {
    const listitems = data.map(da=><RoomList data={da} key={da.r_no}/>);
    return (
        <div className='inner'>
            <Title title="Room"/>
            <ul>
                {listitems}
            </ul>
        </div>
    );
};

export default RoomPage;