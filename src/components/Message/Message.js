import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.messageRef = React.createRef();
    }

    styles = {
        inactive: {
            messageStyle: 'hidden',
        },

        fetch: {
            messageStyle: 'icon',
            title: 'Just one second',
            text: 'We\'re fetching that content for you.'
        },

        error: {
            messageStyle: 'negative',
            title: 'Oops!',
            text: 'No images found on Unsplash matching your search'
        },

        success: {
            messageStyle: 'positive',
            title: 'Wonderful!',
            text: 'Pictures found for your request, enjoy them!'
        }
    }

    render() {
        const status = this.props.status;

        return (
            <div className={`ui icon message ${this.styles[status].messageStyle}`} ref={this.messageRef}>
                {status === 'error' || status === 'success' ? null :
                    <i className={`notched circle loading icon ${this.styles[status].loader}`}></i>
                }

                <div className="content">
                    <div className="header">
                        {this.styles[status].title}
                    </div>
                    <p>{this.styles[status].text}</p>
                </div>
            </div>
        );
    }
}

export default Message;
