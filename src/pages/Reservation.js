import React from 'react';
import Title from '../components/Title';

const Reservation = () => {
    return (
        <div className='inner'>
            <Title title="Reservation"/>
            <ul>
                <li>
                    <div>
                        <span>Check in</span>
                        <input />
                    </div>
                    <div>
                        <span>Check out</span>
                        <input />
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
                <li></li>
            </ul>
        </div>
    );
};

export default Reservation;