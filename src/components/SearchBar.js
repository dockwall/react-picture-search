import React from "react";

class SearchBar extends React.Component {
    onInputChange(evt) {
        console.log(evt.target.value)
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        console.log('Data was successfully submitted!')
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter phrase for search image</label>
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form >
            </div >
        )
    }
}

export default SearchBar;
