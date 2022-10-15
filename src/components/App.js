import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (searchTerm) => {
        // EasterEgg: this is my unsplash public token
        const response = await axios.get('https://api.unsplash.com/search/photos',
            {
                params: {
                    query: searchTerm,
                },

                headers: {
                    Authorization: 'Client-ID ulLTB12UZMQQ2WBv_MLqHA4aX5KljpsODsgDRbWPXDE',
                },
            });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div
                className="ui container"
                style={{ marginTop: '15px' }}
            >
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
};

export default App;