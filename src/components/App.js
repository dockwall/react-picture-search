import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";
import Message from "./Message/Message";

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        });

        if (!response.data.results.length) response.data.results = 'error';

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div
                className="ui container"
                style={{ paddingTop: '15px' }}
            >
                <h1 className="ui center aligned header">
                    Hello! This is the App to search for various pictures on Unsplash. Try it!
                </h1>
                <SearchBar onSubmit={this.onSearchSubmit} />

                {Array.isArray(this.state.images) && this.state.images.length ?
                    <div>
                        <Message status='fetch' />
                        <ImageList images={this.state.images} />
                    </div> :
                    this.state.images === 'error' ? <Message status='error' /> : null
                }

            </div>
        );
    }
};

export default App;