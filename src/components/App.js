import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit(searchTerm) {
        // EasterEgg: this is my unsplash public token
        axios.get('https://api.unsplash.com/search/photos',
            {
                params: {
                    query: searchTerm,
                },

                headers: {
                    Authorization: 'Client-ID ulLTB12UZMQQ2WBv_MLqHA4aX5KljpsODsgDRbWPXDE',
                },
            }
        )
    }

    render() {
        return (
            <div
                className="ui container"
                style={{ marginTop: '15px' }}
            >
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;