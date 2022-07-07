import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    };

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search image by text</label>
                        <input
                            type='text'
                            placeholder='Print your query'
                            value={this.state.term}
                            onChange={(e) => { this.setState({ term: e.target.value }) }}
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;
