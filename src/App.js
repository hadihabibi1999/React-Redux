
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux';

class Main extends Component {
  constructor(){
    super();
    this.state={
      text:"click here"
    }
  }
  text = () => {
    this.setState({text:'look at your console'})
  }

  
  render() {
    return (
      <div style={{padding:420,backgroundColor:"lightblue"}}>
       <p onClick={this.text}>{this.state.text}</p>
      </div>
    );
  }
}
const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)
export default App;