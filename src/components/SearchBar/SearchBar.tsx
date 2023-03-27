import React, { ChangeEvent, FormEvent } from "react";
import { faker } from "@faker-js/faker";

interface Props {
  onSubmit: (searchTerm: string) => Promise<void>;
}

interface State {
  searchTerm: string;
}

class SearchBar extends React.Component<Props, State> {
  state = {
    searchTerm: "",
  };

  onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter your search phrase, like...</label>
            <input
              placeholder={faker.animal.type()}
              type="text"
              value={this.state.searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                this.setState({ searchTerm: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
