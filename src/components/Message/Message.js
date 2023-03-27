import React from "react";

class Message extends React.Component {
    config = {
        inactive: {
            style: 'hidden',
        },

        fetch: {
            style: 'icon',
            title: 'Just one second',
            text: 'We\'re fetching that content for you.'
        },

        error: {
            style: 'negative',
            title: 'Oops!',
            text: 'No images found on Unsplash matching your search',
        },

        success: {
            style: 'positive',
            title: 'Wonderful!',
            text: 'Pictures found for your request, enjoy them!'
        }
    }

    render() {
        const status = this.props.status;

        return (
            <div className="ui transition">
                <div
                    className={`ui icon message ${this.config[status].style}`}
                >
                    {status === 'error' || status === 'success' ?
                        <i className='close icon'
                            onClick={this.props.onClick}
                        /> :
                        <i className="notched circle loading icon" />
                    }
                    <div className="content">
                        <div className="header">
                            {this.config[status].title}
                        </div>
                        <p>{this.config[status].text}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Message;
