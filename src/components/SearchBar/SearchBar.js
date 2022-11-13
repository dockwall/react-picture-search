import React from "react";
import { faker } from "@faker-js/faker"

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Enter your search phrase, like...</label>
                        <input
                            placeholder={faker.animal.type()}
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
