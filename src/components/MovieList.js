import React from 'react';
import PropTypes from 'prop-types';
const MovieList = (props) => {
    const emptyMessge = (
        <p>There are no Movies Yet.</p>
    );

    const movieList = (
        <p>There are movies</p>
    )
    return (
        <div>
        {/* Movies List */}
        {
            props.movies.length ===0 ? emptyMessge : movieList
        }
            
        </div>
    )
}

// reciving data
MovieList.prototype = {
    movies: PropTypes.array.isRequired
};

export default MovieList
