import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('/api/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <h2>Available Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <div>Title: {movie.title}</div>
                        <div>Genre: {movie.genre}</div>
                        <div>Showtime: {movie.showtime}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
