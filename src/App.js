
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux';

class Main extends Component {
  state={
    count:0
  }

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });

  };
  
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });

  };

  render() {
    return (
      <div style={{padding:420,backgroundColor:"lightblue"}}>
       <button style={{height:30}} onPress={this.decrement}>decrement</button>
          {' '} <span style={{color:"steelblue"}}>{this.state.count}</span> {' '}
        <button style={{height:30}} onPress={this.increment}>increment</button>
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