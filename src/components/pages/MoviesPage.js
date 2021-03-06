import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from '../MovieList';

class MoviesPage extends Component {
    static propTypes = {
        // will be an arry and it will be required
        movies: PropTypes.array.isRequired
    }
    render() {
        console.log('Props: ', this.props);
        
        return (
            <div>
                <h2>Movies Page</h2>
                {/* calling Movie Component Passing the movies */}
                <MovieList movies={this.props.movies}></MovieList>
            </div>
        )
    }
}
// read State
const mapStateToProps = ({movies}) => {
    return {
        movies
    }
}

/* OR
const mapStateToProps = state => {
return {
movies: state.movies
}
}
*/

export default connect(mapStateToProps) (MoviesPage)

