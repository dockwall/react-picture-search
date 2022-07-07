import React from 'react';

class SearchBar extends React.Component {
    onInputChange(evt) {
        console.log(evt.target.value);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search image by text</label>
                        <input type='text' placeholder='Print your query' onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;
