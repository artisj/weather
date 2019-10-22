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
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  //render function is required
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
