import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";
import Message from "./Message/Message";

class App extends React.Component {

    state = {
        images: [],
        messageStatus: 'inactive',
    }

    onSearchSubmit = async (searchTerm) => {
        let status = 'fetch';

        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }
        });

        if (!response.data.results.length) status = 'error';

        this.setState({ images: response.data.results, messageStatus: status });
    }

    onLastLoad = () => {
        this.setState({ messageStatus: 'success' })
    }

    onCloseClick = () => {
        this.setState({ messageStatus: 'inactive' })
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
                <Message status={this.state.messageStatus} onClick={this.onCloseClick} />
                <ImageList images={this.state.images} onLastLoad={this.onLastLoad} />
            </div>
        );
    }
};

export default App;