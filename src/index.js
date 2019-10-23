import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

// functional based component
/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    err => console.log(err)
  );
  return <div>Latitude: </div>
    
};
*/

//class based components can use the react state
// updating the state will cause the component to rerender
class App extends React.Component {
  //javascript constructor
  /*
  constructor(props) {
    //super(props) is required
    super(props);
    // This is the only direct assignment for state
    this.state = { lat: null, errMessage: "" };
  }
  */

  // second way of initializing the state
  // babel will setup the super behind the sceens
  state = { lat: null, errMessage: "" };

  // called once when the component first loads
  // Initial data loading should go here
  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  // called every time the component is changed it will also
  // call the render method (state/prop changes)
  componentDidUpdate() {
    console.log("My component was just updated");
  }

  // render helper to avoid conditions in the render function
  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please Allow Location Request" />;
  }
  // render function is required
  // used to render jsx
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
