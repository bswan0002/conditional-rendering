import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  pageToDisplay = () => {
    switch (this.state.selectedPage) {
      case "profile":
        return <Profile />;
      case "photo":
        return <Photos />;
      case "cocktail":
        return <Cocktails />;
      case "pokemon":
        return <Pokemon />;
      default:
        return <Profile />;
    }
  };

  state = {
    selectedPage: "profile",
  };

  handleClick = (e) => {
    this.setState({ selectedPage: e.target.id });
  };

  render() {
    return (
      <div>
        <MenuBar
          handleClick={this.handleClick}
          selectedPage={this.state.selectedPage}
        />
        {this.pageToDisplay()}
      </div>
    );
  }
}

export default MainBox;
