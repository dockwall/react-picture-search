import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div>
                <div
                    className="ui container"
                    style={{ paddingTop: '15px' }}
                >
                    <h1 className="ui center aligned header">
                        Hello! This is the App to search for various pictures on Unsplash. Try it!
                    </h1>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>

            </div>
        );
    }
};

export default App;