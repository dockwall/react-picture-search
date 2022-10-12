import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter phrase for search image</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={(e) => {
                                this.setState({ searchTerm: (e.target.value) });
                            }}
                        />
                    </div>
                </form >
            </div >
        )
    }
}

export default SearchBar;
