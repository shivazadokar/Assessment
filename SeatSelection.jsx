import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const SeatSelection = ({ movieId }) => {
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetchSeats(movieId);
    }, [movieId]);

    const fetchSeats = async (movieId) => {
        try {
            const response = await axios.get(`/api/screens/${movieId}/seats`);
            setSeats(response.data);
        } catch (error) {
            console.error('Error fetching seats:', error);
        }
    };

    const toggleSeatSelection = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleBookTickets = async () => {
        try {
            const response = await axios.post('/api/bookings', {
                movieId,
                seatIds: selectedSeats
            });
            setBookingSuccess(true);
        } catch (error) {
            console.error('Error booking tickets:', error);
        }
    };

    return (
        <div>
            <h2>Seat Selection</h2>
            <div>
                {seats.map(seat => (
                    <button
                        key={seat.id}
                        disabled={seat.booked}
                        onClick={() => toggleSeatSelection(seat.id)}
                        style={{ backgroundColor: selectedSeats.includes(seat.id) ? 'green' : seat.booked ? 'red' : 'white' }}
                    >
                        {seat.seatNumber}
                    </button>
                ))}
            </div>
            <button onClick={handleBookTickets}>Book Tickets</button>
            {bookingSuccess && <p>Booking successful!</p>}
        </div>
    );
};

export default SeatSelection;
