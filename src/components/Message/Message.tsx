import React from "react";

interface Status {
  style: string;
  title?: string;
  text?: string;
}

interface Config {
  inactive: Status;
  fetch: Status;
  error: Status;
  success: Status;
}

interface props {
  status: string;
  onClick: () => void;
}

class Message extends React.Component<props> {
  config: Config = {
    inactive: {
      style: "hidden",
    },

    fetch: {
      style: "icon",
      title: "Just one second",
      text: "We're fetching that content for you.",
    },

    error: {
      style: "negative",
      title: "Oops!",
      text: "No images found on Unsplash matching your search",
    },

    success: {
      style: "positive",
      title: "Wonderful!",
      text: "Pictures found for your request, enjoy them!",
    },
  };

  render() {
    const status = this.props.status;

    return (
      <div className="ui transition">
        <div
          className={`ui icon message ${
            this.config[status as keyof Config].style
          }`}
        >
          {status === "error" || status === "success" ? (
            <i className="close icon" onClick={this.props.onClick} />
          ) : (
            <i className="notched circle loading icon" />
          )}
          <div className="content">
            <div className="header">
              {this.config[status as keyof Config].title}
            </div>
            <p>{this.config[status as keyof Config].text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
