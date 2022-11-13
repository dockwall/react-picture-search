import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.messageRef = React.createRef();
    }

    status = this.props.status

    styles = {
        error: {
            messageColor: 'red',
            title: 'Oops!',
            text: 'No images found on Unsplash matching your search'
        },

        fetch: {
            messageColor: '',
            title: 'Just one second',
            text: "We're fetching that content for you."
        }
    }

    render() {
        return (
            <div className={`ui icon message ${this.styles[this.status].messageColor}`} ref={this.messageRef}>
                {this.status === 'error' || this.status === 'success' ? null :
                    <i className={`notched circle loading icon ${this.styles[this.status].loader}`}></i>
                }

                <div className="content">
                    <div className="header">
                        {this.styles[this.status].title}
                    </div>
                    <p>{this.styles[this.status].text}</p>
                </div>
            </div>
        );
    }
}

export default Message;
