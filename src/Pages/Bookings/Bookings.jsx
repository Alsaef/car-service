// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setbooking] = useState([])
    const url = `http://localhost:3000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setbooking(data))
    }, [])
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        bookings.map(booking => <BookingRow booking={booking} setbooking={setbooking} bookings={bookings} key={booking._id}></BookingRow>)
                     }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Bookings;