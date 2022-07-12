import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(props) {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
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
