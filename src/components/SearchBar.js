import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search image by text</label>
                        <input type='text' placeholder='Print your query' />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;
