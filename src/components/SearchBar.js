import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Print your query' />
                </form>
            </div>
        )
    }
};

export default SearchBar;
