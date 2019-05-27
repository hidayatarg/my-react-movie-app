import React from 'react';
import PropTypes from 'prop-types';
const MovieList = ({movies}) => {
    const emptyMessage = (
        <p>There are no Movies Yet.</p>
    );

    const movieList = (
        <p>There are movies</p>
    )
    return (
        <div>
        {/* Movies List */}
        {
            movies.length === 0 ? emptyMessage : movieList
        }
            
        </div>
    )
}

// reciving data
MovieList.prototype = {
    movies: PropTypes.array.isRequired
};

export default MovieList
