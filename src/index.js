import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

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
  constructor(props) {
    //super(props) is required
    super(props);
    // This is the only direct assignment for state
    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  //render function is required
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
