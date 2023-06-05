import "./App.css";
import React, { Component } from "react";
import Scrollspy from "./Scroll";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    
    };
  }

  IncreaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  DecreaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
    
  };

  render() {
    return (
      <div>
        {/* <PopupArticle /> */}
        {/* {this.state.count} */}
        <Scrollspy
          count={this.state.count}
          IncreaseCount={this.IncreaseCount}
          DecreaseCount={this.DecreaseCount}
        />

      </div>
      
    );
  } //render()
}

export default App;